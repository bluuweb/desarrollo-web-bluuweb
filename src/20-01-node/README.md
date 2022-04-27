# Node JS Fundamentos

Bienvenidos al curso de Node.js, aquí aprenderás los fundamentos de Node, crearemos nuestro primer servidor, utilizaremos express y mucho más.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xkHyM-K3Cd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos

-   [nodejs](https://nodejs.org/es)

## ¿Qué es node?

-   [acerca de node](https://nodejs.org/es/about/)
-   [aprender node](https://nodejs.dev/learn/introduction-to-nodejs)
-   Node.js® es un entorno de ejecución para **JavaScript** construido con V8, motor de JavaScript de Chrome.
-   Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
-   Al contrario que la mayoría del código JavaScript, **no se ejecuta en un navegador** (¿se podrá ejecutar entonces fetch api?).
-   Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.
-   HTTP es un elemento destacado en Node.js. Esto hace que Node.js sea muy adecuado para la base de una librería o un framework web.
-   En términos simples node no bloquea las operaciones, no queda a la espera de por ejemplo una solicitud a la base de datos, dejando la cpu trabajando en ello, node reanudará las operaciones cuando vuelva la respuesta. Esto permite que Node.js **maneje miles de conexiones simultáneas** con un solo servidor sin introducir la carga de administrar la concurrencia de subprocesos, lo que podría ser una fuente importante de errores.
-   En Node.js, los nuevos estándares de ECMAScript se pueden usar sin problemas, ya que no tiene que esperar a que todos sus usuarios actualicen sus navegadores. [versión de node y EcmaScript](https://node.green/)
-   NPM: Cuenta con más de 1 millón de paquetes, módulos o bibliotecas disponibles para su utilización.

:::tip
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila el código fuente JavaScript en código de máquina en lugar de interpretarlo en tiempo real.
:::

En este curso nos basaremos en la relación que tiene node.js con el desarrollo web.

## Instalación

-   [nodejs](https://nodejs.org/es)
-   Reiniciar computadora (recomendado)
-   Ejecutar:

```
node -v
```

## Probar

```js
const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
    console.count(fruta);
});
```

```
node app.js
```

## Modulos

-   Node tiene un sistema de módulos incorporado.
-   Un archivo Node.js puede importar la funcionalidad expuesta por otros archivos Node.js.

frutas.js

```js
const frutas = ["banana", "banana", "pera", "banana"];
module.exports = frutas;
```

app.js

```js
const frutas = require("./frutas");

frutas.forEach((fruta) => {
    console.count(fruta);
});
```

frutas.js

```js
const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;

// Exportamos en un objeto
module.exports = {
    frutas: frutas,
    dinero,
};
```

app.js

```js
// Utilizando destructuring: https://wesbos.com/destructuring-objects
const { frutas, dinero } = require("./frutas");

frutas.forEach((fruta) => {
    console.count(fruta);
});

console.log("mi dinero actual: ", dinero);
```

:::tip Módulos

-   Desde ahora hablaremos mucho sobre los módulos (puede que los nombre como paquete, paquetito, biblioteca, dependencia, etc).
-   Además de utilizar módulos externos con NPM, también node cuenta con una gama de ellos incorporado, [los puedes revisar aquí](https://nodejs.org/dist/latest-v16.x/docs/api/)
    :::

## NPM

-   [npmjs.com](https://www.npmjs.com/)
-   Es el administrador de paquetes o dependecias estándar para Node.js.
-   Repositorio de código de un solo idioma más grande de la Tierra.
-   axios, express, jsonwebtoken, sequelize, son algunos paquetes, dependencias (códigos) que solucionan problemas, es tu elección utilizarlos (A menos que quieras reinventar la rueda).
-   [yarn](https://yarnpkg.com/) es una alternativa al cli de npm.

### package.json

-   [guia](https://nodejs.dev/learn/the-package-json-guide)
-   Se nos creará un archivo el cual tendrá información sobre nuestro proyecto, lo más relevante en estos momentos serán sus dependencias y scripts
-   npm y yarn almacena los nombres y versiones de todos los paquetes instalados.

```
npm init -y
```

### package-lock.json

-   En la versión 5, npm introdujo el archivo `package-lock.json`.
-   El objetivo del `package-lock.json` es realizar un seguimiento de la versión exacta de cada paquete que se instala, para que un producto sea 100% reproducible de la misma manera incluso si los paquetes son actualizados por sus encargados.
-   El `package-lock.json` establece su versión actualmente instalada de cada paquete en piedra.

:::tip npm update

-   [npm 7 actualización](https://github.com/npm/cli/issues/708)
-   Desde npm versión 7 en adelante, al ejecutar `npm update` no cambiará el archivo `package.json` sino que `package-lock.json` llevará el control de la versión más reciente a utilizar.
-   Ejecute `npm list` para saber la versión actual o bien abra el archivo `package-lock.json`.
-   [versionlens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) te ayuda a visualizar los paquetes actualmente utilizados.
    :::

### Versiones

-   [npm-update#description](https://docs.npmjs.com/cli/v7/commands/npm-update#description)
-   [semantic-versioning-using-npm](https://nodejs.dev/learn/semantic-versioning-using-npm)
-   `~1.2.3` Actualiza las versiones parches, por ende actualizará menor > 1.3.0
-   `^1.2.3` Actualiza versiones menores incluyendo parches, por ende actualizará menor > 2.0.0

Instalar versión específica:

-   [package/moment](https://www.npmjs.com/package/moment)

```
npm i moment@2.19.1
```

Cambia el package.json

```json
"dependencies": {
    "moment": "~2.19.1"
}
```

Ejecuta:

```
npm update
npm list
```

-   Cómo puedes ver solo se actualizó hasta la versión 2.19.4

Desinstalar e instalar nuevamente:

```
npm uninstall moment
npm i moment@2.19.1
npm update
npm list
```

-   Ahora se actualizó a la versión 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

Volvamos a desinstalar e instalaremos sin una versión específica:

```
npm uninstall moment
npm i moment
```

-   Se instala la última versión disponible 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

## Locales vs Globales

-   Existen paquetes o dependencias que se instalan en nuestro proyecto (como lo hemos trabajado hasta ahora)
-   Pero también existe la posibilidad de hacer instalaciones de manera global (imagina que es como instalar un programa en tu pc que puede ser accedido de cualquier parte)

```
npm list -g
```

-   [package/cowsay](https://www.npmjs.com/package/cowsay)

```
npm i -g cowsay
cowsay javascript
```

-   Independiente de la carpeta que nos encontremos, podemos ejecutar este comando.

## devDependencies

-   devDependencies hace referencia a los paquetes que no se necesitan para producción.
-   están destinados a instalarse solo en una máquina de desarrollo.
-   no son necesarios para ejecutar el código en producción.

Puede usar cualquiera de las dos:

```
npm i -D nodemon
npm install --save-dev nodemon
```

-   [package/nodemon](https://www.npmjs.com/package/nodemon): nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.

## NPX

-   Posiblemente se toparán con este comando a futuro (sobretodo si trabajan con React.js), bueno esto ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local.

Desinstalamos cowsay y luego intentamos ejecutarlo, esto nos dará un error:

```
npm uninstall -g cowsay
cowsay javascript
```

Ahora ejecute:

```
npx cowsay javascript
```

## Scripts

package.json ejemplo de scripts

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

-   Estos scripts son aplicaciones de línea de comandos. Puede ejecutarlos llamando `npm run XXXX`, donde "XXXX" está el nombre del comando. Ejemplo: `npm run dev`
-   Puede usar el nombre que desee para un comando y los scripts pueden hacer literalmente cualquier cosa que desee.
-   Configuremos nodemon para que ejecute nuestro index.js

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
```

## Servidor HTTP

-   [info](https://nodejs.dev/learn/build-an-http-server)
-   Hypertext Transfer Protocol: El Protocolo de transferencia de hipertexto es el protocolo de comunicación que permite las transferencias de información en la World Wide Web.
-   Intercambia de información entre cliente y servidor.
-   El servidor queda a la espera de alguna solicitud HTTP ejecutada por el cliente y proporciona una respuesta.
-   Cuando visitamos un sitio web, hacemos una solicitud GET de HTTP, y el servidor nos devuelve por ejemplo un `index.html` con el sitio web.
-   Nosotros configuraremos estas respuestas en nuestro "servidor web o servidor http" con node.js

```js
const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
    res.end("holis");
});

server.listen(port, () => {
    console.log("servidor andando 🚀");
});
```

## Verbos o métodos HTTP

-   [HTTP/Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
-   HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.
-   Los más populares son: GET, POST, PUT, DELETE.
-   En el siguiente apartado crearemos nuestro servidor web (con express) y pondremos en práctica cada uno de estos métodos.

## Express

-   [expressjs](https://expressjs.com/es/)
-   Infraestructura web rápida, minimalista y flexible para Node.js
-   Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.
-   Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.

### Instalación

-   [doc](https://expressjs.com/es/starter/installing.html)

```
npm i express
```

## Hello world

index.js

```js
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log("listo! 🚀");
});
```

package.json

```json
"scripts": {
    "dev": "nodemon index.js"
},
```

```
npm run dev
```

## Rutas

-   [rutas](https://expressjs.com/es/starter/basic-routing.html)
-   El direccionamiento hace referencia a la determinación de cómo responde una aplicación a una solicitud de cliente en un determinado punto final, que es un URI (o una vía de acceso) y un método de solicitud HTTP específico (GET, POST, etc.).
-   Cada ruta puede tener una o varias funciones de manejador, que se excluyen cuando se correlaciona la ruta.

:::tip Postman

-   [postman](https://www.postman.com/)
-   El principal propósito (para este curso) será hacer pruebas con diferentes URIs, así podemos probar diferentes verbos como POST, PUT, DELETE, etc.
    :::

```js
app.get("/users", (req, res) => {
    res.send("devolver la lista de usuarios");
});

app.post("/users", (req, res) => {
    res.send("respuesta distinta por vía post");
});
```

## Archivos estáticos

-   [static-files](https://expressjs.com/es/starter/static-files.html)
-   Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función de middleware incorporado express.static de Express.
-   Pase el nombre del directorio que contiene los activos estáticos a la función de middleware express.static para empezar directamente el servicio de los archivos.

```js
app.use(express.static("public"));
```

public/index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web con Express Server</title>
    </head>
    <body>
        <h1>Mi web con express Server</h1>
    </body>
</html>
```

## req.query

-   GET: Agrega datos de formulario a la URL en pares de nombre=valor, La longitud de una URL es limitada (alrededor de 3000 caracteres), GET es mejor para datos no seguros, como cadenas de consulta en Google.
-   [fuente](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
-   En términos simples, una cadena de consulta (Query) es la parte de una URL después del signo de interrogación (?).
-   Está destinado a enviar pequeñas cantidades de información al servidor a través de la URL.
-   Esta información generalmente se usa como **parámetros** para consultar una base de datos, o tal vez para filtrar resultados. Realmente depende de ti para qué se usan.

```js
app.get("/formulario", (req, res) => {
    res.send("formulario");
});
```

```html
<form action="/formulario">
    <input type="text" name="nombre" placeholder="nombre" />
    <input type="text" name="apellido" placeholder="apellido" />
    <button type="submit">Enviar</button>
</form>
```

:::tip
Si le das al botón de enviar verás efectivamente la respuesta del servidor, pero aún más interesante es que en la URL aparecieron los parámetros enviados `http://localhost:5000/formulario?nombre=bluuuweb&apellido=superbluu`
:::

```js
app.get("/formulario", (req, res) => {
    console.log(req.query);
    res.send("formulario");
});
```

### ¿Que pasa si cambiamos al método post?

```js
app.post("/formulario", (req, res) => {
    console.log(req.query);
    res.send("formulario");
});
```

```js
<form action="/formulario" method="post">
    <input type="text" name="nombre" placeholder="nombre" />
    <input type="text" name="apellido" placeholder="apellido" />
    <button type="submit">Enviar</button>
</form>
```

:::tip
Si nos fijamos ahora los datos no viajan a través de la URL, por ende tenemos que leerlos de otra forma.
:::

## req.body

-   POST: Agrega datos de formulario dentro del cuerpo de la solicitud HTTP (los datos no se muestran en la URL)

```js
app.post("/formulario", (req, res) => {
    console.log(req.body); // undefined
    res.send("formulario");
});
```

-   [fuente](https://stackoverflow.com/questions/66555172/why-is-req-body-undefined-in-express)
-   Desde el formulario HTML se está enviando datos a través del cuerpo o body, pero por defecto express no lee este tipo de datos.
-   Por lo tanto para indicarle a express que lea y analice los `req.body` (datos a través del cuerpo POST o PUT), se necesita configurar un middleware apropiado para dicho trabajo.
-   El middleware leerá el cuerpo de la solicitud, lo analizará y colocará los resultados analizados `req.body` para que esté allí cuando se llame a su controlador de solicitudes.
-   Express tiene un middleware como este incorporado para varios tipos de contenido.
-   [api express](https://expressjs.com/en/4x/api.html#express.json)

```js
express.json(...)    // "application/json"
express.raw(...)     // reads the body into a Buffer for you to parse yourself
express.text(...)    // "text/plain" - reads the body into a string
express.urlencoded(...) // "application/x-www-form-urlencoded"
```

```js
app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); lo ocuparemos más adelante

app.post("/formulario", (req, res) => {
    console.log(req.body);
    res.send("formulario");
});
```

## fs

-   [fileSystem](https://nodejs.org/api/fs.html#filehandlewritefiledata-options)
-   [tutorial](https://ourcodeworld.co/articulos/leer/297/como-crear-un-archivo-usando-el-modulo-del-sistema-de-archivos-fs-en-nodejs)

```js
const fs = require("fs");

app.post("/formulario", (req, res) => {
    console.log(req.body);
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) return res.redirect("/error.html");

    fs.writeFile(`${nombre}.txt`, apellido, (err) => {
        if (err) res.end("falló al crear el archivo");
        res.send("Archivo creado con éxito");
    });
});
```

### res.download

-   [res.download](http://expressjs.com/en/api.html#res.download)

```js
app.post("/formulario", (req, res) => {
    console.log(req.body);
    const { nombre, apellido } = req.body;

    if (!nombre || !apellido) return res.redirect("/error.html");

    fs.writeFile(`${nombre}.txt`, apellido, (err) => {
        if (err) res.end("falló al crear el archivo");
        res.download(__dirname + `/${nombre}.txt`); //ruta absoluta
    });
});
```

<!-- ## AXIOS
- [axios](https://axios-http.com/docs/intro)
- Realizar solicitudes http desde node.js
- En el lado del servidor usa el http módulo nativo node.js, mientras que en el cliente (navegador) usa XMLHttpRequests.
- [rick and morty](https://rickandmortyapi.com/)

```
npm install axios
``` -->

<!-- ## Static Files
- [static-files](https://expressjs.com/es/starter/static-files.html)
- Para el servicio de archivos estáticos como, por ejemplo, imágenes, archivos CSS y archivos JavaScript, utilice la función de middleware incorporado express.static de Express. -->
