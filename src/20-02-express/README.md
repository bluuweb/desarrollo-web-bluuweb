# Express Template Engine

En este capítulo realizaremos un proyecto para conocer como trabajar con motores de plantilla y autenticación de usuarios entre otras cosas.

## Códigos

-   [crud básico repo](https://github.com/bluuweb/hbs-express-passport-mongoose-express-validator-flash-sessiones/tree/01-crud-basics)
-   [auth #01 repo](https://github.com/bluuweb/hbs-express-passport-mongoose-express-validator-flash-sessiones/tree/01-crud-basics)

notas del editor

```
git push --all origin
```

## Objetivos

-   Motores de plantilla (template engine)
    -   [HBS y/o EJS](https://bluuweb.github.io/node/03-vistas/)
-   MongoDB
    -   ShortURL
-   Auth User
    -   Rutas protegidas
    -   Sessions
    -   Passport
-   Email
    -   Enviar confirmación de cuenta
-   Subir archivos
    -   Cambiar foto de perfil

#### Próximos capítulos:

-   API REST
-   JWT
-   Firebase
    -   Auth
    -   Firestore
-   MEVN / MERN

## Template Engines

-   [Template Engines](https://expressjs.com/es/guide/using-template-engines.html)
-   [express-handlebars](https://www.npmjs.com/package/express-handlebars)

En una galaxia muy lejana...

```
npm init -y
npm i -D nodemon
npm i express express-handlebars
```

package.json

```json
"scripts": {
    "dev": "nodemon index.js"
},
```

nodemon.json

```json
{
    "ext": "js,json,hbs"
}
```

index.js

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("probando...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥"));
```

Directorios

```
└── views
    ├── home.hbs
    └── layouts
        └── main.hbs
```

```js
const express = require("express");
const { create } = require("express-handlebars");

const app = express();

const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home", { titulo: "Página de inicio" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server andando 🔥"));
```

views/layouts/main.hbs

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Main</title>
    </head>
    <body>
        {{{body}}}
    </body>
</html>
```

views/home.hbs

```html
<h1>{{titulo}}</h1>
```

## Partials/Components

```js
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});
```

views/components/Navbar.hbs

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
        <a class="navbar-brand" href="/">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/logup">LogUp</a>
                <a class="nav-link" href="/login">LogIn</a>
                <a class="nav-link" href="/logup">LogOut</a>
            </div>
        </div>
    </div>
</nav>
```

views/layout/main.hbs

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Main</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
    </head>
    <body>
        {{> Navbar}}

        <div class="container mt-2">
            {{{body}}}
        </div>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
```

## Helpers

-   [nanoid](https://github.com/ai/nanoid#install)
-   [helpers hbs](https://handlebarsjs.com/guide/block-helpers.html#simple-iterators)

```js
app.get("/", (req, res) => {
    const urls = [
        { origin: "https://www.google.com", shortURL: nanoid(7) },
        { origin: "https://www.bluuweb.org", shortURL: nanoid(7) },
    ];
    res.render("home", { titulo: "Página de inicio", urls });
});
```

```html
<h1 class="text-center my-5">{{titulo}}</h1>

<ul>
    {{#each urls }}
    <li>{{this.origin}} - {{this.shortURL}}</li>
    {{/each}}
</ul>
```

components/Card.hbs

```html
<article class="card mb-2">
    <div class="card-body">
        <p>{{url.origin}}</p>
        <p>{{url.shortURL}}</p>
        <button class="btn btn-primary">Copiar</button>
        <a href="#" class="btn btn-danger">Eliminar</a>
    </div>
</article>
```

```html
<h1 class="text-center my-5">{{titulo}}</h1>

{{#each urls }} {{> Card url=this}} {{/each}}
```

## express.Router

-   [Router](https://expressjs.com/es/guide/routing.html): Utilice la clase express.Router para crear manejadores de rutas montables y modulares. Una instancia Router es un sistema de middleware y direccionamiento completo.

routes/home.js

```js
const express = require("express");
const { nanoid } = require("nanoid");
const router = express.Router();

router.get("/", (req, res) => {
    const urls = [
        { origin: "https://www.google.com", shortURL: nanoid(7) },
        { origin: "https://www.bluuweb.org", shortURL: nanoid(7) },
    ];
    res.render("home", { titulo: "Página de inicio", urls });
});

module.exports = router;
```

```js
app.use("/", require("./routes/home"));
```

## CREATE

components/FormAcortar.hbs

```html
<form action="/" method="post">
    <input
        type="text"
        placeholder="Ingresa URL"
        class="form-control my-2"
        name="originURL"
    />
    <button class="btn btn-dark mb-2 w-100">Acortar URL</button>
</form>
```

```html
<h1 class="text-center my-5">{{titulo}}</h1>

{{> FormAcortar}} {{#each urls }} {{> Card url=this}} {{/each}}
```

index.js

```js
app.use(express.urlencoded({ extended: true }));
```

home.js

```js
router.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});
```

## MongoDB

-   [mongodb](https://www.mongodb.com/)
-   [mongoosejs](https://mongoosejs.com/)

```
npm i dotenv
npm i mongoose
```

.env

```
URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

database/conexion.js

```js
const mongoose = require("mongoose");

mongoose
    .connect(process.env.URI, {})
    .then(() => console.log("db conectada! 😍"))
    .catch((e) => console.log("error de conexión: " + e));
```

index.js

```js
const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config();
require("./database/conexion");
```

### Schema

-   [Schema](https://mongoosejs.com/docs/guide.html#definition): Con Mongoose, todo se deriva de un esquema.
-   Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.

models/Url.js

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema({
    origin: {
        type: String,
        unique: true,
        required: true,
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(7),
    },
});
```

### Model

-   Para usar nuestra definición de esquema, necesitamos convertirla a un modelo con el que podamos trabajar.

```js
const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
```

### routes/home.js

```js
const Url = require("../models/Url");
router.post("/", async (req, res) => {
    // console.log(req.body);
    const { originURL } = req.body;
    const url = new Url({ origin: originURL });
    console.log(url);
    try {
    } catch (error) {
        console.log(error);
    }
    res.redirect("/");
});
```

```js
router.post("/", async (req, res) => {
    const { originURL } = req.body;
    const url = new Url({ origin: originURL });
    try {
        await url.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});
```

## READ

-   [lean](https://mongoosejs.com/docs/tutorials/lean.html): La opción Lean le dice a Mongoose que omita la hidratación de los documentos de resultados. Esto hace que las consultas sean más rápidas y requieran menos memoria, pero los documentos de resultados son simples objetos JavaScript, no documentos Mongoose.

```js
router.get("/", async (req, res) => {
    try {
        const urls = await Url.find().lean();
        console.log(urls);
        res.render("home", { titulo: "Página de inicio", urls });
    } catch (error) {
        console.log(error);
    }
});
```

## Middlewares

-   [url](https://nodejs.org/api/url.html#class-url)

middlewares/validarURL.js

```js
const { URL } = require("url");

const validarURL = (req, res, next) => {
    try {
        const { originURL } = req.body;
        const urlFrontend = new URL(originURL);
        if (urlFrontend.origin !== "null") {
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
        }
        throw new Error("no válida 😲");
    } catch (error) {
        // console.log(error);
        return res.redirect("/");
    }
};

module.exports = validarURL;
```

routes/home.js

```js
const validarURL = require("../middlewares/validarURL");
router.post("/", validarURL, async (req, res) => {
    // console.log(req.body);
    const { originURL } = req.body;

    const url = new Url({ origin: originURL });
    try {
        await url.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});
```

## Controllers

controllers/urlController.js

```js
const Url = require("../models/Url");

const homeUrl = async (req, res) => {
    try {
        const urls = await Url.find().lean();
        res.render("home", { titulo: "Página de inicio", urls });
    } catch (error) {
        console.log(error);
    }
};

const agregarUrl = async (req, res) => {
    const { originURL } = req.body;

    const url = new Url({ origin: originURL });
    try {
        await url.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    homeUrl,
    agregarUrl,
};
```

routes/home.js

```js
const express = require("express");
const { homeUrl, agregarUrl } = require("../controllers/urlController");
const validarURL = require("../middlewares/validarURL");

const router = express.Router();

router.get("/", homeUrl);

router.post("/", validarURL, agregarUrl);

module.exports = router;
```

## DELETE

-   [findByIdAndDelete](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)

Card.hbs

```html
<a href="/eliminar/{{url._id}}" class="btn btn-danger">Eliminar</a>
```

controllers/urlController.js

```js
const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {
        await Url.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
```

routes/home.js

```js
router.get("/eliminar/:id", eliminarUrl);
```

## UPDATE

-   [findById](https://mongoosejs.com/docs/api.html#model_Model.findById)

Card.hbs

```html
<a href="/editar/{{url._id}}" class="btn btn-warning">Editar</a>
```

controllers

```js
const editarUrlForm = async (req, res) => {
    const { id } = req.params;
    try {
        const urlDB = await Url.findById(id).lean();
        console.log(urlDB);
        res.render("home", { titulo: "Página de inicio", urlDB });
    } catch (error) {
        console.log(error);
    }
};
```

routes

```js
router.get("/editar/:id", editarUrlForm);
```

FormAcortar.hbs

```html
{{#if urlDB}}

<form action="/editar/{{urlDB._id}}" method="post">
    <input
        type="text"
        placeholder="Ingresa URL"
        class="form-control my-2"
        name="originURL"
        value="{{urlDB.origin}}"
    />
    <button class="btn btn-warning mb-2 w-100">Editar URL</button>
</form>

{{else}}

<form action="/" method="post">
    <input
        type="text"
        placeholder="Ingresa URL"
        class="form-control my-2"
        name="originURL"
    />
    <button class="btn btn-dark mb-2 w-100">Acortar URL</button>
</form>

{{/if}}
```

controllers

```js
const editarUrl = async (req, res) => {
    const { id } = req.params;
    const { originURL } = req.body;
    try {
        const url = await Url.findById(id);
        if (!url) {
            console.log("no exite");
            return res.send("error no existe el documento a editar");
        }

        await Url.findByIdAndUpdate(id, { origin: originURL });

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
```

routes

```js
router.post("/editar/:id", validarURL, editarUrl);
```

## Redireccionamiento

controllers

```js
const redireccionar = async (req, res) => {
    const { shortURL } = req.params;
    try {
        const url = await Url.findOne({ shortURL });
        // console.log(url);
        if (!url?.origin) {
            console.log("no exite");
            return res.send("error no existe el redireccionamiento");
        }

        res.redirect(url.origin);
    } catch (error) {
        console.log(error);
    }
};
```

routes

```js
router.get("/:shortURL", redireccionar);
```

## clipboard

index.js

```js
app.use(express.static(__dirname + "/public"));
```

main.hbs

```html
<script src="/js/app.js"></script>
```

Card.hbs

```html{5}
<article class="card mb-2">
    <div class="card-body">
        <p>{{url.origin}}</p>
        <p>{{url.shortURL}}</p>
        <button class="btn btn-primary" data-short="{{url.shortURL}}">
            Copiar
        </button>
        <a href="/editar/{{url._id}}" class="btn btn-warning">Editar</a>
        <a href="/eliminar/{{url._id}}" class="btn btn-danger">Eliminar</a>
    </div>
</article>
```

public/js/app.js

```js
document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
        const url = `http://localhost:5000/${e.target.dataset.short}`;

        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("Text copied to clipboard...");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
});
```

## Register User

En esta sección trabajaremos con el registro de usuarios:

index.js

```js
app.use("/", require("./routes/auth"));
```

routes/auth.js

```js
const express = require("express");
const { formRegister } = require("../controllers/authController");
const router = express.Router();

router.get("/register", formRegister);

module.exports = router;
```

controllers/authController.js

```js
const formRegister = (req, res) => {
    res.render("register");
};

module.exports = {
    formRegister,
};
```

views/register.hbs

```html
<h1 class="text-center my-5">Registro de usuarios</h1>
<div class="row justify-content-center">
    <div class="col-md-6">
        <form action="/register" method="post">
            <input
                class="form-control mb-2"
                name="nombre"
                placeholder="Ingrese nombre"
                type="text"
                value="bluuweb"
            />
            <input
                class="form-control mb-2"
                name="email"
                placeholder="Ingrese email"
                type="email"
                value="bluuweb@prueba.com"
            />
            <input
                class="form-control mb-2"
                name="password"
                placeholder="Ingrese contraseña"
                type="password"
                value="123123"
            />
            <input
                class="form-control mb-2"
                name="passwordRepit"
                placeholder="Repita contraseña"
                type="password"
                value="123123"
            />
            <button type="submit" class="btn btn-primary">Crear Cuenta</button>
        </form>
    </div>
</div>
```

## Model User

-   [bcryptjs](https://www.npmjs.com/package/bcryptjs)
-   [password auth mongoose](https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1)
-   [resumen ☝](https://stackoverflow.com/questions/14588032/mongoose-password-hashing)

:::tip
Bcrypt supports both sync and async methods. The asynchronous approach is recommended because hashing is CPU intensive, and the synchronous version will block the event loop and prevent your app from handling other requests until it finishes.
:::

models/User.js

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        match: [/^[a-zA-Z0-9]+$/, "Solo letras y números"],
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        index: { unique: true },
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    tokenConfirm: {
        type: String,
        default: null,
    },
    confirm: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function(next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    try {
        // generate a salt
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Error al codificar la contraseña");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
```

routes/auth.js

```js
const express = require("express");
const {
    formRegister,
    registrarUsuario,
    confirmarCuenta,
    formLogin,
    loginUsuario,
} = require("../controllers/authController");
const router = express.Router();

router.get("/register", formRegister);
router.post("/register", registrarUsuario);
router.get("/register/:tokenConfirm", confirmarCuenta);
router.get("/login", formLogin);
router.post("/login", loginUsuario);

module.exports = router;
```

controllers/authController.js

```js
const { nanoid } = require("nanoid");
const User = require("../models/User");

const formRegister = (req, res) => {
    res.render("register");
};

const registrarUsuario = async (req, res) => {
    const { nombre, email, password, passwordRepit } = req.body;

    try {
        if (await User.findOne({ email })) {
            throw new Error("Ya existe este usuario");
        }

        const user = new User({ username: nombre, email, password });
        user.tokenConfirm = nanoid();
        console.log(user);
        await user.save();

        // res.json(user);
        res.render("login");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

const confirmarCuenta = async (req, res) => {
    const { tokenConfirm } = req.params;
    try {
        const user = await User.findOne({ tokenConfirm });
        if (!user) throw new Error("no se pudo confirmar cuenta");

        user.tokenConfirm = null;
        user.confirm = true;

        await user.save();

        res.render("login");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

const formLogin = (req, res) => {
    res.render("login");
};

const loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) throw new Error("No existe el usuario");

        if (!user.confirm) throw new Error("Usuario no confirmado");

        if (!(await user.comparePassword(password))) {
            throw new Error("Password incorrecta");
        }
        res.render("home");
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
};

module.exports = {
    formRegister,
    registrarUsuario,
    confirmarCuenta,
    formLogin,
    loginUsuario,
};
```

index.js

```js
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/home"));
```

## Session & flash

-   [express session](http://expressjs.com/en/resources/middleware/session.html): El middleware express-session almacena los datos de sesión en el servidor; sólo guarda el ID de sesión en la propia cookie, no los datos de sesión. De forma predeterminada, utiliza el almacenamiento en memoria y no está diseñado para un entorno de producción.
-   [express session npm](https://www.npmjs.com/package/express-session)
-   [express session github](https://github.com/expressjs/session)
-   [connect-mongo](https://www.npmjs.com/package/connect-mongo)
-   [connect flash](https://www.npmjs.com/package/connect-flash): El flash es un área especial de la sesión que se utiliza para almacenar mensajes. Los mensajes se escriben en la memoria flash y se borran después de mostrarse al usuario. El flash generalmente se usa en combinación con redireccionamientos, lo que garantiza que el mensaje esté disponible para la siguiente página que se va a representar.
-   [best-practice-security](https://expressjs.com/es/advanced/best-practice-security.html)

```
npm i express-session
npm i connect-mongo
npm i connect-flash
```

```js
const session = require("express-session");

app.use(
    session({
        secret: process.env.SESSIONSECRET,
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/ruta-protegida", (req, res) => {
    res.json(req.session.usuario || "sin sessión de usuario");
});

app.get("/crear-session", (req, res) => {
    req.session.usuario = "bluuweb";
    res.redirect("/ruta-protegida");
});

app.get("/destruir-session", (req, res) => {
    req.session.destroy();
    res.redirect("/ruta-protegida");
});
```

flash

```js
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

app.use(
    session({
        secret: process.env.SESSIONSECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(flash());

app.get("/mensaje-flash", (req, res) => {
    res.json(req.flash("mensaje"));
});

app.get("/campos-validados", (req, res) => {
    req.flash("mensaje", "todos los campos fueron validados");
    res.redirect("/mensaje-flash");
});
```

## Express Validator

-   [express validator](https://express-validator.github.io/docs/)

routes/auth.js

```js
const express = require("express");
const { body } = require("express-validator");
const {
    loginForm,
    registerForm,
    registerUser,
    confirmarCuenta,
    loginUser,
} = require("../controllers/authController");

const router = express.Router();

router.get("/register", registerForm);
router.post(
    "/register",
    [
        body("userName", "Ingrese un nombre")
            .trim()
            .notEmpty()
            .escape(),
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña con 6 o más carácteres")
            .trim()
            .isLength({ min: 6 })
            .escape()
            .custom((value, { req }) => {
                if (value !== req.body.repassword) {
                    throw new Error("Password no coinciden");
                } else {
                    return value;
                }
            }),
    ],
    registerUser
);
router.get("/confirmar/:token", confirmarCuenta);
router.get("/login", loginForm);
router.post(
    "/login",
    [
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña no cumple el formato")
            .trim()
            .isLength({ min: 6 })
            .escape(),
    ],
    loginUser
);

module.exports = router;
```

controllers/authControllers.js

```js
const User = require("../models/User");
const { validationResult } = require("express-validator");
const { nanoid } = require("nanoid");

const registerForm = (req, res) => {
    res.render("register", { mensajes: req.flash().mensajes });
};

const registerUser = async (req, res) => {
    // console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("mensajes", errors.array());
        return res.redirect("/auth/register");
    }

    const { userName, email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (user) throw new Error("ya existe usuario");

        user = new User({ userName, email, password, tokenConfirm: nanoid() });
        await user.save();

        // enviar correo electrónico con la confirmación de la cuenta

        return res.redirect("/auth/login");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        res.redirect("/auth/register");
    }
};

const confirmarCuenta = async (req, res) => {
    const { token } = req.params;

    try {
        const user = await User.findOne({ tokenConfirm: token });

        if (!user) throw new Error("No existe este usuario");

        user.cuentaConfirmada = true;
        user.tokenConfirm = null;

        await user.save();

        return res.redirect("/auth/login");
        // res.render("login");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        res.redirect("/auth/login");
    }
};

const loginForm = (req, res) => {
    res.render("login", { mensajes: req.flash().mensajes });
};

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("mensajes", errors.array());
        return res.redirect("/auth/login");
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("No existe este email");

        if (!user.cuentaConfirmada) throw new Error("Falta confirmar cuenta");

        if (!(await user.comparePassword(password)))
            throw new Error("Contraseña no correcta");

        return res.redirect("/");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        res.redirect("/auth/login");
    }
};

module.exports = {
    loginForm,
    registerForm,
    registerUser,
    confirmarCuenta,
    loginUser,
};
```

## Rutas protegidas

-   [passport](http://www.passportjs.org/)
-   [github ejemplo](https://github.com/passport/todos-express-password/blob/master/routes/auth.js#L17)

```
npm install passport passport-local
```

```js
const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const app = express();

app.use(
    session({
        secret: "sessionSecreta",
        resave: false,
        saveUninitialized: false,
        name: "secreto-nombre-session",
    })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// Este va si o si
passport.serializeUser(
    (user, done) => done(null, { id: user._id, userName: user.userName }) //se guardará en req.user
);

// no preguntar en DB???
passport.deserializeUser(async (user, done) => {
    return done(null, user); //se guardará en req.user
});

// preguntar en DB por el usuario???
passport.deserializeUser(async (user, done) => {
    const userDB = await User.findById(user.id).exec();
    return done(null, { id: userDB._id, userName: userDB.userName }); //se guardará en req.user
});
```

middlewares/verificarUsuario.js

```js
module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/auth/login");
};
```

controllers/authController.js

```js{18-23,32-35}
const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("mensajes", errors.array());
        return res.redirect("/auth/login");
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("No existe este email");

        if (!user.cuentaConfirmada) throw new Error("Falta confirmar cuenta");

        if (!(await user.comparePassword(password)))
            throw new Error("Contraseña no correcta");

        req.login(user, function(err) {
            if (err) {
                throw new Error("Error de passport");
            }
            return res.redirect("/");
        });

        // return res.redirect("/");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        res.redirect("/auth/login");
    }
};

const cerrarSesion = (req, res) => {
    req.logout();
    return res.redirect("/auth/login");
};
```

router/auth.js

```js
router.post(
    "/login",
    [
        body("email", "Ingrese un email válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Contraseña no cumple el formato")
            .trim()
            .isLength({ min: 6 })
            .escape(),
    ],
    loginUser
);

router.get("/logout", cerrarSesion);

module.exports = router;
```

router/home.js

```js
const verificarUsuario = require("../middlewares/verificarUsuario");

router.get("/", verificarUsuario, leerUrls);
```

controllers/homeController.js

```js{2}
const leerUrls = async (req, res) => {
    console.log(req.user);
    try {
        const urls = await Url.find().lean();
        return res.render("home", { urls: urls });
    } catch (error) {
        console.log(error);
        return res.send("falló algo...");
    }
};
```

## CSRF protection middleware.

-   [expressjs/csurf](https://github.com/expressjs/csurf)

```
npm install csurf
```

index.js

```js
app.use(express.urlencoded({ extended: true }));

const csrf = require("csurf");

app.use(csrf());
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));
```

:::tip
Se recomienda reiniciar el servidor (bajar nodemon y volver a levantarlo)
:::

Todo lo que tenga formulario:

```js
const registerForm = (req, res) => {
    res.render("register", {
        mensajes: req.flash().mensajes,
        csrfToken: req.csrfToken(),
    });
};

const loginForm = (req, res) => {
    res.render("login", {
        mensajes: req.flash().mensajes,
        csrfToken: req.csrfToken(),
    });
};
```

```html
<input type="hidden" name="_csrf" value="{{csrfToken}}" />
```

Si no quieres enviarlo en cada render:

```js
app.use(csrf());

// variables globales para las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});
```

## Rutas protegidas (home)

routes/home.js

```js
router.get("/", verficarUser, leerUrls);
router.post("/", verficarUser, urlValidar, agregarUrl);
router.get("/eliminar/:id", verficarUser, eliminarUrl);
router.get("/editar/:id", verficarUser, editarUrlForm);
router.post("/editar/:id", verficarUser, urlValidar, editarUrl);
router.get("/:shortURL", redireccionamiento);
```

middlewares/urlValida.js

```js
const { URL } = require("url");
const urlValidar = (req, res, next) => {
    try {
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        if (urlFrontend.origin !== "null") {
            if (
                urlFrontend.protocol === "http:" ||
                urlFrontend.protocol === "https:"
            ) {
                return next();
            }
            throw new Error("tiene que contener https://");
        }
        throw new Error("url no válida 😲");
    } catch (error) {
        if (error.message === "Invalid URL") {
            req.flash("mensajes", [{ msg: "URL no válida" }]);
        } else {
            req.flash("mensajes", [{ msg: error.message }]);
        }
        return res.redirect("/");
    }
};

module.exports = urlValidar;
```

## Mensajes flash (home)

index.js

```js
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.mensajes = req.flash("mensajes");
    next();
});
```

controllers/authController.js

```js
const registerForm = (req, res) => {
    res.render("register");
};

const loginForm = (req, res) => {
    res.render("login");
};
```

controllers/homeController.js

```js{7-8}
const leerUrls = async (req, res) => {
    console.log(req.user);
    try {
        const urls = await Url.find().lean();
        return res.render("home", { urls: urls });
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

## ref mongoDB

models/Url.js

```js{12-16}
const urlSchema = new Schema({
    origin: {
        type: String,
        unique: true,
        required: true,
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
```

homeController

Leer

```js{4}
const leerUrls = async (req, res) => {
    console.log(req.user);
    try {
        const urls = await Url.find({ user: req.user.id }).lean();
        return res.render("home", { urls: urls });
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

Agregar

```js{8,11}
const agregarUrl = async (req, res) => {
    const { origin } = req.body;

    try {
        const url = new Url({
            origin: origin,
            shortURL: nanoid(8),
            user: req.user.id,
        });
        await url.save();
        req.flash("mensajes", [{ msg: "se agregó url correctamente" }]);
        return res.redirect("/");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

Eliminar (opcion 1)

```js
const eliminarUrl = async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findById(id);
        if (!url.user.equals(req.user.id)) {
            throw new Error("no se puede eliminar url");
        }
        await url.remove();

        req.flash("mensajes", [{ msg: "se eliminó url correctamente" }]);
        return res.redirect("/");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

Form editar

```js
const editarUrlForm = async (req, res) => {
    const { id } = req.params;
    try {
        const url = await Url.findById(id).lean();
        if (!url.user.equals(req.user.id)) {
            throw new Error("no se puede editar url");
        }
        return res.render("home", { url: url });
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

POST editar

```js
const editarUrl = async (req, res) => {
    const { id } = req.params;
    const { origin } = req.body;
    try {
        const url = await Url.findById(id);
        if (!url.user.equals(req.user.id)) {
            throw new Error("no se puede editar url");
        }
        await url.updateOne({ origin });
        req.flash("mensajes", [{ msg: "se editó url correctamente" }]);
        res.redirect("/");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

Redireccionamiento

```js
const redireccionamiento = async (req, res) => {
    const { shortURL } = req.params;
    try {
        const urlDB = await Url.findOne({ shortURL: shortURL });
        if (!urlDB) throw new Error("404 no se encuentra la url");
        return res.redirect(urlDB.origin);
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/");
    }
};
```

## Nodemailer

-   [nodemailer](https://nodemailer.com/about/)
-   [mailtrap.io](https://mailtrap.io/)

```js
npm install nodemailer
```

```js
const nodemailer = require("nodemailer");
require("dotenv").config();

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("mensajes", errors.array());
        return res.redirect("/auth/register");
    }

    const { userName, email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        if (user) throw new Error("ya existe usuario");

        user = new User({ userName, email, password, tokenConfirm: nanoid() });
        await user.save();

        // enviar correo electrónico con la confirmación de la cuenta
        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.userEmail,
                pass: process.env.passEmail,
            },
        });

        await transport.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: user.email,
            subject: "verifique cuenta de correo",
            html: `<a href="http://localhost:5000/auth/confirmar/${user.tokenConfirm}">verificar cuenta aquí</a>`,
        });

        req.flash("mensajes", [
            { msg: "Revisa tu correo electrónico y valida cuenta" },
        ]);
        return res.redirect("/auth/login");
    } catch (error) {
        req.flash("mensajes", [{ msg: error.message }]);
        return res.redirect("/auth/register");
        // return res.json({ error: error.message });
    }
};
```

## Subir archivos

-   [multer](https://www.npmjs.com/package/multer)
-   [formidable](https://www.npmjs.com/package/formidable)
-   [Jimp](https://www.npmjs.com/package/jimp)
-   [tutorial formidable](https://www.section.io/engineering-education/uploading-files-using-formidable-nodejs/)

models/User.js

```js
imagen: {
    type: String,
    default: null,
},
```

login.hbs

```html
<h1 class="text-center">{{user.userName}}</h1>
<div class="text-center mb-3">
    {{#if imagen}}
    <img src="/uploads/{{imagen}}" class="rounded-circle" />
    {{else}}
    <img
        src="/uploads/fotoPerfil.jpg"
        class="rounded-circle"
        width="200px"
        height="200px"
    />
    {{/if}}
</div>
<form
    action="/perfil?_csrf={{csrfToken}}"
    enctype="multipart/form-data"
    method="post"
>
    {{!-- <input type="hidden" name="_csrf" value="{{csrfToken}}" /> --}}
    <input class="form-control mb-2" type="file" id="formFile" name="myFile" />
    <button class="btn btn-dark">Cambir foto</button>
</form>
```

routes/home.js

```js
router.get("/perfil", verficarUser, perfilForm);
router.post("/perfil", verficarUser, cambiarFotoPerfil);
```

controllers/perfilController.js

```js
const formidable = require("formidable");
const fs = require("fs");
const Jimp = require("jimp");
const path = require("path");
const User = require("../models/User");

module.exports.perfilForm = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        return res.render("perfil", { user: req.user, imagen: user.imagen });
    } catch (error) {
        req.flash("mensajes", [{ msg: "no se puede leer perfil" }]);
        return res.redirect("/perfil");
    }
};

module.exports.cambiarFotoPerfil = (req, res) => {
    const form = new formidable.IncomingForm();

    form.maxFileSize = 50 * 1024 * 1024; // 5MB

    form.parse(req, async (err, fields, files) => {
        // console.log(fields);
        // console.log(files);

        if (err) {
            req.flash("mensajes", [{ msg: "falló formidable" }]);
            return res.redirect("/perfil");
        }

        const file = files.myFile;

        try {
            if (file.originalFilename === "") {
                throw new Error("No se subió ninguna imagen");
            }

            const imageTypes = [
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif",
            ];

            if (!imageTypes.includes(file.mimetype)) {
                throw new Error("Por favor agrega una imagen .jpg o png");
            }

            if (file.size > 50 * 1024 * 1024) {
                throw new Error("Máximo 5MB");
            }

            const extension = file.mimetype.split("/")[1];
            const dirFile = path.join(
                __dirname,
                `../public/uploads/${req.user.id}.${extension}`
            );

            fs.renameSync(file.filepath, dirFile);

            const image = await Jimp.read(dirFile);
            image
                .resize(200, 200)
                .quality(90)
                .writeAsync(dirFile);

            const user = await User.findById(req.user.id);
            user.imagen = `${req.user.id}.${extension}`;

            await user.save();

            req.flash("mensajes", [{ msg: "se guardó la imagen" }]);
            return res.redirect("/perfil");
        } catch (error) {
            console.log(error);
            req.flash("mensajes", [{ msg: error.message }]);
            return res.redirect("/perfil");
        }
    });
};
```

## connet-mongo

-   [connect-mongo npm](https://www.npmjs.com/package/connect-mongo)
-   [example](https://github.com/jdesboeufs/connect-mongo/blob/master/example/mongoose.js)
-   [flash problem connet-mongo](https://github.com/jdesboeufs/connect-mongo/issues/195)

```
npm install connect-mongo
```

database/db.js

```js
require("dotenv").config();
const mongoose = require("mongoose");

const clientDB = mongoose
    .connect(process.env.URI)
    .then((m) => {
        console.log("db conectada 🔥");
        return m.connection.getClient();
    })
    .catch((e) => console.log("falló la conexión " + e));

module.exports = clientDB;
```

index.js

```js
const MongoStore = require("connect-mongo");
const clientDB = require("./database/db");

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        name: "secret-name-blablabal",
        store: MongoStore.create({
            clientPromise: clientDB,
            dbName: "dbUrlTwitch",
        }),
    })
);
```

## Saniteze mongo

-   [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize)
-   [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
-   [hacking-nodejs-and-mongodb](https://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html)

express-mongo-sanitize

```js
const mongoSanitize = require("express-mongo-sanitize");
app.use(mongoSanitize());
```

mongo-sanitize

```js
const sanitize = require("mongo-sanitize");

const registerUser = async (req, res) => {
    req.body = sanitize(req.body);
};

const confirmarCuenta = async (req, res) => {
    req.params = sanitize(req.params);
};

const loginUser = async (req, res) => {
    req.body = sanitize(req.body);
};
```

## CORS

-   [cors](https://expressjs.com/en/resources/middleware/cors.html)

```js
const cors = require("cors");
app.use(cors());
```

## .env

```
URI=mongodbURI
USEREMAIL=
PASSEMAIL=
SESSION_SECRET=
PATHURL=http://localhost:5000
```

## Heroku

-   [heroku](https://www.heroku.com/pricing)

package.json

```json
"scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
},
```

index.js

```js
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        name: "name-session",
        store: MongoStore.create({
            clientPromise: clientDB,
        }),
        cookie: { secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    })
);
```

En registerUser cambiar variables de entorno

```js
await transport.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: user.email,
    subject: "verifique cuenta de correo",
    html: `<a href="${process.env.PATHURL}/auth/confirmar/${user.tokenConfirm}">verificar cuenta aquí</a>`,
});
```

app.js (frontend) cambiar url

```js
const url = `https://uur.herokuapp.com/${e.target.dataset.short}`;
```
