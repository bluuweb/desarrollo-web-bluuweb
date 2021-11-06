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
