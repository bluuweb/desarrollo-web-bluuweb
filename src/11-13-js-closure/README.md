# JS Closures
- [closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
- Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico).
- Permite acceder al ámbito de una función exterior desde una función interior. 
- En JavaScript, las clausuras se crean cada vez que una función es creada.

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:
1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
6. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
¿Quiéres apoyar los directos?
    - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl)
    - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl)
    - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
:::

## Recursos
- [video 1](https://www.youtube.com/watch?v=JXG_gQ0OF74&t=1319s)
- [video 2](https://www.youtube.com/watch?v=E6aPTeVujRs)
- [video 3](https://www.youtube.com/watch?v=K6fz_fvQ_jU)

## Ámbito léxico
```js
function iniciar() {
    let nombre = "bluuweb";
}
iniciar();

console.log(nombre);
```
- La variables por ser una función interna, solo estará disponible dentro del cuerpo de ``iniciar()``

```js
function iniciar() {
    let nombre = "bluuweb";
    function mostrarNombre() {
        console.log(nombre);
    }
    mostrarNombre();
}

iniciar();
```
- ``mostrarNombre()`` no tiene ninguna variable propia; pero, dado que las funciones internas tienen acceso a las variables de las funciones externas, ``mostrarNombre()`` puede acceder a la variable nombre declarada en la función ``iniciar()``.
- **Este es un ejemplo de ámbito léxico**, el cual describe cómo un analizador sintáctico resuelve los nombres de las variables cuando hay funciones anidadas.
- La palabra léxico hace referencia al hecho de que el ámbito léxico se basa en el lugar donde una variable fue declarada para determinar dónde esta variable estará disponible. 

```js
function iniciar() {
    let nombre = "bluuweb";

    return function mostrarNombre() {
        console.log(nombre);
    };
}

const iniciarUno = iniciar();
iniciarUno();
```

- Si retornamos la función `mostrarNombre()` antes de ejecutarla.
- Parece algo extraño que esto funcione, Normalmente, las variables locales dentro de una función sólo existen mientras dura la ejecución de dicha función.
- ``iniciar()`` termina de ejecutarse, es razonable suponer que no se pueda ya acceder a la variable nombre.

:::tip ¿Qué pasó aquí?
- La solución a este rompecabezas es que ``mostrarNombre()`` se ha convertido en un closure.
:::

Un closure es un tipo especial de objeto que combina dos cosas:
- Una función, y el entorno en que se creó esa función.
- El entorno está formado por las variables locales que estaban dentro del alcance en el momento que se creó el closure.

## Emulando métodos privados
Los métodos privados no son sólo útiles para restringir el acceso al código: también proporcionan una poderosa manera de administrar tu espacio de nombres global, evitando que los métodos no esenciales embrollen la interfaz pública de tu código.

```js
function makeCounter() {
    let privateCounter = 0;

    return {
        increment() {
            privateCounter++;
        },
        decrement() {
            privateCounter--;
        },
        value() {
            return privateCounter;
        },
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value());
console.log(counter2.value());

counter1.increment();
counter1.increment();
counter1.increment();

counter2.decrement();
counter2.decrement();
counter2.decrement();

console.log(counter1.value());
console.log(counter2.value())
```

- Cada contador es independiente.
- Su entorno es diferente.
- privateCounter tiene una instancia diferente cada vez.
- Utilizar closures de este modo proporciona una serie de beneficios que se asocian normalmente con la programación orientada a objectos, en particular la encapsulación y la ocultación de datos.

Con funciones de Flecha:
```js
const crearContador = (num = 0) => ({
    increment() {
        num++;
    },
    decrement() {
        num--;
    },
    value() {
        return num;
    },
});

const counter1 = crearContador(10);
```

- Si bien puedes desarrollar una app sin siquiera saber que estás utilizando closures, el conocer su existencia, definición y uso desbloquea nuevas posibilidades a la hora de crear una solución.
- Closures es uno de esos conceptos que se complican en entender cuando estás empezando, pero hacer el intento de utilizarlos con conocimiento puede permitirte aumentar tus herramientas y avanzar en tu carrera.
- También puede que te lo pregunten como prueba técnica.
- [fuente](https://www.freecodecamp.org/espanol/news/que-es-un-closure-en-javascript/)

