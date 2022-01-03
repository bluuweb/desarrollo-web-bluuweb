# Node JS Fundamentos
Bienvenidos al curso de Node.js, aquí aprenderás los fundamentos de Node, crearemos nuestro primer servidor, utilizaremos express y mucho más.

## Recursos
- [nodejs](https://nodejs.org/es)

## ¿Qué es node?
- [acerca de node](https://nodejs.org/es/about/)
- [aprender node](https://nodejs.dev/learn/introduction-to-nodejs)
- Node.js® es un entorno de ejecución para **JavaScript** construido con V8, motor de JavaScript de Chrome.
- Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
- Al contrario que la mayoría del código JavaScript, **no se ejecuta en un navegador** (¿se podrá ejecutar entonces fetch api?).
- Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para crear aplicaciones network escalables.
- HTTP es un elemento destacado en Node.js. Esto hace que Node.js sea muy adecuado para la base de una librería o un framework web.
- En terminos simples node no bloquea las operaciones, no queda a la espera de por ejemplo una solicitud a la base de datos, dejando la cpu trabajando en ello, node reanudará las operaciones cuando vuelva la respuesta. Esto permite que Node.js **maneje miles de conexiones simultáneas** con un solo servidor sin introducir la carga de administrar la concurrencia de subprocesos, lo que podría ser una fuente importante de errores.
- En Node.js, los nuevos estándares de ECMAScript se pueden usar sin problemas, ya que no tiene que esperar a que todos sus usuarios actualicen sus navegadores. [versión de node y EcmaScript](https://node.green/)
- NPM: Cuanta con más de 1 millón de paquetes, módulos o bibliotecas disponibles para su utilización.

:::tip
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila el código fuente JavaScript en código de máquina en lugar de interpretarlo en tiempo real.
:::

En este curso nos basaremos en la relación que tiene node.js con el desarrollo web.

## Instalación
- [nodejs](https://nodejs.org/es)
- Reiniciar computadora (recomendado)
- Ejecutar:

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
- Node tiene un sistema de módulos incorporado.
- Un archivo Node.js puede importar la funcionalidad expuesta por otros archivos Node.js.

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
- Desde ahora hablaremos mucho sobre los módulos (puede que los nombre como paquete, paquetito, biblioteca, dependencia, etc).
- Además de utilizar módulos externos con NPM, también node cuenta con una gama de ellos incorporado, [los puedes revisar aquí](https://nodejs.org/dist/latest-v16.x/docs/api/)
:::

## NPM
- [npmjs.com](https://www.npmjs.com/)
- Es el administrador de paquetes o dependecias estándar para Node.js.
- Repositorio de código de un solo idioma más grande de la Tierra.
- axios, express, jsonwebtoken, sequelize, son algunos paquetes, dependencias (códigos) que solucionan problemas, es tu elección utilizarlos (A menos que quieras reinventar la rueda).
- [yarn](https://yarnpkg.com/) es una alternativa al cli de npm.

### package.json
- [guia](https://nodejs.dev/learn/the-package-json-guide)
- Se nos creará un archivo el cual tendrá información sobre nuestro proyecto, lo más relevante en estos momentos serán sus dependencias y scripts
- npm y yarn almacena los nombres y versiones de todos los paquetes instalados.

```
npm init -y
```

### package-lock.json
- En la versión 5, npm introdujo el archivo ``package-lock.json``.
- El objetivo del ``package-lock.json`` es realizar un seguimiento de la versión exacta de cada paquete que se instala, para que un producto sea 100% reproducible de la misma manera incluso si los paquetes son actualizados por sus encargados.
- El ``package-lock.json`` establece su versión actualmente instalada de cada paquete en piedra.

:::tip npm update
- [npm 7 actualización](https://github.com/npm/cli/issues/708)
- Desde npm versión 7 en adelante, al ejecutar `npm update` no cambiará el archivo `package.json` sino que `package-lock.json` llevará el control de la versión más reciente a utilizar.
- Ejecute `npm list` para saber la versión actual o bien abra el archivo `package-lock.json`.
- [versionlens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) te ayuda a visualizar los paquetes actualmente utilizados.
:::

### Versiones
- [npm-update#description](https://docs.npmjs.com/cli/v7/commands/npm-update#description)
- [semantic-versioning-using-npm](https://nodejs.dev/learn/semantic-versioning-using-npm)
- `~1.2.3` Actualiza las versiones parches, por ende actualizará menor > 1.3.0
- `^1.2.3` Actualiza versiones menores incluyendo parches, por ende actualizará menor > 2.0.0

Instalar versión específica:
- [package/moment](https://www.npmjs.com/package/moment)
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

- Cómo puedes ver solo se actualizó hasta la versión 2.19.4

Desinstalar e instalar nuevamente:
```
npm uninstall moment
npm i moment@2.19.1
npm update
npm list
```

- Ahora se actualizó a la versión 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

Volvamos a desinstalar e instalaremos sin una versión específica:
```
npm uninstall moment
npm i moment
```

- Se instala la última versión disponible 2.29.1 (al 3 enero 2021, puede que tu veas otra versión más reciente)

## Locales vs Globales
- Existen paquetes o dependencias que se instalan en nuestro proyecto (como lo hemos trabajado hasta ahora)
- Pero también existe la posibilidad de hacer instalaciones de manera global (imagina que es como instalar un programa en tu pc que puede ser accedido de cualquier parte)

```
npm list -g
```

- [package/cowsay](https://www.npmjs.com/package/cowsay)
```
npm i -g cowsay
cowsay javascript
```

- Independiente de la carpeta que nos encontremos, podemos ejecutar este comando.

## devDependencies
- devDependencies hace referencia a los paquetes que no se necesitan para producción
- están destinados a instalarse solo en una máquina de desarrollo
- no son necesarios para ejecutar el código en producción.

Puede usar cualquiera de las dos:
```
npm i -D nodemon
npm install --save-dev nodemon
```
- [package/nodemon](https://www.npmjs.com/package/nodemon): nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.

## NPX
- Posiblemente se toparán con este comando a futuro (sobretodo si trabajan con React.js), bueno esto ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local.

Desinstalamos cowsay y luego intentamos ejecutarlo, esto nos dará un error:
```
npm uninstall -g cowsay
cowsay javascript
```

Ahora ejecute:
```
npx cowsay javascript
```









