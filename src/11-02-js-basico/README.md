# Javascript (Fundamentos)

- Aquí conoceremos los fundamentos de Javascript.
- Es muy importante revisar la sección anterior ["Programación (Fundamentos)"](/11-01-psint/) si no sabes nada de nada.

JavaScript es un lenguaje de programación que te permite implementar funciones complejas en tus páginas web. [mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#:~:text=JavaScript%20es%20un%20lenguaje%20de%20programaci%C3%B3n%20o%20de%20secuencias%20de%20comandos%20que%20te%20permite%20implementar%20funciones%20complejas%20en%20p%C3%A1ginas%20web)

#### Ejemplos:
- [brittanychiang.com](https://brittanychiang.com/)
- [kuon.space](https://kuon.space/)
- [moonfarmer.com](https://moonfarmer.com/)
- [lider.cl](https://www.lider.cl/supermercado)
- [30ua.info/en](https://30ua.info/en/)
- [meadlight.com/en](https://meadlight.com/en)
- [2021.fanzone36.com/fr/home](https://2021.fanzone36.com/fr/home)

#### Repaso
- **HTML**: es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
- **CSS**: es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
- **JS**: es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert('jugando con JS')
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
            alert('Hola soy un saludo')
        }
    </script>
</body>
```

#### 3. Archivo externo

La extensión es `.js`, respetando:
- No utilizar espacios, en su lugar reemplazar con `_`, `-` o [camelCase](https://es.wikipedia.org/wiki/Camel_case#:~:text=Camel%20case%20(estilizado%20como%20camelCase)%20o%20letra%20de%20caja%20camello%20es%20un%20estilo%20de%20escritura%20que%20se%20aplica%20a%20frases%20o%20palabras%20compuestas.%20El%20nombre%20se%20debe%20a%20que%20las%20may%C3%BAsculas%20a%20lo%20largo%20de%20una%20palabra%20en%20CamelCase%20se%20asemejan%20a%20las%20jorobas%20de%20un%20camello.) 🐫
- Utilizar lengua inglesa, sin ñ ni tildes
- Evitar signos extraños como `@#][+{}`, etc.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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


## Palabras reservadas

- [lista](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)

En nuestro ejemplo anterior utilizamos `alert` esto indica a JS que es una acción o función.

```js
alert("esto es una alerta del navegador");
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
console.log("hola esta es la consola");
```

## Tipo de datos
Cómo hemos practicado, los textos que enviamos a la consola van entre **comillas** `"text"` o `'texto'`. Esto pasa porque existen distintos tipos de datos en JS.

El último estándar [ECMAScript define nueve tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures), pero por ahora nos centraremos en 3.

- String: se utiliza para representar datos textuales.
- Number: valores numéricos.
- Boolean: representa una entidad lógica y puede tener dos valores: ``true`` y ``false``.

```js
console.log("un valor de tipo texto");
console.log(20);
console.log(1.2);
console.log(1, 62);
console.log(1 + 1);
console.log(true);
console.log(false);
```

## Operadores Aritméticos
En programación y matemáticas, los operadores aritméticos son aquellos que manipulan los datos de tipo numérico, es decir, permiten la realización de operaciones matemáticas (sumas, restas, multiplicaciones, etc.).. [más info](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos)

Adición: Suma dos números juntos.
```js
console.log(1 + 1);
```

Resta: Resta el numero de la derecha del de la izquierda.
```js
console.log(2 - 1);
```

Multiplicación: Multiplica dos números juntos.
```js
console.log(5 * 20);
```

División: Divide el número de la izquierda por el de la derecha.
```js
console.log(20 / 5);
```

Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
```js
console.log(8 % 3);
```

## Jugando

```js
console.log(2 * (100 / 5) + 10);
```

¿Que pasa si queremos guardar el resultado, para una futura operación?
RE: Para eso existen las variables

## Variables
- En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.
- Imagina como una caja que guarda un tipo de dato/valor.

<div class="text-center">
    <img :src="$withBase('/img/pseint-3.JPG')" alt="icono visual studio code git">
</div>

```js
let x = 10
let y = false
let z = x
let n = 'Juanito'
```

En JS el signo **`=`** se conoce como **Operador de asignación simple**

:::tip Asignación
- El signo `=` en Javascript se conoce como asignación (permite almacenar un valor a una variable).
- Se evalúa la expresión de la derecha y luego se le asigna el resultado a la variable de la izquierda.
:::

A esto se le llama declarar la variable.

:::tip
`var` es una palabra reservada para crear una varible global en JS. La veremos más adelante.
:::

```js
let x = 10;
let y = 20;
let resultado = x * y;

console.log(resultado);
```

Reglas para el nombre de sus variables:
- No utilizar espacios, en su lugar reemplazar con `_` o [camelCase](https://es.wikipedia.org/wiki/Camel_case#:~:text=Camel%20case%20(estilizado%20como%20camelCase)%20o%20letra%20de%20caja%20camello%20es%20un%20estilo%20de%20escritura%20que%20se%20aplica%20a%20frases%20o%20palabras%20compuestas.%20El%20nombre%20se%20debe%20a%20que%20las%20may%C3%BAsculas%20a%20lo%20largo%20de%20una%20palabra%20en%20CamelCase%20se%20asemejan%20a%20las%20jorobas%20de%20un%20camello.) 🐫
- Utilizar lengua inglesa, sin ñ ni tildes (en teoría se puede pero es una mala práctica) 
- Evitar signos extraños como `@#][+{}-` etc.
- El primer carácter no puede ser un número `var 2res = 'algo'`
- Se puede utilizar el signo `$` ej: `var $anio = 2021;`

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
Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más ``+``, el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Vamos a probar un ejemplo en nuestra consola.

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
let resultado = 20 == '20';
console.log(resultado);
```

```js
let resultado = 20 !== 10;
console.log(resultado);
```

## Operadores lógicos
Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos.

- && : Si los dos son verdaderos devuelve verdadero.
- || : Basta con que uno sea verdadero para que devuelva verdadero.
- ! : Negación

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
- if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)
- ?: operador ternario (Operador ternario: Equivalente a If/else , método abreviado.)
- switch (Estructura para casos específicos: Similar a varios If/else anidados.)

Repetitivas o iterativas
- while
- do... while
- for

## if/else (si/no)
Un if en programación se utiliza para evaluar una expresión condicional: **si se cumple la condición (es verdadera), ejecutará un bloque de código.**

<div class="text-center">
    <img :src="$withBase('/img/pseint-5.JPG')" alt="icono visual studio code git">
</div>

