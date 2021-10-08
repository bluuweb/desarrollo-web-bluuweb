# Javascript (conceptos claves)

:::tip 
**Preocuparse por la eficiencia puede ser una distracción.** Es otro factor más que complica el diseño del programa, y ​​cuando estás haciendo algo que ya es difícil, esa cosa extra de la que preocuparte puede ser paralizante. Por lo tanto, **empieza siempre por escribir algo que sea correcto y fácil de entender.** Si te preocupa que sea demasiado lento, que normalmente no lo es, ya que la mayoría del código simplemente no se ejecuta con la frecuencia suficiente para llevar una cantidad significativa de tiempo, **puedes medirlo después y mejorarlo si es necesario.**

frase del libro [Eloquent Javascript](https://eloquentjavascript.net/) - [español parcial](https://eloquentjs-es.thedojo.mx/).
:::

<div class="text-center">
    <img :src="$withBase('/img/velocidad-n1.PNG')" alt="icono visual studio code git">
    <br>
    <a href="https://stackoverflow.com/questions/14291748/n-n-1-is-faster-than-n-or-n-why" target="_blanck">Fuente</a>
</div>

## Enlaces de interés
- [recursividad en javascript](https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/)
- [certificación JS freeCodeCamp Ingles](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [certificación JS freeCodeCamp Español](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures#basic-javascript)

## interpolación template string
Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

- [template string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

Las plantillas de cadena de caracteres pueden **contener marcadores**, identificados por el signo de dólar y envueltos en llaves ``${expresión}``. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.

#### Interpolación de expresiones
- barra invertida "alt + 92"
- acento grave "alt + 96"

```js
let nombreUsuario = "bluuweb";
console.log("\nBienvenido: \n" + nombreUsuario + "\n");
```
con las plantillas literales, se pueden utilizar sus nuevas capacidades (es decir, insertar expresiones con ${ } e incluir caracteres de fin de linea literales dentro de la cadena) para simplificar la sintaxis:

```js
let nombreUsuario = "bluuweb";
console.log(`
Bienvenido: 
${nombreUsuario}
`);
```

Métodos
```js
let nombreUsuario = "bluuweb";
console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`)
```

Operador ternario
```js
let nombreUsuario = "bluuweb"
let estado = false

console.log(`
${estado ? 'Bienvenido!' : 'Adiós!'} ${nombreUsuario}
`);
```

## var vs let vs const
Uno de los mayores problemas al declarar variables con `var`, es que puede sobrescribir las declaraciones de variables sin errores.

```js
var estado = true;
var estado = false;
console.log(estado);
```

En una aplicación pequeña, es posible que no se encuentre con este tipo de problema, pero cuando su código se agrande, **puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir.**

Debido a que este comportamiento no arroja un error, la búsqueda y corrección de errores se vuelve más difícil.
Se introdujo `let` una nueva palabra clave llamada en ES6 para resolver este problema potencial con `var`.

- let: Una variable con el mismo nombre solo se puede declarar una vez.
```js
let estado = true;
let estado = false;
console.log(estado);
```

Pero si se puede cambiar su valor:
```js
let estado = true;
estado = false;
console.log(estado);
```

### Scope
Siguiendo con el tema de las variables en Javascript, conozcamos el scope.

:::tip
En simples palabras el "scope de una variable" hace referencia al lugar donde esta va a vivir o podrá ser accesible.
:::

Cuando declaras una variable con `var`, **se declara globalmente o localmente** si se declara dentro de una función.

```js
var estado = true
if (estado) {
    var estado = false
}
console.log(estado)
```

`let` se comporta de manera similar, pero con algunas características adicionales. Cuando declaras una variable con `let` dentro de un bloque, declaración o expresión, **su alcance se limita a ese bloque**, declaración o expresión.

```js
let estado = true
if (estado) {
    let estado = false
    console.log(estado)
}
console.log(estado)
```

Prueba esto:
```js
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log(i)
```

### const
``const`` tiene todas las características increíbles que ``let`` tiene, con la ventaja adicional de que las variables declaradas usando ``const`` **son de solo lectura**. Son un valor constante, **lo que significa que una vez que se asigna una variable ``const``, no se puede reasignar.**

Error:
```js
const estado = true
estado = false
```

Error:
```js
for (const i = 0; i < 10; i++) {
    console.log(i)
}
```

Válido:
```js
const estado = true
if (estado) {
    const estado = false
    console.log(estado)
}
console.log(estado)
```

:::tip
Algunos desarrolladores prefieren asignar todas sus variables usando ``const`` de forma predeterminada (me incluyo), a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan ``let``.
:::

## Array vs const
Es importante comprender que los objetos **(incluidos los arreglos y las funciones)** asignados a una variable mediante el uso ``const`` **siguen siendo mutables**. El uso de ``const`` solo evita la reasignación del identificador de variable.

Error:
```js
const miArray = []
miArray = ["nuevoElemento"]
```

Válido:
```js
let miArray = []
miArray[0] = ["nuevoElemento"]
console.log(miArray)
```

## Array (push, pop, shift, unshift)

El método ``push()`` añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
```js
const frutas = ["Banana"]
frutas.push("Sandía")
console.log(frutas)
```

El método ``unshift()`` agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
```js
const frutas = ["Banana"]
frutas.unshift("Sandía")
console.log(frutas)
```

El método ``pop()`` elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
```js
const frutas = ["Banana", "Sandía"]
frutas.pop()
console.log(frutas)
```

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
```js
const frutas = ["Banana", "Sandía"]
frutas.shift()
console.log(frutas)
```

## Funciones anónimas
En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

```js
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const miNumero = numAleatorioRango(1, 10)
console.log(miNumero)
```

Anónima:
```js
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))
```

ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha.

## Arrow functions

- [Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```js
const miNumeroFlecha = (max) => {
    return Math.floor(Math.random() * (max - 1)) + 1;
}

console.log(miNumeroFlecha(11))
```

Reducción:
```js
const miNumeroFlecha = max => Math.floor(Math.random() * (max - 1)) + 1;
        
console.log(miNumeroFlecha(11))
```

Reducción con paréntesis:
```js
const miNumeroFlecha = max => (Math.floor(Math.random() * (max - 1)) + 1);
        
console.log(miNumeroFlecha(11))
```

Más parámetros:
```js
const miNumeroFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(miNumeroFlecha(1, 11))
```

Parámetros opcionales:
```js
const miNumeroFlecha = (min = 1, max = 10) => Math.floor(Math.random() * (max - min)) + min;

console.log(miNumeroFlecha())
```

:::warning Limitantes:
- No tiene sus propios enlaces a this o super y no se debe usar como métodos.
- No tiene argumentos o palabras clave new.target.
- No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
- No se puede utilizar como constructor.
:::

## Arrow & forEach()
- [forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach): El método ``forEach()`` ejecuta la función indicada una vez por cada elemento del array.

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach(fruta => console.log(fruta))
```

```js
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta, index, array) => {
    console.log(index)
    console.log(fruta)
    console.log(array)
})
```

## Parámetros Rest
La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

- [rest parameters](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
const carrito = (...frutas) => {
    return frutas.forEach(fruta => console.log(fruta))
}
carrito("manzana", "pera", "sandía")
```

```js
const carrito = (regalo, ...frutas) => {
    console.log(regalo)
    return frutas.forEach(fruta => console.log(fruta))
}
carrito("bolsa", "manzana", "pera", "sandía")
```

## objetos literales

## Destructuring Objects

## delete and add new properties

## Programación funcional

Reduce:
```js
const sumar = (...numeros) => {
    return numeros.reduce((acc, current) => acc + current)
}
console.log(sumar(1, 2, 3, 4))
```

## DOM (dejar en otra hoja)