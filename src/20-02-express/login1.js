//Para evitar inyecciones no sql
const sanitize = require("mongo-sanitize");
const User = require("../models/User");
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Validacion contra esquema
const schemaLogin = Joi.object({
    email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email(),
    password: Joi.string()
        .min(3)
        .max(1024)
        .required(),
});

const loginUser = async (req, res) => {
    //Evitar inyección a mongo
    req.body = sanitize(req.body);

    //Comprobar si el body cumple los requisitos del esquma
    const { error } = schemaLogin.validate(req.body);

    //En casso de error devolver documento mal formado,
    //junto array de errores
    if (error) return res.status(400).json({ error: error.details[0].message });

    //Comprobar a traves del email si el usuario existe en la BBDD
    const user = await User.findOne({ email: req.body.email });

    //Si no existe devolver error
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    //Comprobar el password
    const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );
    if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });

    //Obtener token con tiempo de expiración de una hora
    const token = jwt.sign(
        {
            nombre: user.nombre,
            id: user._id,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: "1h",
        }
    );

    //Devolver token al cliente
    res.header("auth-token", token).json({
        error: null,
        data: { token },
    });
};

module.exports = loginUser;
