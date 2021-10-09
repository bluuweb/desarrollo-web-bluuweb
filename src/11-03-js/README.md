# Javascript (Conceptos claves)

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
con las plantillas literales, se pueden utilizar sus nuevas capacidades (es decir, insertar expresiones con ``${ }`` e incluir caracteres de fin de linea literales dentro de la cadena) para simplificar la sintaxis:

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
``const`` tiene todas las características increíbles de ``let``, con la ventaja adicional de que las variables declaradas usando ``const`` **son de solo lectura**. Son un valor constante, **lo que significa que una vez que se asigna una variable ``const``, no se puede reasignar.**

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
const miArray = []
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
const frutas = ["manzana", "pera"];

frutas.unshift("uva");

const frutaEliminada = frutas.pop();

console.log(frutas);
console.log(frutaEliminada);
```

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
```js
const frutas = ["manzana", "pera"];

frutas.unshift("uva");

const frutaEliminada = frutas.shift();

console.log(frutas);
console.log(frutaEliminada);
```

## Práctica: carrito de compras

- El objetivo es crear una aplicación que nos permita ir agregando elementos a un carrito de compras: [ver ejemplo](https://bluuweb.github.io/ejemplos-javascript-fundamentos/01-carrito-compras.html)
- [confirm()](https://developer.mozilla.org/es/docs/Web/API/Window/confirm): muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar (true) y Cancelar (false).

:::warning promp()
En el caso que suban el proyecto a un servidor tendrán este mensaje:

Si un documento en una pestaña en segundo plano llama a window.prompt (), la llamada a prompt () volverá inmediatamente, **y no se mostrará ningún diálogo al usuario para esa llamada a prompt ().** 

- [más info](https://www.chromestatus.com/feature/5637107137642496)
:::

Solución:
```js
const frutas = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

frutas.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    frutas.push(fruta)
}

console.log('Ustede compró: ')
for (let fruta of frutas) {
    console.log(fruta)
}
```

## Funciones anónimas
En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

Función declarativa:
```js
// declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))
```

Función expresada: </br>
Anónima (expresada en una variable):
```js
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))
```

Diferencia declarativa vs Expresada:
```js
console.log(miNumero(1, 11))
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
```

:::tip
La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: **con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución**. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.

El hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, **el uso de las funciones expresadas garantiza que éstas formarán parte del flujo general del programa**, lo cual puede evitarnos sorpresa en determinados entornos.

- [fuente](https://www.etnassoft.com/2011/09/02/funciones-declaradas-vs-funciones-expresadas-en-javascript/)
:::

ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha.

## Arrow functions
- [Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions): Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional

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

Parámetros opcionales (también se puede hacer con function):
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

En nuestro ejemplo de carrito de compras:
```js
const carrito = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

carrito.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    carrito.push(fruta)
}

console.log('Ustede compró: ')
carrito.forEach((fruta, index) => (
    console.log(`${index + 1}: ${fruta}`)
))
```

Todavía nos quedan muchas cositas interentes de las arrow function pero antes tenemos que conocer los objetos en Javascript. **Nos vemos en la próxima sección** 😍