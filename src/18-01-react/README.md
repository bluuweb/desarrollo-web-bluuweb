# React Introducción

:::tip Apoya este curso 😍
- Conviértete en miembro del canal 😲, [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
:::

:::warning
- Es recomendable conocer los fundamentos de JS antes de comenzar este curso.
- [curso de JS gratis](https://www.youtube.com/watch?v=6bBmfiYmJE8&list=PLPl81lqbj-4LKJ1Vx3EySRht6f9xzolZf)
- [curso de git y github](https://youtu.be/PW_A-lOpVV0)
:::

## Planificación
- ¿Qué es React?
- create-react-app
- JSX
- Introducción a componentes
- Introducción a Hooks

## Recursos
- [es.reactjs.org](https://es.reactjs.org/)
- [getting-started](https://es.reactjs.org/docs/getting-started.html)
- [tutorial](https://es.reactjs.org/tutorial/tutorial.html)
- [create-react-app](https://create-react-app.dev/)
- [getting-started-with-react](https://www.taniarascia.com/getting-started-with-react/)

Extensiones:
- [es7-react](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## ¿Qué es React?
- React es una biblioteca Javascript para crear interfaces de usuario.
- React no es un framework (a diferencia de Angular o Vue, que tienen más opiniones).
- React es un proyecto de código abierto creado por Facebook.
- Está basado en componentes.

:::tip [getting-started-with-react](https://www.taniarascia.com/getting-started-with-react/)
Uno de los aspectos más importantes de React es el hecho de que puede crear componentes, que son como elementos HTML personalizados y reutilizables, para construir interfaces de usuario de manera rápida y eficiente. React también agiliza la forma en que se almacenan y manejan los datos, utilizando el estado y los accesorios.
:::

## Requisitos
- [node js](https://nodejs.org/es/): es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
- [npm](https://www.npmjs.com/): NPM (Node Package Manager) es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general. [fuente](https://openwebinars.net/blog/que-es-node-package-manager/)

:::tip ¿Qué es un módulo?
- Un módulo no es nada más que una unidad de código organizado en archivos o directorios, la cual puede ser exportada con facilidad para poder reutilizarse en otras partes de la aplicación. [fuente](https://alvaroperdiz.com/javascript/node-js/sistema-modulos/)
- External modules: Son, en esencia, los paquetes de terceros distribuidos a través de npm (aunque pueden provenir de otros repositorios). Estos paquetes se instalan como dependencias y, aunque aportan funcionalidad a la aplicación, no deben incluirse en el repositorio ya que no son parte de la misma.
:::

## create-react-app
- [create-react-app](https://create-react-app.dev/) Afortunadamente, Facebook ha creado la aplicación Create React App, un entorno que viene preconfigurado con todo lo necesario para crear una aplicación React. 
- Creará un servidor de desarrollo en vivo.
- No es necesario instalar ni configurar herramientas como webpack o Babel. Están preconfigurados y ocultos para que pueda concentrarse en el código.
- Ventaja: enfocarse en el código, no en las herramientas de compilación.

```
npx create-react-app my-app
cd my-app
npm start
```

:::tip npx
- Npx es una herramienta de cli que nos permite ejecutar paquetes de npm, los busca en su servidor y lo ejecuta en nuestra máquina.
- Si usas npx no tienes que instalar paquetes de forma global.
- Busca siempre la última versión.
:::

:::tip
Si ha instalado previamente ``create-react-app globalmente`` a través de ``npm install -g create-react-app``, le recomendamos que desinstale el paquete usando ``npm uninstall -g create-react-app`` o ``yarn global remove create-react-app`` para asegurarse de que ``npx`` siempre usa la última versión.
:::

## Directorios
- plublic: Archivos públicos
    - index.html -> `<div id="root"></div>`
- src
    - index.js

## index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    "bluuweb app"
  </React.StrictMode>,
  document.getElementById('root')
);
```
- [Modo estricto](https://es.reactjs.org/docs/strict-mode.html): StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
- [ReactDOM](https://es.reactjs.org/docs/rendering-elements.html): React DOM se encarga de actualizar el DOM para igualar los elementos de React.

## App.jsx
1. Crear archivo en src/App.jsx
2. ejecutar: `_rafce`

```jsx
const App = () => {
    return (
        <div>
            bluuweb
        </div>
    )
}

export default App
```

## JSX: JavaScript + XML
- Como ha visto, hemos estado usando lo que parece HTML en nuestro código React, pero no es HTML del todo. Esto es JSX , que significa JavaScript XML.
- El uso de JSX no es obligatorio para escribir React.
- Debajo del capó, se está ejecutando ``createElement``, lo que toma la etiqueta, las propiedades y los elementos secundarios del componente y muestra la misma información.
- JSX está más cerca de JavaScript, no de HTML, por lo que hay algunas diferencias clave a tener en cuenta al escribirlo.
    - ``className`` se usa en lugar de ``class`` para agregar clases CSS, ya que ``class`` es una palabra clave reservada en JavaScript.
    - Las propiedades y métodos en JSX son camelCase.
    - Las etiquetas de cierre automático deben terminar en una barra inclinada, p. Ej. ``<img />``

Las expresiones de JavaScript también se pueden incrustar dentro de JSX usando llaves, incluidas variables, funciones y propiedades.
```jsx
const App = () => {
    const titulo = "Mi primera APP";
    return (
        <div className="container">
            <h1 className="text-primary">{titulo}</h1>
        </div>
    );
};

export default App;
```

```jsx
const App = () => {
    const titulo = "Mi primera APP";
    const colores = {
        primary: "text-primary",
        info: "text-info",
        danger: "text-danger",
    };

    return (
        <div className="container">
            <h1 className={colores.primary}>{titulo}</h1>
        </div>
    );
};

export default App;
```

## Renderizado condicional
- [condicional](https://es.reactjs.org/docs/conditional-rendering.html): En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

```jsx
const user = true;

const SaludoBienvenida = () => (
    <h2 className="text-warning">Bienvenido!</h2>
);

const SaludoDespedida = () => (
    <h2 className="text-secondary">Usuario offline</h2>
);

return (
    <div className="container">
        <h1 className={colores.primary}>{titulo}</h1>

        {user ? <SaludoBienvenida /> : <SaludoDespedida />}

    </div>
);
```

## Listas y keys
- [listas](https://es.reactjs.org/docs/lists-and-keys.html)

```jsx
const frutas = ["🍉", "🍌", "🍓"];

    return (
        <div className="container">
            <h1 className={colores.primary}>{titulo}</h1>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </div>
    );
```

:::tip
- React usa el key prop para crear una relación entre el componente y el elemento DOM. 
- La biblioteca utiliza esta relación para determinar si el componente debe volver a renderizarse o no.
- No se recomienda utilizar el índice de la matriz como key si sabe que la matriz no será estática.
- Si key es un índice, reordenar un elemento en la matriz lo cambia. Entonces React se confundirá y volverá a renderizar el elemento incorrecto.
- [fuente](https://sentry.io/answers/unique-key-prop/)
:::

## Manejando eventos
- [eventos](https://es.reactjs.org/docs/handling-events.html)
- Los eventos de React se nombran usando camelCase, en vez de minúsculas.
- Con JSX pasas una función como el manejador del evento, en vez de un string.

```jsx
<button
    className="btn btn-primary"
    onClick={() => console.log("super!")}
>
    Click!
</button>
```

```jsx
const saludoClick = () => console.log("Saludo!");

return (
    <div className="container">
        <button className="btn btn-primary" onClick={saludoClick}>
            Click!
        </button>
    </div>
);
```

Con parámetros:
```jsx
const saludoClick = (name) => {
    console.log("Saludo! " + name);
};

return (
    <div className="container">
        <button
            className="btn btn-primary"
            onClick={() => saludoClick("bluuweb")}
        >
            Click!
        </button>
    </div>
);
```

## Componentes
- [components](https://es.reactjs.org/docs/components-and-props.html)
- Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

components/Frutas.jsx
```jsx
const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <div>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Frutas;
```

App.jsx
```jsx
import Frutas from "./components/Frutas";

const App = () => {
    return <Frutas />;
};

export default App;
```

:::tip Fragmentos
- [fragment](https://es.reactjs.org/docs/fragments.html): Un patrón común en React es que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.
:::

```jsx
import React from "react";
const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <React.Fragment>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Frutas;
```

```jsx
const Frutas = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Frutas;
```

### Reutilizar componentes:
```jsx
import Frutas from "./components/Frutas";

const App = () => {
    return (
        <>
            <Frutas />
            <Frutas />
            <Frutas />
        </>
    );
};

export default App;
```

## Props
- Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto. Llamamos a este objeto “props” (propiedades)
- Son de solo lectura.

```jsx
import Frutas from "./components/Frutas";

const App = () => {
    const frutas = ["🍉", "🍌", "🍓"];
    return <Frutas frutas={frutas} />;
};

export default App;
```

```jsx
const Frutas = (props) => {
    console.log(props);
    return (
        <>
            <ul>
                {props.frutas.map((fruta, i) => (
                    <li key={fruta}>
                        {i + 1} - {fruta}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Frutas;
```

:::danger React es bastante flexible pero tiene una sola regla estricta:
- Todos los componentes de React deben actuar como funciones puras con respecto a sus props.
- Tales funciones son llamadas “puras” porque no tratan de cambiar sus entradas, y siempre devuelven el mismo resultado para las mismas entradas.
- Por supuesto, las interfaces de usuario de las aplicaciones son dinámicas y cambian con el tiempo. En la siguiente sección, introduciremos un nuevo concepto de “estado”.
:::

## Estado
- El estado le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa, sin violar la regla de arriba ☝.
- [state](https://es.reactjs.org/docs/state-and-lifecycle.html)
- Para hacer cambios vamos a utilizar un hook.

## Hooks
¿Qué pasa si hago esto?
```jsx
const App = () => {
    let contador = 0;

    const aumentarContador = () => {
        contador++;
        console.log(contador);
    };

    return (
        <div className="container">
            <h1>{contador}</h1>
            <button className="btn btn-primary" onClick={aumentarContador}>
                Aumentar
            </button>
        </div>
    );
};

export default App;
```
- Nada le indica a React que tenemos que volver a renderizar para pintar nuevamente contador.
- Necesitamos un Hook que modifique el estado. (ahora con hooks es más fácil)

:::tip hooks
- [hooks](https://es.reactjs.org/docs/hooks-overview.html)
- Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función. 
- Los hooks no funcionan dentro de las clases — te permiten usar React sin clases.
- React proporciona algunos Hooks incorporados como useState.
- También puedes crear tus propios Hooks para reutilizar el comportamiento con estado entre diferentes componentes.
:::

## useState
- [useState](https://es.reactjs.org/docs/hooks-state.html)

```js
import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1);
    };

    return (
        <div className="container">
            <h1>{contador}</h1>
            <button className="btn btn-primary" onClick={aumentarContador}>
                Aumentar
            </button>
        </div>
    );
};

export default Contador;
```

### ¿Qué hace la llamada a useState?
- Declara una “variable de estado”.
- useState es una nueva forma de usar exactamente las mismas funciones que ``this.state`` nos da en una clase.
- Normalmente, las variables “desaparecen” cuando se sale de la función, pero las variables de estado son conservadas por React.

### ¿Qué pasamos a useState como argumento?
- El único argumento para el Hook useState() es el estado inicial.

### ¿Qué devuelve useState?
-  Devuelve una pareja de valores: el estado actual y una función que lo actualiza.

### Resumen:
- Declaramos una variable de estado llamada contador y le asignamos a 0. 
- React recordará su valor actual entre re-renderizados, y devolverá el valor más reciente a nuestra función.
- Si se quiere actualizar el valor de contador actual, podemos llamar a setContador.
- Cuando el usuario hace click, llamamos a setContador con un nuevo valor. React actualizará entonces el componente Contador pasándole el nuevo valor de contador.
- Nota los corchetes son intaxis de Javascript, se llama “desestructuración de arrays”.

## Siguiente Clase
- ¿Cómo utilizar state con objetos o arrays?