const pintarEstudiante = document.querySelector("#pintarEstudiante");
const pintarProfesor = document.querySelector("#pintarProfesor");
const templateEstudiante = document.querySelector("#templateEstudiante")
    .content;
const templateProfesor = document.querySelector("#templateProfesor").content;

const estudiantes = [];
const profesores = [];

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

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
    }

    static pintarPersonaUI(personas, tipo) {
        if (tipo === "Estudiantes") {
            pintarEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });
            pintarEstudiante.appendChild(fragment);
        }
        if (tipo === "Profesores") {
            pintarProfesor.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });
            pintarProfesor.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona {
    #estudiante = "Estudiante";
    #estado = false;

    set estado(estado) {
        this.#estado = estado;
    }

    agregarNuevoEstudiante() {
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector("h5 .text-primary").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#estudiante;
        clone.querySelector("p").textContent = this.edad + " años";

        if (this.#estado) {
            clone.querySelector(".badge").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
        } else {
            clone.querySelector(".badge").className = "badge bg-danger";
            clone.querySelector(".btn-success").disabled = false;
            clone.querySelector(".btn-danger").disabled = true;
        }
        clone.querySelector(".badge").textContent = this.#estado
            ? "Aprobado"
            : "Reprobado";

        clone.querySelector(".btn-success").dataset.nombre = this.nombre;
        clone.querySelector(".btn-danger").dataset.nombre = this.nombre;

        return clone;
    }
}

class Profesor extends Persona {
    #profesor = "Profesor";

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#profesor;
        clone.querySelector("p").textContent = this.edad + " años";
        pintarProfesor.appendChild(clone);
    }
}

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

// const juanito = new Estudiante("juanito", 55);

// console.log(juanito.#notas);
// juanito.setNotas = 3;
// juanito.setNotas = 5;
// juanito.setNotas = 7;

// console.log(juanito.getNotas);

// function Persona(nombre) {
//     this.nombre = nombre;

//     this.saludar = function() {
//         return `${this.nombre} dice hola!`;
//     };

//     this.saludarIngles = function() {
//         return `${this.nombre} says hi!`;
//     };
// }

// const personaUno = new Persona("Ignacio");
// console.log(personaUno);
