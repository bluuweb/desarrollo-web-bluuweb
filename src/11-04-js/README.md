# Javascript (Objetos)

- JavaScript está diseñado en un paradigma simple basado en objetos.
- Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
- El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. 
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
```

Notación de corchetes (nos servirá para recorrerlo):
```js
console.log(gato['nombre'])
console.log(gato['edad'])
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

## for...in
- (for...in)[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in]: La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas

```js
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};

for (const key in gato) {
    console.log(gato[propiedad]);
}
```


## Destructuring Objects




## Programación funcional

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