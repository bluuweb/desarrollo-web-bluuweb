# Javascript (Objetos)

- JavaScript está diseñado en un paradigma simple basado en objetos.
- Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
- **El valor de una propiedad puede ser una función**, en cuyo caso la propiedad es conocida como un método. 
- Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
- Los objetos son similares a los arreglos (arrays), **excepto que en lugar de usar índices** para acceder y modificar sus datos, **accedes a los datos en objetos a través de propiedades** (properties).
- [objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)

## Objeto literal
- Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
- [mas info](https://dev.to/duxtech/es6-objetos-literales-en-javascript-58np)

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}
```

## Acceder a los valores

Notación de punto:
```js
console.log(gato.nombre)
console.log(gato.duerme)
console.log(gato.enemigos[0]);
```

Notación de corchetes (nos servirá para recorrerlo):
```js
console.log(gato['nombre'])
console.log(gato['edad'])
console.log(gato["enemigos"][0]);
```

## CRUD (propiedades)

Crear (create)
```js
gato.color = 'Azul'
```

Leer (read)
```js
console.log(gato)
```

Actualizar (update)
```js
gato.edad = 11
```

Eliminar (delete)
```js
delete gato.duerme
```

## hasOwnProperty
A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método ``.hasOwnProperty(propname)`` para determinar si un objeto tiene una propiedad con ese nombre. ``.hasOwnProperty()`` devuelve ``true`` o ``false`` si se encuentra la propiedad o no.

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
}

console.log(gato.hasOwnProperty("nombre"))
console.log(gato.hasOwnProperty("salud"))
```

## Objetos anidados

```js
const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
}
```

Acceder:
```js
console.log(gato.otros.amigos[0])
console.log(gato.otros.favoritos.comida.fria)
```

## Encadenamiento opcional
- [Optional chaining](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining): El operador de encadenamiento opcional ``?.`` permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.


```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};
console.log(gato.otros.favoritos);
```

<div class="text-center">
    <img :src="$withBase('/img/objetos-1.PNG')" alt="icono visual studio code git">
</div>

Encadenamiento opcional: resultado undefined.
```js
console.log(gato.otros?.favoritos);
```

## Propiedad

Propiedades:
```js{2}
const frutas = ["sandía", "pera", "melon"];
console.log(frutas.length);
```

Métodos:
```js{3}
const frutas = ["sandía", "pera", "melon"];
frutas.push("banana");
console.log(frutas);
```

<div class="text-center">
    <img :src="$withBase('/img/objetos-2.png')" alt="icono visual studio code git">
</div>

## Métodos

```js{6-8}
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: function () {
        console.log("Ahora está comiendo");
    },
};

gato.comer();
```

Reducido:
```js{6-8}
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer() {
        console.log("Ahora está comiendo");
    },
};

gato.comer();
```

Con parámetros:
```js{6-8}
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return "Ahora está comiendo: " + comida;
    },
};

console.log(gato.comer("pez"));
```

¿Qué pasará con esto?
```js{7}
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));
```

Lo está buscando en el **objeto global**
```js
const nombre = "Ignacio";

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));
```

Objeto ``this``:
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        console.log(this);
    },
};

gato.comer("pez");
```

## this
- Veamos una introducción a ``this``
- this: Hace referencia al objeto **contexto** de JavaScript **en el cual se está ejecutando el código actual**
- [más info](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)

```js{7}
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));
```

:::tip
Vamos a tener que dedicar una clase especial a "this" más adelante.
:::

## arrow function

¿Esto funcionará?
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: (comida) => {
        return `${this.nombre} está comiendo ${comida}`;
    },
};

console.log(gato.comer("pez"));
```

::: warning Arrow Functions
**No tiene this** o super y **no se debe usarla como métodos.**
- [Funciones Flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
:::

Pero si puedo utilizarla en su interior:
```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    mostrarEnemigos() {
        return this.enemigos.forEach((item) => console.log(item));
    },
};

gato.mostrarEnemigos();
```

## Recorrer un objeto
A partir de ECMAScript 5, hay tres formas nativas para enumerar/recorrer las propiedades de objetos:

- [for in](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in)

## for...in

- [for in](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in): La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};

for (const propiedad in gato) {
    console.log(gato[propiedad]);
}
```

#### ¿Por qué usar for...in?
- Dado que for...in está construido para **iterar propiedades de objeto**, no se recomienda su uso con arreglos y opciones como Array.prototype.forEach() y existe for...of, ¿cuál podría ser el uso de for...in?
- Es posible que **se utilice de forma más práctica con fines de depuración**, ya que es una forma fácil de comprobar las propiedades de un objeto (mediante la salida a la consola o de otro modo)
- Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave-valor para trabajar con datos (con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular.

## Object.values()
- [Object.values()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values): devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

```js
console.log(Object.values(gato));
```

Con forEach()
```js
Object.values(gato).forEach((item) => console.log(item));
```

Existen más métodos como:
- [Object.entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Object.key()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.getOwnPropertyNames()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)












## Destructuring Objects




## Programación funcional (otra hoja)

Reduce:
```js
const sumar = (...numeros) => {
    return numeros.reduce((acc, current) => acc + current)
}
console.log(sumar(1, 2, 3, 4))
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

## DOM (dejar en otra hoja)