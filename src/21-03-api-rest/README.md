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

```js
import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    const expiresIn = 15 * 60 * 1000;

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn,
    });

    return { token, expiresIn };
};

export const generateRefreshToken = (id, res) => {
    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH, {
        expiresIn: "30d",
    });

    // 30 días
    const expires = new Date(Date.now() + 30 * 60 * 60 * 1000);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        expires,
        secure: !(process.env.MODO === "developer"),
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
import { errorsToken } from "../helpers/errorsToken.js";

export const validateToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if (!token) throw new Error("No existe el token");

        // Bearer Authentication
        token = token.split(" ")[1];

        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;
        next();
    } catch (error) {
        console.log(error);
        const data = errorsToken(error);
        return res.status(401).json({ ok: false, data });
    }
};
```

helpers/errorsToken.js

```js
export const errorsToken = (error) => {
    let data;
    switch (error.message) {
        case "jwt malformed":
            data = "Formato no válido";
            break;
        case "invalid token":
        case "jwt expired":
        case "invalid signature":
            data = "Token no válido";
            break;
        default:
            data = error.message;
    }
    return data;
};
```

controllers/auth.controller.js

```js
export const infoUser = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        res.json({ ok: true, email: user.email });
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
