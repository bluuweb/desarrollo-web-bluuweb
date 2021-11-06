const pintarEstudiante = document.querySelector("#pintarEstudiante");
const pintarProfesor = document.querySelector("#pintarProfesor");
const templateEstudiante = document.querySelector("#templateEstudiante")
    .content;
const templateProfesor = document.querySelector("#templateProfesor").content;

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

export { Persona, Estudiante, Profesor };
