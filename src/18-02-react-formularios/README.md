# React Hooks Formularios

En esta sección aprenderemos a trabajar con formularios en React, utilizando Hooks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/BE-VTP6cyyA?start=323" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)

:::

:::warning

-   Es recomendable conocer los fundamentos de JS antes de comenzar este curso.
-   [curso de JS gratis](https://www.youtube.com/watch?v=6bBmfiYmJE8&list=PLPl81lqbj-4LKJ1Vx3EySRht6f9xzolZf)
-   [curso de git y github](https://youtu.be/PW_A-lOpVV0)

:::

## Planificación

-   Formularios no controlados
-   Formularios controlados
-   React Hook Form

## Recursos

-   [form react](https://es.reactjs.org/docs/forms.html)
-   [uncontrolled components](https://es.reactjs.org/docs/uncontrolled-components.html)
-   [useRef](https://es.reactjs.org/docs/hooks-reference.html#useref)
-   [formData form react](https://mattboldt.com/2020/05/02/formdata-with-react-hooks-and-fetch/)
-   [Referencias](https://es.reactjs.org/docs/refs-and-the-dom.html)

Extensiones Navegador (React Developer Tools):

-   [Firefox](https://addons.mozilla.org/es/firefox/addon/react-devtools/)
-   [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

## Formulario no controlado

-   [uncontrolled](https://es.reactjs.org/docs/uncontrolled-components.html): En la mayoría de los casos, te recomendamos usar Componentes controlados para implementar formularios.
-   En un componente controlado, los datos del formulario son manejados por un componente React.
-   La alternativa son los componentes no controlados, donde los datos del formulario son manejados por el propio DOM.
-   Para escribir un componente no controlado, puedes usar una referencia para que obtengas los valores del formulario desde el DOM.

:::tip Referencias y el DOM

-   [refs](https://es.reactjs.org/docs/refs-and-the-dom.html): Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
-   [useRef](https://es.reactjs.org/docs/hooks-reference.html#useref): useRef devuelve un objeto ref mutable cuya propiedad `.current` se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente.
    :::

```jsx
import { useRef } from "react";

const FormularioNoControlado = () => {
    const formulario = useRef(null);

    // Formulario no controlado
    const handleSubmit = (e) => {
        console.log(formulario.current);
        e.preventDefault();
    };

    return (
        <div className="container mt-2">
            <form onSubmit={handleSubmit} ref={formulario}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    defaultValue="Tarea #01"
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    defaultValue="Descripción tarea #01"
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    defaultValue="completado"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default FormularioNoControlado;
```

### FormData

```jsx
import { useRef } from "react";

const FormularioNoControlado = () => {
    const formulario = useRef(null);

    // Formulario no controlado
    const handleSubmit = (e) => {
        // console.log(formulario.current);
        e.preventDefault();

        const datos = new FormData(formulario.current);

        // spread operator: permite a un elemento iterable ser expandido
        // copia cada uno de sus elementos
        console.log(...datos.entries());

        // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
        const objetoDatos = Object.fromEntries([...datos.entries()]);

        // console.log(objetoDatos);
        if (!objetoDatos.todoNombre.trim()) {
            return console.log("vacío");
        }

        console.log("pasó las validaciones!");
        formulario.current.reset();
    };

    return (
        <div className="container mt-2">
            <form onSubmit={handleSubmit} ref={formulario}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    // defaultValue="Tarea #01"
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    // defaultValue="Descripción tarea #01"
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    // defaultValue="completado"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default FormularioNoControlado;
```

## Formularios controlados

-   [controlled](https://es.reactjs.org/docs/forms.html#controlled-components)
-   Los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.
-   Ahora vamos a poder detectar los campos input en tiempo real.

Ejemplo casi casi:

```jsx
import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(todo);
    };

    return (
        <div className="container mt-2">
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={(e) =>
                        setTodo({ ...todo, todoNombre: e.target.value })
                    }
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todo.todoDescripcion}
                    onChange={(e) =>
                        setTodo({ ...todo, todoDescripcion: e.target.value })
                    }
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={(e) =>
                        setTodo({ ...todo, todoEstado: e.target.value })
                    }
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Form;
```

Ahora si se ve más bonito:

```jsx
import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(todo);
    };

    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // setTodo({ ...todo, [e.target.name]: e.target.value });
        setTodo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // console.log(todo);

    return (
        <div className="container mt-2">
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todo.todoDescripcion}
                    onChange={handleChange}
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Form;
```

## Checkbox

```jsx{6-8}
<div className="form-check">
    <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        checked={todo.todoCheck}
        onChange={handleChange}
        name="todoCheck"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
        Dar prioridad
    </label>
</div>
```

```jsx
const [todo, setTodo] = useState({
    todoNombre: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
});

const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setTodo((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
};

console.log(todo);
```

## Pequeña validación

```jsx
const [error, setError] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    const { todoNombre, todoDescripcion } = todo;

    // pequeña validación
    if (!todoNombre.trim() || !todoDescripcion.trim()) {
        console.log("campos vacíos");
        setError(true);
        return;
    } else {
        setError(false);
    }

    // Enviar todo a un array!
};

const PintarError = () => (
    <div className="alert alert-danger">Todos los campos obligatorios</div>
);
```

```jsx
<div className="container mt-2">
    <h2>Formulario</h2>
    {error && <PintarError />}
    ...
</div>
```

Todo junto:

```jsx
import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { todoNombre, todoDescripcion } = todo;

        // pequeña validación
        if (!todoNombre.trim() || !todoDescripcion.trim()) {
            console.log("campos vacíos");
            setError(true);
            return;
        } else {
            setError(false);
        }

        // Enviar todo a un array!
    };

    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
    );

    return (
        <div className="container mt-2">
            <h2>Formulario</h2>
            {error && <PintarError />}
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todo.todoDescripcion}
                    onChange={handleChange}
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                        name="todoCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Form;
```

## Validación

Si lo que estás buscando es una solución completa incluyendo validación, tener en cuenta los campos visitados y manejar el envío del formulario, [Formik](https://formik.org/) es una de las opciones populares.

También existen otras como: [react hook form](https://react-hook-form.com/) la cual veremos a continuación.

## React hook Form

-   Estamos trabajando en esta sección 👷‍♂️👷‍♀️
-   👍 al video 😍
