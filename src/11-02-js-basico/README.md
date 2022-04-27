# Javascript (Fundamentos)

-   Aquí conoceremos los fundamentos de Javascript.
-   Es muy importante revisar la sección anterior ["Programación (Fundamentos)"](/11-01-psint/) si no sabes nada de nada.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w_bM1l1UGnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
   :::

<div class="text-center">
    <img :src="$withBase('/img/js-gif.gif')" alt="icono visual studio code git">
    <br>
    <a href="https://www.pinterest.es/dancingairplants/geek/" target="_blanck">Fuente</a>
</div>

JavaScript es un lenguaje de programación que te permite implementar funciones complejas en tus páginas web. [mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#:~:text=JavaScript%20es%20un%20lenguaje%20de%20programaci%C3%B3n%20o%20de%20secuencias%20de%20comandos%20que%20te%20permite%20implementar%20funciones%20complejas%20en%20p%C3%A1ginas%20web)

JavaScript es un lenguaje de programación multiplataforma **orientado a objetos** que se utiliza para hacer que las páginas web sean interactivas (p. ej., Que tienen animaciones complejas, botones en los que se puede hacer clic, menús emergentes, etc.). **También hay versiones de JavaScript de lado del servidor más avanzadas, como Node.js**, que te permiten agregar más funcionalidad a un sitio web que simplemente descargar archivos (como la colaboración en tiempo real entre varias computadoras). Dentro de un entorno (por ejemplo, un navegador web), JavaScript se puede conectar a los objetos de su entorno para proporcionar control programático sobre ellos.

-   [Javascript vs Java](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction#javascript_y_java)
-   [ecmascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction#javascript_y_la_especificacion_ecmascript)
-   [POO que es](https://profile.es/blog/que-es-la-programacion-orientada-a-objetos/): La Programación Orientada a Objetos (POO) es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos.
-   [Javascript no es POO](https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/): JavaScript no es un lenguaje orientado a objetos basado en clases. Pero todavía tiene formas de usar la programación orientada a objetos (POO).

:::tip Historia
JavaScript fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como JavaScript. [sigue la historia aquí](https://es.wikipedia.org/wiki/JavaScript)
:::

#### Ejemplos:

-   [brittanychiang.com](https://brittanychiang.com/)
-   [kuon.space](https://kuon.space/)
-   [moonfarmer.com](https://moonfarmer.com/)
-   [lider.cl](https://www.lider.cl/supermercado)
-   [30ua.info/en](https://30ua.info/en/)
-   [meadlight.com/en](https://meadlight.com/en)
-   [2021.fanzone36.com/fr/home](https://2021.fanzone36.com/fr/home)

## VSCode Extensiones

-   [ES7](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

#### Repaso

-   **HTML**: es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
-   **CSS**: es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
-   **JS**: es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

<div class="text-center">
    <img :src="$withBase('/img/js-gif-1.gif')" alt="icono visual studio code git">
</div>

Cuando cargas una página web en tu navegador, estás ejecutando tu código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y genera un producto (la página web).

<div class="text-center">
    <img :src="$withBase('/img/execution.png')" alt="icono visual studio code git">
</div>

## ¿Cómo agregamos JS?

Muy similar a cómo implementabamos los CSS, solo que ahora utilizas `<script>`

#### 1. En el head

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script>
            alert("jugando con JS");
        </script>
    </head>

    <body>
        <h1>Jugando con JS</h1>
    </body>
</html>
```

#### 2. Mezclado

**No hagas esto 👇👇👇**, es una mala práctica contaminar tu HTML con JavaScript 🤦‍♂️.

```html
<body>
    <h1>Jugando con JS</h1>
    <button onclick="saludar()">Dame click</button>
    <script>
        function saludar() {
            alert("Hola soy un saludo");
        }
    </script>
</body>
```

#### 3. Archivo externo

La extensión es `.js`, respetando:

-   No utilizar espacios, en su lugar reemplazar con `_`, `-` o [camelCase](<https://es.wikipedia.org/wiki/Camel_case#:~:text=Camel%20case%20(estilizado%20como%20camelCase)%20o%20letra%20de%20caja%20camello%20es%20un%20estilo%20de%20escritura%20que%20se%20aplica%20a%20frases%20o%20palabras%20compuestas.%20El%20nombre%20se%20debe%20a%20que%20las%20may%C3%BAsculas%20a%20lo%20largo%20de%20una%20palabra%20en%20CamelCase%20se%20asemejan%20a%20las%20jorobas%20de%20un%20camello.>) 🐫
-   Utilizar lengua inglesa, sin ñ ni tildes
-   Evitar signos extraños como `@#][+{}`, etc.

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>

    <body>
        <h1>Jugando con JS</h1>
        <button onclick="saludar()">Dame click</button>

        <script src="js/app.js"></script>
    </body>
</html>
```

## Comentarios

```js
// soy un comentario

/*
  Yo también soy
  un comentario
*/
```

VSCode: Configurar snippet

<div class="text-center">
    <img :src="$withBase('/img/vsc-1.png')" alt="config snippet vscode">
</div>

<div class="text-center">
    <img :src="$withBase('/img/vscode-2.png')" alt="incorporar tecla">
</div>

## Palabras reservadas

-   [lista](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)

En nuestro ejemplo anterior utilizamos `alert` esto indica a JS que es una acción o función.

```js
alert("esto es una alerta del navegador 🎉");
```

## Orden de ejecución

Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. Esto significa que debes tener cuidado con el orden en el que colocas las cosas.

```js
alert("primero");
alert("segundo");
alert("tercero");
```

## Ojo de águila

¿Este código está correcto?

```
alert("primero")
Alert("segundo");
alert('tercero");
```

:::warning
JavaScript distingue entre mayúsculas y minúsculas y es muy exigente, por lo que debes ingresar la sintaxis exactamente como se muestra; de lo contrario, es posible que no funcione.
:::

## Consola

Si abrimos el inspector de elementos, podrás ver una pestaña de consola.

<!-- ![imagen de consola](./img/consola.jpg) -->

La consola del navegador es una herramienta que nos ayuda a depurar nuestras páginas, facilitando nuestro trabajo diario.

```js
console.log("hola esta es la consola 👌");
```

## Tipo de datos

Cómo hemos practicado, los textos que enviamos a la consola van entre **comillas** `"text"` o `'texto'`. Esto pasa porque existen distintos tipos de datos en JS.

El último estándar [ECMAScript define nueve tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures), pero por ahora nos centraremos en 3.

:::tip ECMAScript 🤷‍♂️
ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar.

**Conclusión:** determina cómo emplear el lenguaje Javascript, que permite a los fabricantes de software desarrollar las herramientas adecuada para interpretarlo correctamente.

-   [es6](http://kangax.github.io/compat-table/es6/)
    :::

-   String: se utiliza para representar datos textuales.
-   Number: valores numéricos.
-   Boolean: representa una entidad lógica y puede tener dos valores: `true` y `false`.

```js
console.log("un valor de tipo texto");
console.log(20);
console.log(1.2);
console.log(1, 62);
console.log(1 + 1);
console.log(true);
console.log(false);
```

## Variables

-   [guía variables js](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#conceptos_b%C3%A1sicos)
-   En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.
-   Imagina como una caja que guarda un tipo de dato/valor.

<div class="text-center">
    <img :src="$withBase('/img/pseint-3.JPG')" alt="icono visual studio code git">
</div>

#### JavaScript tiene tres tipos de declaraciones de variables.

1. var
2. let
3. const

-   [más info](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraciones)

:::tip var vs let vs const
En capitulos siguientes veremos las diferencias, por ahora comencemos con let.
:::

```js
let x = 10;
let y = false;
let z = x;
let n = "Juanito";
```

En JS el signo **`=`** se conoce como **Operador de asignación simple**

:::tip Asignación

-   El signo `=` en Javascript se conoce como asignación (permite almacenar un valor a una variable).
-   Se evalúa la expresión de la derecha y luego se le asigna el resultado a la variable de la izquierda.
-   A esto se le llama **declarar la variable** con un valor inicial.
    :::

```js
let x = 10;
let y = 20;
let resultado = x * y;

console.log(resultado);
```

Reglas para el nombre de sus variables:

-   No utilizar espacios, en su lugar reemplazar con `_` o [camelCase](<https://es.wikipedia.org/wiki/Camel_case#:~:text=Camel%20case%20(estilizado%20como%20camelCase)%20o%20letra%20de%20caja%20camello%20es%20un%20estilo%20de%20escritura%20que%20se%20aplica%20a%20frases%20o%20palabras%20compuestas.%20El%20nombre%20se%20debe%20a%20que%20las%20may%C3%BAsculas%20a%20lo%20largo%20de%20una%20palabra%20en%20CamelCase%20se%20asemejan%20a%20las%20jorobas%20de%20un%20camello.>) 🐫
-   Utilizar lengua inglesa, sin ñ ni tildes (en teoría se puede pero es una mala práctica)
-   Evitar signos extraños como `@#][+{}-` etc.
-   El primer carácter no puede ser un número `var 2res = 'algo'`
-   Se puede utilizar el signo `$` ej: `var $anio = 2021;`

## Práctica variables

Intena crear las variables (con datos inventados) para que este script funcione:

```js
console.log("Su nombre es:");
console.log(nombreUsuario);
console.log("Su edad es:");
console.log(edad);
console.log("Su nacionalidad es:");
console.log(nacionalidad);
console.log("¿está comprometido?");
console.log(comprometido);
```

## Concatenación

Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más `+`, el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

```js
var one = "Hello, ";
var two = "how are you?";
var joined = one + two;
console.log(joined);
```

Variantes:

```js
console.log(one + two);
```

```js
console.log("Hello, " + "how are you?");
```

Intenta llevar la práctica a un simple console:

```js
console.log("Su nombre es: " + nombreUsuario + " y su edad es: " + edad);
```

¿y qué pasa con los números?

```js
var numeroUno = 100;
var numeroDos = 200;
console.log(numeroUno + numeroDos);
```

Aquí se ejecutará la operación aritmética, pero recuerda que si puedes concatenar un número y un string.

## Prompt()

Para hacer nuestro ejemplos más dinámicos conozcamos `prompt`.

```js
prompt("Ingresa un apellido");
```

Lo guardamos en una variable

```js
let apellido = prompt("Ingresa un apellido");
console.log(apellido);
```

```js
let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");
let resultado = numeroUno + numeroDos;
console.log(resultado); // ¿no es el resultado esperado?
```

Revisar en consola:

<div class="text-center">
    <img :src="$withBase('/img/vscode-3.png')" alt="revisar en consola de windows">
</div>

-   [typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof): El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo
-   [parseInt](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt): Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

```js
let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");

console.log(typeof numeroUno);

let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado);
```

:::tip
Las variables traten de hacerlas lo más descriptivas posibles, este es un programa simple pero a futuro tendrás cientos de variables declaradas. Además si alguien revisa el código también se da una idea de lo que está ocurriendo.
:::

## Operadores

Existen diferentes tipos de operadores

-   Operadores Aritméticos o Algebraicos o Matemáticos.
-   Operadores de Comparación / Relacionales.
-   Operadores lógicos.

## Operadores Aritméticos

En programación y matemáticas, los operadores aritméticos son aquellos que manipulan los datos de tipo numérico, es decir, permiten la realización de operaciones matemáticas (sumas, restas, multiplicaciones, etc.).. [más info](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos)

Adición: Suma dos números juntos.

```js
let resultado = 1 + 1;
console.log(resultado);
```

Resta: Resta el numero de la derecha del de la izquierda.

```js
let resultado = 2 - 1;
console.log(resultado);
```

Multiplicación: Multiplica dos números juntos.

```js
let resultado = 5 * 20;
console.log(resultado);
```

División: Divide el número de la izquierda por el de la derecha.

```js
let resultado = 20 / 5;
console.log(resultado);
```

Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.

```js
let resultado = 8 % 3;
console.log(resultado);
```

## Jugando

```js
let resultado = 2 * (100 / 5) + 10;
console.log(resultado);
```

## Operadores Relacionales

Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (===) y distinto de (!==).

```js
let resultado = 20 > 10;
console.log(resultado);
```

```js
let resultado = 20 < 10;
console.log(resultado);
```

```js
let resultado = 20 === 10;
console.log(resultado);
```

```js
let resultado = 20 == "20";
console.log(resultado);
```

```js
let resultado = 20 !== 10;
console.log(resultado);
```

```js
let resultado = 10 != "10";
console.log(resultado);
```

## Operadores lógicos

Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos.

-   && : Si los dos son verdaderos devuelve verdadero.
-   || : Con que uno sea verdadero devolverá verdadero.
-   ! : Negación

```js
let resultado = true && true;
console.log(resultado);
```

```js
let resultado = 20 > 10 && 10 < 20;
console.log(resultado);
```

```js
let resultado = true && true && false;
console.log(resultado);
```

```js
let resultado = true || false;
console.log(resultado);
```

```js
let resultado = true || false || false;
console.log(resultado);
```

```js
let resultado = !false;
console.log(resultado);
```

## Estructuras de control

En lenguajes de programación, las estructuras de control **permiten modificar el flujo de ejecución de las instrucciones de un programa**.

Condicionales

-   if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)
-   ?: operador ternario (Operador ternario: Equivalente a If/else , método abreviado.)
-   switch (Estructura para casos específicos: Similar a varios If/else anidados.)

Repetitivas o iterativas

-   while
-   do... while
-   for

## if/else

Un if en programación se utiliza para evaluar una expresión condicional: **si se cumple la condición (es verdadera), ejecutará un bloque de código.**

-   [if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

<div class="text-center">
    <img :src="$withBase('/img/pseint-5.JPG')" alt="icono visual studio code git">
</div>

```js
if (condicion) {
    // bloque verdadero
} else {
    // bloque falso
}
```

Ejemplo #01

```js
let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}
```

Ejemplo #02

```js
let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
}
```

## switch

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

-   [switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)
-   [Plantillas literales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals): Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
-   [Interpolación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals#interpolaci%C3%B3n_de_expresiones)
-   alt + 96

<div class="text-center">
    <img :src="$withBase('/img/vscode-4.png')" alt="icono visual studio code git">
</div>

```js
let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}
```

## while

<div class="text-center">
    <img :src="$withBase('/img/pseint-8.JPG')" alt="icono visual studio code git">
</div>

-   [while](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while): Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
-   [increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

```js
let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);
```

Juego adivinar

-   [Math.random()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random): La función Math.random() retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).

```js
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
```

Paso 1:

```js
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}
```

Paso 2:

```js{9-13}
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}
```

## Array

-   [array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array): Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);
```

<div class="text-center">
    <img :src="$withBase('/img/vscode-5.png')" alt="icono visual studio code git">
</div>

Conceptos claves:

1. length: Tamaño de array (cantidad de elementos)
2. índice: Comienzan en cero, es decir, el índice del primer elemento de un array es 0.

```js
let frutas = ["manzana", "platano", "pera"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
```

:::tip undefined
Una variable a la que no se le ha asignado valor, o no se ha declarado en absoluto (no se declara, no existe) son de tipo `undefined`. Un método o sentencia también devuelve `undefined` si la variable que se está evaluando no tiene asignado un valor. Una función devuelve `undefined` si no se ha devuelto un valor.
:::

:::warning
Este es solo el comienzo de los array, más adelante conoceremos en profundidad como trabajar con array, recorrerlos con forEach, agregar o quitar elementos, ordenarlos, filtrar, etc.
:::

## for

<div class="text-center">
    <img :src="$withBase('/img/pseint-10.JPG')" alt="icono visual studio code git">
</div>

-   [for](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for): Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

```js
let frutas = ["manzana", "platano", "pera"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

## for of

-   [for of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of): La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

```js
for (let fruta of frutas) {
    console.log(fruta);
}
```

:::warning
La sintaxis de for...of es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad [Symbol.iterator].

**Vamos a tener una sección dedicada a los objetos en Javascript así que paciencia.**
:::

<div class="text-center">
    <img :src="$withBase('/img/vscode-6.png')" alt="icono visual studio code git">
</div>

-   [for in](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of#diferencia_entre_for...of_y_for...in): El bucle for...in iterará sobre todas las propiedades de un objeto. Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya sido internamente definida con su propiedad [[Enumerable]] configurada como true.

```js
for (let fruta in frutas) {
    console.log(fruta);
}
```

## function

-   [functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions): Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un **conjunto de instrucciones** que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

Características:

-   El nombre de la función.
-   Una lista de parámetros de la función, entre paréntesis y separados por comas.
-   Las declaraciones de JavaScript que definen la función, encerradas entre llaves, `{ ... }`.

```js
function saludar() {
    console.log("Bienvenido!");
}

saludar();
```

y esto funcionará...

```js
saludar();
function saludar() {
    console.log("Bienvenido!");
}
```

-   una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
-   [Hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

:::danger Ojito!!
"Hoisting" usualmente es una pregunta técnica en una entrevista de trabajo 😲
:::

Funciones con argumentos/parámetros:

```js
function saludar(nombreUsuario) {
    console.log("Bienvenido! " + nombreUsuario);
}
saludar("Ignacio");
```

Funciones con retorno:

```js
function saludar(nombreUsuario) {
    return "Bienvenido " + nombreUsuario;
}

console.log(saludar("Ignacio"));
```

Ejemplo sumar:

```js
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número");
let numeroDos = prompt("Ingrese segundo número");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);
```

:::tip reutilizables
Una característica fundamental de las funciones es que se pueden reutilizar.
:::

```js
function sumar(n1, n2) {
    return n1 + n2;
}

let resultadoUno = sumar(10, 20);
let resultadoDos = sumar(50, 60);
let resultadoTres = sumar(100, 30);

console.log("El total uno es: " + resultadoUno);
console.log("El total dos es: " + resultadoDos);
console.log("El total tres es: " + resultadoTres);
```

## ¿Qué sigue?

Hasta acá conocimos los fundamentos de programación en Javascript, pero aún nos queda mucho por aprender, continuaremos en la siguiente sección con más JS.

<div class="text-center">
    <img :src="$withBase('/img/bean.gif')" alt="icono visual studio code git">
</div>
