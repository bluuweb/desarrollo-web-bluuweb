import { Persona, Estudiante, Profesor } from "./persona.js";

const estudiantes = [];

document.addEventListener("click", (e) => {
    if (e.target.dataset.nombre) {
        console.log(e.target.dataset.nombre);
        if (e.target.matches(".btn-success")) {
            estudiantes.map((item) => {
                if (item.nombre === e.target.dataset.nombre) {
                    item.estado = true;
                    console.log(item);
                }
                return item;
            });
            Persona.pintarPersonaUI(estudiantes, "Estudiantes");
        }
        if (e.target.matches(".btn-danger")) {
            estudiantes.map((item) => {
                if (item.nombre === e.target.dataset.nombre) {
                    item.estado = false;
                    console.log(item);
                }
                return item;
            });
            Persona.pintarPersonaUI(estudiantes, "Estudiantes");
        }
    }
});

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = new FormData(formulario);
    const [nombre, edad, opcion] = [...datos.values()];

    // console.log(nombre, edad, opcion);
    if (opcion === "Estudiante") {
        const estudiante = new Estudiante(nombre, edad);
        console.log(estudiante);
        estudiante.agregarNuevoEstudiante();
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes, "Estudiantes");
    }
    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre, edad);
        console.log(profesor);
        profesor.agregarNuevoProfesor();
    }
});
