# API REST

Comenzaremos a trabajar en nuestro MERN/MEVN utilizando:

-   Node.js
-   Express
-   MongoDB
-   React/Vue

Separaremos lo que es backend del frontend, por ende este mismo proyecto de back nos servirá tanto para Vue o React.

:::tip
😍😍😍 Más clases en vivo gratis aquí: [twitch.tv/bluuweb](https://www.twitch.tv/bluuweb) 🤙🤙🤙
:::

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)

:::

## Requisitos

-   [Curso de Javascript + Node.js](https://bit.ly/3vmXdae)

## Primeros pasos

```sh
npm init -y
npm i bcryptjs cookie-parser cors dotenv express express-validator jsonwebtoken mongoose
npm i -D nodemon
```

package.json

```json{2, 4-5}
{
    "type": "module",
    "scripts": {
        "dev": "nodemon .",
        "start": "node index.js"
    }
}
```

Crear:

```sh
index.js
.env
.gitignore
README.md
└── controllers
└── database
└── helpers
└── middlewares
└── models
└── routes
```

.gitignore

```
node_modules
.env
```

index.js

```js
import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));
```

## Mongoose

-   [mongodb](https://www.mongodb.com/)
-   [mongoosejs](https://mongoosejs.com/)

database/connectdb.js

```js
import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.DB_URI);
    console.log("😎😎 db conectada");
} catch (error) {
    console.log("😒😒" + error);
}
```

## Schema & Models

-   [Schema](https://mongoosejs.com/docs/guide.html#definition): Con Mongoose, todo se deriva de un esquema.
-   Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.
-   Para usar nuestra definición de esquema, necesitamos convertirla a un modelo con el que podamos trabajar.

models/User.js

```js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre("save", async function(next) {
    const user = this;

    if (!user.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Error al codificar la contraseña");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);
```

## Routes

index.js

```js
import authRoutes from "./routes/auth.route.js";
...
app.use("/api/v1/auth", authRoutes);
```

routes/auth.route.js

```js
import express from "express";
import {
    login,
    register,
    infoUser,
    refreshToken,
    logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", validateToken, infoUser);
router.get("/refresh", refreshToken);
router.get("/logout", logout);

export default router;
```

## Controllers

controllers/auth.controller.js

```js
export const register = async (req, res) => {};

export const login = async (req, res) => {};

export const infoUser = async (req, res) => {};

export const refreshToken = (req, res) => {};

export const logout = (req, res) => {};
```

## Register

routes/auth.route.js

```js
import express from "express";
import {
    login,
    register,
    infoUser,
    refreshToken,
    logout,
} from "../controllers/auth.controller.js";
import { validatorExpress } from "../middlewares/validatorExpress.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/register",
    [
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña mínimo 6 carácteres")
            .trim()
            .isLength({ min: 6 })
            .custom((value, { req }) => {
                if (value !== req.body.repassword) {
                    throw new Error("No coinciden las contraseñas");
                }
                return value;
            }),
    ],
    validatorExpress,
    register
);
```

middlewares/validatorExpress.js

```js
import { validationResult } from "express-validator";
export const validatorExpress = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    next();
};
```

controllers/auth.controller.js

```js
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) throw new Error("Email ya registrado 😒");

        user = new User({ email, password });
        await user.save();

        // Generar token
        // const { token, expiresIn } = generateToken(user.id);
        // generateRefreshToken(user.id, res);
        // return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};
```

## Login

routes/auth.route.js

```js
router.post(
    "/login",
    [
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña mínimo 6 carácteres")
            .trim()
            .isLength({ min: 6 }),
    ],
    validatorExpress,
    login
);
```

controllers/auth.controller.js

```js
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        let user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password)))
            throw new Error("Email or password is incorrect");

        // const { token, expiresIn } = generateToken(user.id);
        // generateRefreshToken(user.id, res);
        // return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};
```

## JWT

helpers/generateTokens.js

```
URI_MONGO=
JWT_SECRET=
JWT_REFRESH=
MODO=developer
```

```js
import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
    const expiresIn = 1000 * 60 * 15;
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
};

export const generateRefreshToken = (uid, res) => {
    const expiresIn = 1000 * 60 * 60 * 24 * 30;
    const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
        expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: !(process.env.MODO === "developer"),
        expires: new Date(Date.now() + expiresIn),
    });
};
```

controllers/auth.controller.js

```js
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import {
    generateToken,
    generateRefreshToken,
} from "../helpers/generateTokens.js";

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) throw new Error("Email ya registrado 😒");

        user = new User({ email, password });
        await user.save();

        const { token, expiresIn } = generateToken(user.id);
        generateRefreshToken(user.id, res);

        return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        let user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password)))
            throw new Error("Email or password is incorrect");

        const { token, expiresIn } = generateToken(user.id);
        generateRefreshToken(user.id, res);

        return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};
```

## Ruta protegida

routes/auth.route.js

```js
import { validateToken } from "../middlewares/validateToken.js";
...
router.get("/protected", validateToken, infoUser);
router.get("/logout", logout);
```

middlewares/validateToken.js

```js
import jwt from "jsonwebtoken";
import { errorTokens } from "../utils/errorsToken.js";

export const valitateToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if (!token) throw new Error("No existe el token");

        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: errorTokens(error.message) });
    }
};
```

helpers/errorsToken.js

```js
export const errorTokens = (message) => {
    switch (message) {
        case "jwt malformed":
            return "Formato no válido";
        case "invalid token":
        case "jwt expired":
        case "invalid signature":
            return "Token no válido";
        default:
            return message;
    }
};
```

controllers/auth.controller.js

```js
export const infoUser = async (req, res) => {
    try {
        const user = await User.findById(req.uid).lean();
        delete user.password;
        return res.json({ user });
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: error.message });
    }
};

export const logout = (req, res) => {
    // https://stackoverflow.com/questions/27978868/destroy-cookie-nodejs
    res.clearCookie("refreshToken");
    return res.json({ ok: true });
};
```

## Refresh Token

routes/auth.route.js

```js
router.get("/refresh", refreshToken);
```

controllers/auth.controller.js

```js
import {
    generateToken,
    generateRefreshToken,
} from "../helpers/generateTokens.js";
import { errorsToken } from "../helpers/errorsToken.js";

export const refreshToken = (req, res) => {
    try {
        let refreshTokenCookie = req.cookies?.refreshToken;
        if (!refreshTokenCookie) throw new Error("No existe el refreshToken");

        const { id } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

        const { token, expiresIn } = generateToken(id);

        return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        const data = errorsToken(error);
        return res.status(401).json({ error: data });
    }
};
```

## Simple HTML

```js
app.use(express.static("public"));
```

public/index.html

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
    </head>
    <body>
        <form id="formLogin">
            <input type="email" value="jhonatan@test.com" id="email" />
            <input type="password" value="123123" id="password" />
            <button type="submit">Acceder</button>
        </form>

        <script>
            const formLogin = document.querySelector("#formLogin");
            const email = document.querySelector("#email");
            const password = document.querySelector("#password");

            formLogin.addEventListener("submit", async (e) => {
                e.preventDefault();
                try {
                    const res = await fetch("/api/v1/auth/login", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email.value,
                            password: password.value,
                        }),
                    });

                    console.log(res.ok, res.status);
                    const { token } = await res.json();

                    window.location.href = "/protected.html";
                } catch (error) {
                    console.log(error);
                }
            });
        </script>
    </body>
</html>
```

public/protected.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ruta protegida</title>
    </head>
    <body>
        <h1>Ruta protegida</h1>
        <div id="app">
            <h2>Email</h2>
            <h3>UID</h3>
        </div>
        <button id="logout">Logout</button>

        <script>
            document.addEventListener("DOMContentLoaded", async (e) => {
                const app = document.querySelector("#app");
                try {
                    const resToken = await fetch("/api/v1/auth/refresh", {
                        credentials: "include",
                    });
                    console.log(resToken.ok, resToken.status);
                    const { token } = await resToken.json();
                    // console.log(token);

                    const res = await fetch("/api/v1/auth/protected", {
                        headers: {
                            Authorization: "Basic " + token,
                        },
                    });
                    console.log(res.ok, res.status);

                    if (!res.ok) {
                        window.location.href = "/";
                    }

                    const { user } = await res.json();
                    console.log(user);

                    app.innerHTML = `
                        <h2>Email: ${user.email}</h2>
                        <h3>UID: ${user._id}</h3>
                    `;
                } catch (error) {
                    console.log(error);
                }

                const logout = document.querySelector("#logout");
                logout.addEventListener("click", async () => {
                    const res = await fetch("/api/v1/auth/logout");
                    console.log(res.ok, res.status);
                    if (res.ok) {
                        window.location.href = "/";
                    }
                });
            });
        </script>
    </body>
</html>
```

## Mejoras 1.0

utils/tokenManager.js

```js
import jwt from "jsonwebtoken";
export const generateToken = (uid) => {
    const expiresIn = 60 * 15;

    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
        return { token, expiresIn };
    } catch (error) {
        console.log(error);
    }
};

export const generateRefreshToken = (uid, res) => {
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
            expiresIn,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000),
        });
    } catch (error) {
        console.log(error);
    }
};

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no válido",
    "No Bearer": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no válido",
};
```

auth.route.js

```js
router.get("/refresh", requireRefreshToken, refreshToken);
```

middlewares/requireRefreshToken.js

```js
import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager.js";

export const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie) throw new Error("No existe el token");

        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

        req.uid = uid;
        next();
    } catch (error) {
        console.log(error);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};
```

controllers/auth.controller.js (refreshToken)

```js
export const refreshToken = (req, res) => {
    try {
        const { token, expiresIn } = generateToken(req.uid);
        return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de server" });
    }
};
```

## validatorManager.js

auth.route.js

```js
import { Router } from "express";
import {
    infoUser,
    login,
    logout,
    refreshToken,
    register,
} from "../controllers/auth.controller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { requireToken } from "../middlewares/requireToken.js";
import {
    loginValidator,
    registerValidator,
    tokenCookieValidator,
    tokenHeaderValidator,
} from "../middlewares/validatorManager.js";

const router = Router();

router.post("/register", registerValidator, register);

router.post("/login", loginValidator, login);

router.get("/protected", tokenHeaderValidator, requireToken, infoUser);
router.get("/refresh", tokenCookieValidator, requireRefreshToken, refreshToken);

router.get("/logout", logout);

export default router;
```

middlewares/validatorManager.js

```js
import { body, cookie, header, validationResult } from "express-validator";

const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

export const registerValidator = [
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres")
        .trim()
        .isLength({ min: 6 }),
    body("password", "Formato de password incorrecta").custom(
        (value, { req }) => {
            if (value !== req.body.repassword) {
                throw new Error("No coinciden las contraseñas");
            }
            return value;
        }
    ),
    validationResultExpress,
];

export const loginValidator = [
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres")
        .trim()
        .isLength({ min: 6 }),
    validationResultExpress,
];

export const tokenHeaderValidator = [
    header("authorization", "No existe el token")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
];

export const tokenCookieValidator = [
    cookie("refreshToken", "No existe refresh Token")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
];
```

## Links (URL)

model/Link.js

```js
import mongoose from "mongoose";
const { Schema } = mongoose;

const linkSchema = new Schema({
    longLink: {
        type: String,
        required: true,
        trim: true,
    },
    nanoLink: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    uid: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Link = mongoose.model("Link", linkSchema);
```

routes/link.route.js

```js
import { Router } from "express";

const router = Router();

// GET      api/v1/links                all links
// GET      api/v1/links/:nanoLink      search link
// POST     api/v1/links                create link
// PATCH    api/v1/links                update link
// DELETE   api/v1/links/:nanoLink      remove link

export default router;
```

index.js

```js
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import "./database/connectdb.js";
import authRouter from "./routes/auth.route.js";
import linkRouter from "./routes/link.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);

// solo para el ejemplo de login/token
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🔥🔥🔥 http://localhost:" + PORT));
```

## getLinks

controllers/link.controller.js

```js
import { Link } from "../models/Link.js";

export const getLinks = async (req, res) => {
    try {
        const links = await Link.find({ uid: req.uid }).lean();
        return res.json({ links });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
```

routes/link.route.js

```js
import { Router } from "express";
import { getLinks } from "../controllers/link.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { tokenHeaderValidator } from "../middlewares/validatorManager.js";

const router = Router();

router.get("/", tokenHeaderValidator, requireToken, getLinks);

export default router;
```

## createLink

middlewares/validatorManager.js

```js
export const linkValidator = [
    body("longLink", "Formato link incorrecto")
        .trim()
        .custom(async (value) => {
            try {
                if (!value.startsWith("http")) {
                    value = "https://" + value;
                }
                await axios.get(value);
                return value;
            } catch (error) {
                throw new Error("Link 404 not found");
            }
        }),
    validationResultExpress,
];
```

routes/link.route.js

```js
router.post("/", tokenHeaderValidator, requireToken, linkValidator, createLink);
```

controllers/link.controller.js

```js
export const createLink = async (req, res) => {
    try {
        const { longLink } = req.body;
        const link = new Link({ longLink, nanoLink: nanoid(6), uid: req.uid });
        const newLink = await link.save();
        res.json({ newLink });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }
};
```

## removeLink

link.route.js

```js
router.delete(
    "/:id",
    tokenHeaderValidator,
    requireToken,
    paramsLinkValidator,
    removeLink
);
```

middlewares/validatorManager.js

```js
export const paramsLinkValidator = [
    param("id", "Formato id incorrecto")
        .trim()
        .notEmpty()
        .escape(),
    validationResultExpress,
];
```

link.controller.js

```js
export const removeLink = async (req, res) => {
    try {
        const { id } = req.params;
        const link = await Link.findById(id);

        if (!link) return res.status(404).json({ error: "no existe link" });

        if (!link.uid.equals(req.uid))
            return res.status(401).json({ error: "no es tu link payaso 🤡" });

        await link.remove();
        return res.json({ link });
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId")
            return res.status(403).json({ error: "Formato id incorrecto" });
        return res.status(500).json({ error: "Error de servidor" });
    }
};
```

## mongo sanitize

-   [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
