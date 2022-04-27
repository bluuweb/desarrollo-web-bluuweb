# React Todo APP

En esta sección realizaremos una práctica para ir aterrizando todo lo aprendido.

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
   :::

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qq1JjKjJWqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos

-   [Proyecto final](https://angry-payne-25371f.netlify.app/)
-   [repo github](https://github.com/bluuweb/todo-app-react-simple)

## App.jsx

```jsx
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="container">
            <h1>App</h1>
            <TodoList />
        </div>
    );
};

export default App;
```

## TodoList.jsx

```jsx
import Formulario from "./Formulario";

const TodoList = () => {
    return (
        <>
            <Formulario />
        </>
    );
};

export default TodoList;
```

## Formulario.jsx

-   [sweet alert 2](https://sweetalert2.github.io/#download)

```
npm install sweetalert2
```

```jsx
import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({ addTodo }) => {
    const initialState = {
        nombre: "todo 1",
        descripcion: "des todo",
        estado: "pendiente",
        prioridad: false,
    };

    const [todo, setTodo] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        if (!todo.descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción ogligatoria",
                icon: "error",
            });
        }

        // agregar todo
        addTodo({
            nombre: todo.nombre,
            descripcion: todo.descripcion,
            estado: todo.estado === "pendiente" ? false : true,
            prioridad: todo.prioridad,
            id: Date.now(),
        });
        // console.log(todo);

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form
        setTodo(initialState);
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <>
            <h3>Formulario</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={todo.nombre}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <textarea
                    type="text"
                    placeholder="ingrese descripción"
                    name="descripcion"
                    value={todo.descripcion}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <select
                    name="estado"
                    value={todo.estado}
                    onChange={handleChange}
                    className="form-control mb-2"
                >
                    <option value="pendiente">pendiente</option>
                    <option value="finalizado">finalizado</option>
                </select>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={todo.prioridad}
                        onChange={handleChange}
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Formulario;
```

## Agregar Todo

TodoList.jsx

```jsx
import { useState } from "react";
import Formulario from "./Formulario";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((old) => [...old, todo]);
    };

    return (
        <>
            <Formulario addTodo={addTodo} />
        </>
    );
};

export default TodoList;
```

Formulario.jsx

```jsx
const Formulario = ({ addTodo }) => {

// handleSubmit
// agregar todo
addTodo({
    nombre: todo.nombre,
    descripcion: todo.descripcion,
    estado: todo.estado === "pendiente" ? false : true,
    prioridad: todo.prioridad,
    id: Date.now(),
});
```

## Leer Todos

TodoList.jsx

```jsx
import { useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((old) => [...old, todo]);
    };
    return (
        <>
            <Formulario addTodo={addTodo} />
            <h2>TodoList</h2>
            <ul className="list-group list-group-numbered">
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
```

## Todo.jsx

Todo.jsx

```jsx
const Todo = ({ todo }) => {
    const { nombre, descripcion, estado, prioridad } = todo;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1">
                        Eliminar
                    </button>
                    <button className="btn btn-sm btn-warning me-1">
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "prioritario"}
            </span>
        </li>
    );
};

export default Todo;
```

## Delete Todo

TodoList.jsx

```jsx
const deleteTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
};
return (
    <>
        <Formulario addTodo={addTodo} />
        <h2>TodoList</h2>
        <ul className="list-group list-group-numbered">
            {todos.map((item) => (
                <Todo key={item.id} todo={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
    </>
);
```

Todo.jsx

```jsx
const Todo = ({ todo, deleteTodo }) => {
    const { id, nombre, descripcion, estado, prioridad } = todo;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => deleteTodo(id)}
                    >
                        Eliminar
                    </button>
                    <button className="btn btn-sm btn-warning me-1">
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "prioritario"}
            </span>
        </li>
    );
};

export default Todo;
```

## Upadate Todo

TodoList.jsx

```jsx
const editarTodo = (id) => {
    const editTodo = todos.map((item) =>
        item.id === id ? { ...item, estado: !item.estado } : item
    );
    setTodos(editTodo);
};

<Todo
    key={item.id}
    todo={item}
    deleteTodo={deleteTodo}
    editarTodo={editarTodo}
/>;
```

Todo.jsx

```jsx
<button className="btn btn-sm btn-warning me-1" onClick={() => editarTodo(id)}>
    Editar
</button>
```

## Custom Hook

hooks/useFormulario.js

```js
import { useState } from "react";

export const useFormulario = (initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initialState);
    };

    return [inputs, handleChange, reset];
};
```

Formulario.jsx

```jsx
import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ addTodo }) => {
    const initialState = {
        nombre: "todo 1",
        descripcion: "des todo",
        estado: "pendiente",
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }
        if (!descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción ogligatoria",
                icon: "error",
            });
        }

        // Agregar todo
        addTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: Date.now(),
        });

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form
        reset();
    };

    return (
        <>
            <h3>Formulario</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <textarea
                    type="text"
                    placeholder="ingrese descripción"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                    className="form-control mb-2"
                />
                <select
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    className="form-control mb-2"
                >
                    <option value="pendiente">pendiente</option>
                    <option value="finalizado">finalizado</option>
                </select>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={prioridad}
                        onChange={handleChange}
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Formulario;
```

## LocalStorage

TodoList.jsx

```jsx
useEffect(() => {
    console.log("Leer todos local");
    if (localStorage.getItem("todos")) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }
}, []);

useEffect(() => {
    console.log("Guardar todo local");
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

## Deploy

-   [netlify](https://www.netlify.com/)

```
npm run build
```
