# JS Módulos


## ¿Qué es¡
- [módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- Proporcionar mecanismos para dividir código JavaScript en módulos separados, que se puedan importar cuando sea necesario.
- Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos (por ejemplo, CommonJS y AMD otros basados en sistemas de módulos como RequireJS, y recientemente Webpack y Babel).
- La buena noticia es que los navegadores modernos han comenzado a admitir la funcionalidad de los módulos de forma nativa.

:::tip .mjs vs .js
- [Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#reflexi%C3%B3n_%E2%80%94_.mjs_versus_.js)
:::

## un Problema:

```html
<script src="js/app.js"></script>
<script src="js/fruta.js"></script>
```

app.js
```js
const sandia = "🍉";
```

fruta.js
```js
const sandia = "🍉";
```

## IIFE
- [IIFE](https://developer.mozilla.org/es/docs/Glossary/IIFE): Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
- Es un patrón de diseño también conocido cómo función autoejecutable.

```js
(function() {
    const sandia = "🍉";
    console.log(sandia);
})();

(() => {
    const sandia = "🍉";
    console.log(sandia);
})();
```

:::tip
- La función se convierte en una expresión de función que es ejecutada inmediatamente. **La variable dentro de la expresíon no puede ser accesada desde afuera.**
- Desventaja: No tenemos alcance de nuestras variables y se nos puede salir de las manos.
- Solución "Módulos"
:::

## export e import 
- Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas.
- Esto se hace usando la declaración export.
- Puedes exportar funciones, var, let, const y, como veremos más adelante clases.
- Deben ser elementos de nivel superior; no puedes usar export dentro de una función, por ejemplo.
- Esto se conoce como **exportaciones con nombre.**


```html
<script src="js/app.js"></script>
```

El archivo que exporta
```js
export const sandia = "🍉";
```

El archivo que recibe:
```js
import { sandia } from "./persona.js";
console.log(sandia);
```

:::danger
Uncaught SyntaxError: Cannot use import statement outside a module
:::

```html
<script src="js/app.js" type="module"></script>
```

## Alternativas 1:

```js
export const sandia = "🍉";
export const banana = "🍌";

export function guinda() {
    console.log("🍒");
}

export const frutilla = () => {
    console.log("🍓");
};
```

```js
import { sandia, banana, guinda, frutilla } from "./persona.js";
console.log(sandia);
console.log(banana);
guinda();
frutilla();
```

## Alternativa 2:
```js
const sandia = "🍉";
const banana = "🍌";

function guinda() {
    console.log("🍒");
}

const frutilla = () => {
    console.log("🍓");
};

export { sandia, banana, guinda, frutilla };
```

::: tip Diferencias entre módulos y scripts estándar
- [módulos vs scripts](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#otras_diferencias_entre_m%C3%B3dulos_y_scripts_est%C3%A1ndar)
:::

## export default
- También hay un tipo de exportación llamado exportación predeterminada.
- Solo se permite una exportación predeterminada por módulo.

```js
export default function() {
    console.log("🍒");
}
```

```js
import guinda from './persona.js'
guinda();
```

### Flecha:
```js
export default () => {
    console.log("🍓");
};

// note que puede utilizar cualquier nombre
import guinda from "./persona.js";
guinda();
```

## export con alias

```js
const sandia = "🍉";
const banana = "🍌";

function guinda() {
    console.log("🍒");
}

export default () => {
    console.log("🍓");
};

export { sandia, banana, guinda };
```

```js
import {
    sandia as melon,
    banana as platano,
    guinda as cereza,
} from "./persona.js";
import frutilla from "./persona.js";

console.log(melon);
console.log(platano);
cereza();
frutilla();
```

## Práctica:
- Intenta llevar a módulos nuestro ejemplo de Estudiantes y Profesores.

## LocalStorage
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage): Permite guardar datos en el navegador.
- Los datos persisten almacenados entre de las diferentes sesiones de navegación.
- LocalStorage es similar a sessionStorage. La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, **los datos almacenados en sessionStorage son eliminados** cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.
- Las claves y los valores son siempre cadenas de texto

```js
// guardar
localStorage.setItem("fruta", "🍌");

// obtener
const fruta = localStorage.getItem("fruta");
console.log(fruta);

// eliminar
localStorage.removeItem("fruta");

// elimina todos los elementos
localStorage.clear();
```

:::tip ¿Actualizar?
No existe en localStorage, más adelante veremos que se tiene que capturar el elemento y volver a guardarlo.
:::

## JSON.stringify() & JSON.parse()
- [JSON.stringify()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.
- [JSON.parse()](): El método JSON.parse() analiza una cadena de texto como JSON.

```js
const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];

localStorage.setItem("frutas", JSON.stringify(frutas));

if (localStorage.getItem("frutas")) {
    const frutas = JSON.parse(localStorage.getItem("frutas"));
    console.log(frutas);
}
```

## Práctica TODO:
- [ejemplo Final](https://simple-todo-app-bluuweb.netlify.app/)

```js
<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />

        <title>TODO app</title>
    </head>
    <body>
        <div class="container my-5">
            <h1>TODO</h1>

            <div class="alert alert-danger d-none">
                No deje el Todo vacío
            </div>

            <form id="formulario">
                <input
                    name="todo"
                    type="text"
                    class="form-control my-2"
                    placeholder="ingrese todo"
                    value="todo 1"
                />
                <button class="btn btn-primary" type="submit">Agregar</button>
            </form>

            <section class="mt-3" id="pintarTodo"></section>

            <template id="templateTodo">
                <article
                    class="alert alert-warning d-flex align-items-center justify-content-between"
                >
                    <p class="mb-0 lead">lorem</p>
                    <div>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </article>
            </template>
        </div>

        <script src="js/app.js"></script>
    </body>
</html>
```

```js
const alert = document.querySelector(".alert");
const formulario = document.querySelector("#formulario");
const pintarTodoHTML = document.querySelector("#pintarTodo");
const templateTodo = document.querySelector("#templateTodo").content;

let todos = [];

const procesarFormulario = (e) => {
    e.preventDefault();
    alert.classList.add("d-none");

    const datos = new FormData(formulario);
    const [todo] = [...datos.values()];

    // validación campo vacío
    if (!todo.trim()) {
        alert.classList.remove("d-none");
        return;
    }

    agregarTodo(todo);
    pintarTodos();
};

const agregarTodo = (todo) => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`,
    };
    todos.push(objetoTodo);
};

const pintarTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    pintarTodoHTML.textContent = "";
    const fragment = document.createDocumentFragment();

    todos.forEach((item) => {
        const clone = templateTodo.cloneNode(true);

        clone.querySelector(".lead").textContent = item.nombre;
        clone.querySelector(".btn-danger").dataset.id = item.id;

        fragment.appendChild(clone);
    });
    pintarTodoHTML.appendChild(fragment);
};

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-danger")) {
        console.log(e.target.dataset.id);
        todos = todos.filter((item) => item.id !== e.target.dataset.id);
        pintarTodos();
    }
});

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
        pintarTodos();
    }
});

formulario.addEventListener("submit", procesarFormulario);
```
