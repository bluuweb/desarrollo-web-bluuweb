# Array methods
- Sigamos descubriendo métodos de los array, muy pero muuuuuuuy útiles 🤙. 
- **Estos métodos no mutan el array original**, sino que nos devuelven uno nuevo.
- [functional programming](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/#functional-programming)

Hoy vamos a conocer:
- map
- find
- filter
- reduce

:::tip
**La programación funcional** es otro enfoque común en el desarrollo de software **(paradigma de programación)**. En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad.

Pero antes... ¿qué es un paradigma de programación?
:::

## Paradigmas de programación JS
JavaScript es un lenguaje de "múltiples paradigmas".

:::danger
La guía no es técnica, por ende se trataré de simplificar las definiciones, guiándome de artículos y mi bla bla bla.
:::

## Fuentes:
- [que es paradigma](https://profile.es/blog/que-son-los-paradigmas-de-programacion/)
- [pensemosweb](https://www.pensemosweb.com/paradigma-programacion-javascript/)
- [wikipedia](https://es.wikipedia.org/wiki/Paradigma_de_programaci%C3%B3n)
- [ichi.pro](https://ichi.pro/es/que-son-los-paradigmas-de-programacion-de-javascript-69204631281627)
- [cosasdigitales](https://cosasdigitales.com/articulos-diseno-web/javascript-programacion-declarativa-vs-imperativa/)
- [declarative and imperative](https://qastack.mx/programming/33655534/difference-between-declarative-and-imperative-in-react-js)

## ¿Qué es un paradigma de programación?
- Un paradigma de programación no es más que una **forma de ver y crear código de programación. Para resolver problemas.**
- Existen diferentes formas de diseñar un lenguaje de programación y **varios modos de trabajar para obtener los resultados** que necesitan los programadores. 
- Los **lenguajes de programación adoptan uno o varios paradigmas** en función del tipo de órdenes que permiten implementar como, por ejemplo, Python o JavaScript, que son multiparadigmas.

Los paradigmas de programación comunes incluyen:
- **Imperativo: (Emperador)** en el que el programador instruye a la máquina cómo cambiar su estado.
    * procedimental que agrupa las instrucciones en procedimientos.
    * **orientado a objetos (OPP o POO)** que agrupa las instrucciones con la parte del estado en el que operan.
- **Declarativo:** en el que el programador simplemente declara las propiedades del resultado deseado, pero no cómo calcularlo.
    * **funcional** en el que el resultado deseado se declara como el valor de una serie de aplicaciones de función.
    * lógico en la que el resultado deseado se declara como la respuesta a una pregunta sobre un sistema de hechos y reglas.
    * matemático en el que el resultado deseado se declara como la solución de un problema de optimización.
    * reactivo en el que se declara el resultado deseado con flujos de datos y la propagación del cambio.

## Imperativa vs Declarativa
- Programación imperativa: Nosotros dictamos el camino a seguir a través del control de flujo: variables, funciones, if, else, switch, loops ( while, for, for of, for in), try catch, async await. **Por lo tanto siempre utilizas programación imperativa en Javascript.**
- Programación declarativa: Declaras lo que quieres que suceda, no cómo se hace. La programación funcional **básicamente significa escribir código que hace algo** (declara lo que se hace) **pero no es específico sobre cómo hacerlo** (imperativo).

<!-- Imperativo: (le digo como hacerlo)
```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPorDos = [];
for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2;
    numerosPorDos.push(resultado);
}
console.log(numerosPorDos);
```

Declarativo: (JS lo hace)
```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPorDos = numeros.map((num) => num * 2);
console.log(numerosPorDos);
``` -->

:::tip
- **Javascript permite un estilo de desarrollo tanto declarativo como imperativo**, atendiendo asi a qué objetivo se busca alcanzar (declarativo) o extendiéndose sobre cómo se debe alcanzar un objetivo (imperativo).
- Si bien las últimas incorporaciones del lenguaje muestran una tendencia hacia un paradigma claramente declarativo (funcional), **ambos estilos coexisten en la industria actual** y suponen diferencias a efectos de optimización, rendimiento, legibilidad o mantenibilidad de nuestras aplicaciones, entre otros.
- **Ambos enfoques pueden lograr los mismos objetivos, y no tenemos que elegir solo uno** al programar porque JavaScript es un lenguaje de "múltiples paradigmas"
:::

## POO
- La programación orientada a objetos es una forma de **programación imperativa** puesto que al programar se describe la secuencia que debe seguir el programa para resolver un problema dado.
- Hace uso de estructuras de datos llamadas objetos que aglutinan **propiedades y métodos** conjuntamente con sus interacciones.
- La programación orientada a objetos se basa también en conceptos como la **abstracción de datos, la encapsulación, los eventos, la modularidad, la herencia y el polimorfismo.**
- Se viene una sección dedicada a POO (paciencia 🙏)

## Funcional
La programación funcional básicamente significa escribir código que hace algo (declara lo que se hace) pero no es específico sobre cómo hacerlo (imperativo).

- [Video recomendado](https://www.youtube.com/watch?v=foYs5OShBwk)
- [curso recomendado EDteam](https://app.ed.team/cursos/paradigmas)

## Conclusiones
Con js podemos utilizar múltiples paradigmas, por ende, conoceremos algunos métodos que nos facilitan la vida para la programación declarativa (funcional) pero seguiremos mezclando nuestra escritura con programación imperativa.


## Array methods
- Sigamos descubriendo métodos de los array muy pero muuuuuuuy útiles! 
- **Estos métodos no mutan el array original**, sino que nos devuelven uno nuevo.
- [functional programming](https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/#functional-programming)

## map
- [map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map): El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la **función callback** en cada elemento. Esto lo hace sin mutar el arreglo original.

::: tip
**Una función de callback** es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Chiste repetido: Sección especial más adelante con callback 🤙
:::

Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map.

```js
const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((item) => {
    return item;
});

console.log(nuevoArray);
```

Reduciendo el código:
```js
const frutas = ["🍌", "🍏", "🍓"];
const nuevoArray = frutas.map((item) => item);
console.log(nuevoArray);
```

¿Pero no es lo mismo que esto?
```js
const frutas = ["🍌", "🍏", "🍓"];
// por referencia (revisar videos anteriores)
const arrayReferencia = frutas; 
frutas.push("🍉");
console.log(arrayReferencia);

// construye un nuevo array con los resultados
// esto lo hace sin mutar el arreglo original
const nuevoArray = frutas.map((item) => item);
frutas.push("🍉");
console.log(nuevoArray);
```

Devolver solo el name en un nuevo array
```js
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name);
console.log(names);
```

Devolver nuevo array con numeros * 2
```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((item) => item * 2);

console.log(numerosPorDos);
```

## filter
- [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): El método ``filter()`` crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const mayor = users.filter((user) => user.age > 30);
console.log(mayor);
```

Eliminar un usuario por uid
```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const userFiltrado = users.filter((user) => user.uid !== 2);

console.log(userFiltrado);
```

## find
- [find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find): El método ``find()`` devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

Buscar usuario por uid:
```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const amy = users.find((user) => user.uid === 2);
console.log(amy);
```

Utilizando [destructuring](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```js
const { age } = users.find((user) => user.uid === 2);
console.log(age);
```

## some
- [some](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some): El método ``some()`` comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2);
console.log(existe);
```

## findIndex
- [findIndex](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex): El método ``findIndex()`` devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

```js
const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.findIndex((user) => user.uid === 4);
console.log(existe);
```

## slice
- [slice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice): El método ``slice()`` devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin **(fin no incluido)**. El array original no se modificará.

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray);
```

## concat
- [concat](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat): El método ``concat()`` se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
```

- [Spread syntax](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax): **permite a un elemento iterable** tal como un arreglo o cadena **ser expandido** en lugares donde son esperados.

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];

console.log(array3);
```

## reduce
- [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce): El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

Sumar todos los números:
```js
const numeros = [1, 2, 3, 4, 5];

const sumaTodos = numeros.reduce((acc, valorActual) => acc + valorActual);

console.log(sumaTodos);
```

Aplanar matrices anidadas #01:
```js
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
    (acc, current) => acc.concat(current)
);

console.log(soloNumeros);
```

Aplanar matrices anidadas #02:
```js
const flatSingle = [].concat(...arrayNumeros);
console.log(flatSingle);
```

Aplanar matrices anidadas #03: [flat()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
```js
const flatSingle = arrayNumeros.flat();
console.log(flatSingle);
```

Esto no resulta para mi 😭🤷‍♂️ (etapa experimental: 22-10-2021)
```js
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
console.log(arr3);
```

## split
- [split](): El método ``split()`` divide un objeto de tipo String en un array, mediante un separador.

```js
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);
```

## join
- [join](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join): el método ``join()`` une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

```js{6}
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

const nuevamenteString = arrayMeses.join(",");
console.log(nuevamenteString);
```

Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena si es necesario. **Si este se omite, los elementos del arreglo son separados con una coma (",")**. 

## Práctica #01:
```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoArray = [];

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    console.log(carritoArray);

    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};
```

## Práctica #02:

- [ver ejemplo final](https://falta-agregar-footer-carrito-con-totales.netlify.app/)

:::warning
Antes explicar delegación de eventos 🏃‍♀️
:::

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito Objeto</title>
    <link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" rel="stylesheet">
</head>

<body>

    <main class="container mt-5">
        <div class="row text-center">
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frutilla 🍓</h5>
                        <button class="btn btn-primary" data-fruta="frutilla">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Banana 🍌</h5>
                        <button class="btn btn-primary" data-fruta="banana">Agregar</button>
                    </div>
                </div>
            </article>
            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manzana 🍏</h5>
                        <button class="btn btn-primary" data-fruta="manzana">Agregar</button>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <section class="container mt-3">
        <ul class="list-group" id="carrito"></ul>
    </section>

    <template id="template">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <span class="badge bg-primary rounded-pill align-middle">14</span>
                <span class="lead align-middle">A list item</span>
            </div>
            <div>
                <button class="btn btn-sm btn-success">Agregar</button>
                <button class="btn btn-sm btn-danger">Quitar</button>
            </div>
        </li>
    </template>

    <script src="app.js"></script>
</body>

</html>
```

```js
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const carritoArray = [];

// Delegación de eventos:
document.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.matches(".card button"));
    if (e.target.matches(".card button")) {
        agregarCarrito(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    // console.log(e.target.matches(".list-group-item .btn-danger"));
    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    // buscamos el indice
    const index = carritoArray.findIndex((item) => item.id === producto.id);

    // si no existe empujamos el nuevo elemento
    if (index === -1) {
        carritoArray.push(producto);
    } else {
        // en caso contrario aumentamos su cantidad
        carritoArray[index].cantidad++;
    }

    // console.log(carritoArray);

    pintarCarrito(carritoArray);
};

const pintarCarrito = (nuevoCarrito) => {
    carrito.textContent = "";

    // recorremos el carrito y pintamos elementos:
    nuevoCarrito.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};

const btnAumentar = (e) => {
    console.log(e.target.dataset.id);
    const nuevoArray = carritoArray.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item;
    });
    pintarCarrito(nuevoArray);
};

const btnDisminuir = (e) => {
    console.log(e.target.dataset.id);
    const nuevoArray = carritoArray.filter((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad--;
            if (item.cantidad !== 0) {
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito(nuevoArray);
};
```

## FrontendMentor
- [Cachipún](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)
- [pricin interactive](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)
- [TODO](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)