# JS POO

:::tip 驴Quieres apoyar los directos? 馃槏
Tienes varias jugosas alternativas:
1. [Suscr铆bete al canal de Youtube (es gratis) click aqu铆](https://bit.ly/3kLYAqr)
2. Si est谩s viendo un video no olvides regalar un 馃憤 like y comentario 馃檹馃徏
3. Tambi茅n puedes ser miembro del canal de Youtube [click aqu铆](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
6. Puedes adquirir cursos premium en Udemy 馃憞馃徏馃憞馃徏馃憞馃徏
驴Qui茅res apoyar los directos?
    - [Curso de HTML + CSS + Bootstrap 5 + Git y m谩s UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl)
    - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl)
    - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
:::

La programaci贸n orientada a objetos es un **paradigma de la programaci贸n** en el que se crean objetos para la manipulac贸n de datos y donde, por lo general, cada objeto ofrece una funcionalidad especial.

- JavaScript no es un lenguaje orientado a objetos basado en clases. Pero tiene formas de usar la programaci贸n orientada a objetos (POO).
- JavaScript es un lenguaje basado en <b>prototipos</b>.

## 驴Que es POO?
- [POO en JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- Es un **paradigma de la programaci贸n** en el que se crean objetos para la manipulac贸n de datos y donde, por lo general, cada objeto ofrece una funcionalidad especial.
- La idea b谩sica de la POO es que **usamos objetos** para modelar cosas del mundo real.
- POO nos ayuda a la reutilizaci贸n del c贸digo.

## Ejemplo Te贸rico
- Vamos a considerar un sencillo programa que muestra **informaci贸n sobre estudiantes y profesores** en una escuela.
- Aqu铆 daremos un vistazo a la POO (Programaci贸n Orientada a Objetos) en general, no en el contexto de alg煤n lenguaje de programaci贸n espec铆fico.

:::tip
Imagina que tienes un colegio o escuela con 1000 estudiantes y 100 profesores, ser铆a il贸gico estar construyendo objetos literales para cada uno de ellos:

```js
const estudiantoUno = {
    nombre: 'Juanito',
    uid: "e-0001",
    intereses: ["M煤sica", "F煤tbol"],
    saludar(){
        return `${this.nombre} dice hola!`
    }
}
```
:::

### Paso 1 (Plantilla o Clase):
Objeto "Persona": (que define los datos generales y funcionalidades de una persona)
- datos generales (propiedades): nombre, edad, g茅nero e intereses
- funcionalidades (m茅todos): que sea capaz de saludar. 

Esto es conocido como **abstracci贸n** 鈥?  **crear un modelo simple** de algo complejo que represente sus aspectos m谩s importantes y que sea f谩cil de manipular para el prop贸sito de nuestro programa.

<div class="text-center">
    <img :src="$withBase('/img/person-diagram.png')" alt="abrir snippet vscode">
</div>
<!-- ![person class](https://mdn.mozillademos.org/files/13889/person-diagram.png) -->

:::tip
- En algunos lenguajes de POO, **esta definici贸n de tipo de objeto se la llama class** (JavaScript utiliza diferentes mecanismos y terminolog铆as, como ver谩s a continuaci贸n)
- **Esto no es en realidad un objeto**, es un modelo (o plantilla) que define las caracter铆sticas que un objeto deber铆a tener.
:::

### Paso 2 (Creando objetos)
Partiendo de nuestra clase, **podemos crear instancias de objetos** 鈥? objetos que contienen los datos y funcionalidades definidas en la clase original. **Teniendo a nuestra clase Persona, ahora podemos crear gente** con caracter铆sticas m谩s espec铆ficas: 

<div class="text-center">
    <img :src="$withBase('/img/MDN-Graphics-instantiation-2-fixed.png')" alt="abrir snippet vscode">
</div>
<!-- ![intancia de persona](https://mdn.mozillademos.org/files/15163/MDN-Graphics-instantiation-2-fixed.png) -->

:::tip
- Cuando una instancia del objeto es creada a partir de una clase, **se ejecuta la funci贸n constructora**. 
- El proceso de crear una instancia del objeto desde una clase se llama **instanciaci贸n**.
:::

### Paso 3 (Clases especializadas - Heredar)
- En este caso nosotros no queremos personas gen茅ricas 鈥? queremos docentes y estudiantes, que son los dos tipos m谩s espec铆ficos de personas. 
- **En POO, podemos crear nuevas clases basadas en otras clases**, estas nuevas clases secundarias **se pueden hacer para heredar los datos y c贸digo de su clase primaria**, de modo que pueden reutilizar la funcionalidad com煤n a todos los tipos de objetos en lugar de tener que duplicarla. 
- Cuando la funcionalidad difiere entre clases, puedes definir funciones especializadas directamente en ellas seg煤n sea necesario.

<div class="text-center">
    <img :src="$withBase('/img/MDN-Graphics-inherited-3.png')" alt="abrir snippet vscode">
</div>
<!-- ![heredar class](https://mdn.mozillademos.org/files/13881/MDN-Graphics-inherited-3.png) -->

Ejemplo de instancia de varios Profesores o docentes a partir de su clase:
<div class="text-center">
    <img :src="$withBase('/img/MDN-Graphics-instantiation-teacher-3.png')" alt="abrir snippet vscode">
</div>
<!-- ![instanciar profesor](https://mdn.mozillademos.org/files/13885/MDN-Graphics-instantiation-teacher-3.png) -->

### 驴c贸mo se implementa en JS?
- JavaScript, **utiliza funciones especiales llamadas funciones constructoras** para definir objetos y sus caracter铆sticas. 
- Los constructores proporcionan los medios para crear tantos objetos como necesites de una manera efectiva, adjuntando datos y funciones a ellos seg煤n sea necesario.
- Cuando se crea una nueva instancia del objeto a partir de una funci贸n constructora, su funcionalidad central no se copia en el nuevo objeto como lenguajes OO "cl谩sicos", sino que la funcionalidad est谩 vinculada a trav茅s de una cadena de referencia **llamada cadena de prototipos.**
- As铆 que esto no es una verdadera instanciaci贸n, estrictamente hablando, JavaScript usa un mecanismo diferente para compartir funcionalidad entre objetos.

:::tip
**No ser "POO cl谩sica" no es necesariamente algo malo**; la POO puede ser muy compleja r谩pidamente, y JavaScript tiene algunas agradables formas de aprovechar las caracter铆sticas de la OO sin tener que profundizar demasiado en ello.
:::

## Funciones constructoras

```js
function Persona(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

const personaUno = new Persona("Ignacio");
const personaDos = new Persona("Nacho");

console.log(personaUno); // devuelve un objeto 馃槻
console.log(personaDos); // devuelve un objeto 馃槻

console.log(personaUno.nombre);
console.log(personaUno.saludar());
```

- La funci贸n constructora es la versi贸n de JavaScript de una clase. 
- **M谩s adelante veremos que si se puede utilizar ``class``**
- Tiene todas las caracter铆sticas que esperas en una funci贸n, aunque no devuelve nada.
- B谩sicamente s贸lo define propiedades y m茅todos.
- ``this`` es b谩sicamente decir que cuando se crea una de estas instancias de objeto, la propiedad "nombre" del objeto ser谩 igual al valor del nombre pasado a la llamada del constructor, y el m茅todo ``saludar()`` usar谩 tambi茅n el valor del nombre pasado a la llamada del constructor.
- **``new`` se usa para indicarle al navegador que queremos crear una nueva instancia del objeto**, seguida del nombre de la funci贸n con sus par谩metros requeridos entre par茅ntesis, y el resultado se almacena en una variable.

:::tip
Un nombre de funci贸n constructora generalmente **comienza con una letra may煤scula** 鈥? esta convenci贸n se utiliza para hacer que las funciones constructoras sean m谩s f谩ciles de reconocer en el c贸digo.
:::

:::tip Otra forma de crear instancias de objetos
- Puedes usar el constructor ``Object() ``para crear un nuevo objeto.
- Esta es otra forma de crear instancias de objetos.

```js
const personaUno = new Object();
personaUno.nombre = "Ignacio";
personaUno.saludar = function() {
    return `${this.nombre} dice hola!`;
};

console.log(personaUno);
console.log(personaUno.nombre);
console.log(personaUno.saludar());
```
:::

## Prototipos de objetos
- [Object prototypes](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes): Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan caracter铆sticas entre s铆.
- En este art铆culo, explicaremos como funcionan los prototipos y tambi茅n c贸mo se pueden usar las propiedades de estos para a帽adir m茅todos a los contructores existentes.

## 驴Un lenguaje basado en prototipos?
- JavaScript es a menudo descrito como un lenguaje basado en prototipos - para proporcionar **mecanismos de herencia**, los objetos pueden tener un objeto prototipo, el cual act煤a como un objeto plantilla que hereda m茅todos y propiedades.
- Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda m茅todos y propiedades, y as铆 sucesivamente. Esto es conocido con frecuencia como la cadena de prototipos, y **explica por qu茅 objetos diferentes pueden tener disponibles propiedades y m茅todos definidos en otros objetos.**
- **Para ser exactos, los m茅todos y propiedades son definidos en la propiedad prototype, que reside en la funci贸n constructora del objeto, no en la instancia misma del objeto.**
- En JavaScript, se establece un enlace entre la instancia del objeto y su prototipo (su propiedad ``__proto__``, la cual es derivada de la propiedad prototype sobre el constructor), **y las propiedades y metodos son encontrados recorriendo la cadena de prototipos.**

## Entendiendo objectos prototipos
```js
function Persona(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

const personaUno = new Persona("Ignacio");
```
<div class="text-center">
    <img :src="$withBase('/img/proto1.png')" alt="abrir snippet vscode">
</div>

- En esta lista, podra ver los miembros definidos en el objeto prototipo de personaUno, que es la Persona() 
- (Persona() es el constructor) - nombre, saludar.
- Sin embargo, tambi茅n ver谩 algunos otros miembros - watch, valueOf, etc
- Que est谩n definidos en el objeto prototipo de Persona(), que es un Objeto (Object). 
- Esto demuestra que el prototipo cadena funciona.

<div class="text-center">
    <img :src="$withBase('/img/MDN-Graphics-person-person-object-2.png')" alt="abrir snippet vscode">
</div>
<!-- ![cadena prototipo](https://mdn.mozillademos.org/files/13891/MDN-Graphics-person-person-object-2.png) -->

Intenta hacer lo mismo con un array:
<div class="text-center">
    <img :src="$withBase('/img/array.png')" alt="abrir snippet vscode">
</div>

:::tip
Reiteremos que **los m茅todos y propiedades no se copian de un objeto a otro** en la cadena del prototipo. Ellos son accedidos subiendo por la cadena como se ha descrito anteriormente.
:::

## Modificando prototipos
Supongamos que nuestro contructor es el siguiente:

```js
function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function() {
        return `${this.nombre} dice hola!`;
    };

    this.saludarIngles = function() {
        return `${this.nombre} says hi!`;
    };
}

const personaUno = new Persona("Ignacio");
console.log(personaUno.saludarIngles());
```

<div class="text-center">
    <img :src="$withBase('/img/proto2.png')" alt="abrir snippet vscode">
</div>

- saludarIngles quiz谩s no es una habilidad de todos las personas, por ende, no ser铆a optimo estar instanciando cada persona con un m茅todo que quiz谩s nunca utilizaremos.
- Para uno o dos objetos no es un problema, pero 驴si fueran 1000 objetos?
- En estos casos podemos crear un prototipo para Persona:

```js
function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
};

const personaUno = new Persona("Ignacio");
console.log(personaUno.saludarIngles());
```

- En este ejemplo personaUno est谩 heredando un prototipo, **lo cual no significa que se copia**, sino que al momento de llamarlo, JS busca entre los prototipos y de existir lo llama. (recuerda el ejemplo del array, nosotros no definimos los m茅todos push, slice, etc... sino que al momento de llamarlos estos son buscados en la cadena de prototipos)
- Esto es realmente 煤til, pero lo que es m谩s 煤til es que toda la cadena de herencia se ha actualizado din谩micamente.
- Autom谩ticamente hace que este nuevo m茅todo est茅 disponible en todas las instancias del objeto creadas desde el constructor.

:::tip
Raramente ver谩s propiedades definidas en la propiedad prototype, no son muy flexibles cuando son definidas de esta forma.
:::

## class
- [class](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sint谩ctica sobre la herencia basada en prototipos de JavaScript. 
- La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. 
- Las clases de JavaScript proveen una sintaxis mucho m谩s clara y simple para crear objetos y lidiar con la herencia.

```js
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        // Alunos prefieren est谩 convenci贸n
        // para que no choque con los getter
        // o para definir una propiedad privada (no queda privada)
        // this._nombre = nombre 
    }

    // M茅todo pero se crea un prototype
    saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

// Revisa esto y ver谩s que est谩n al mismo nivel que los m茅todos:
Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
};

const personaUno = new Persona("Ignacio");

console.log(personaUno.saludarIngles());
```

## get y setter
- [edteam](https://ed.team/comunidad/como-hago-la-encapsulacion-en-javascript): El encapsulamiento simplemente encapsula las propiedades de un objeto para que no sean accesibles de manera publica y si deseas acceder a ellos externamente tendr谩s que usar metodos get y set (los cuales se definen con anterioridad)
- Los `get` no reciben par谩metros.
- Los `set` pueden recibir solo un par谩metro.
- Los `set` y `get` se llaman sin los par茅ntesis ``()``

Esto no ser铆a una buena pr谩ctica:
```js
const personaUno = new Persona("Ignacio");

personaUno.nombre = "Juanito";
console.log(personaUno.nombre);
```

```js
class Persona {
    constructor(nombre, libros) {
        this.nombre = nombre;
        this.libros = libros || [];
    }

    // setter
    set setLibro(libro) {
        this.libros.push(libro);
    }

    // getter
    get getLibros() {
        return this.libros;
    }

    // m茅todo
    buscarLibroPorTitulo(titulo) {
        return this.libros.find((item) => item.titulo === titulo);
    }
}

const personaUno = new Persona("Ignacio");
personaUno.setLibro = { titulo: "Papelucho", autor: "Marcela Paz" };
personaUno.setLibro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exup茅ry",
};

console.log(personaUno.buscarLibroPorTitulo("Papelucho"));

console.log(personaUno.getLibros);
```

## Static
- [static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#m%C3%A9todos_est%C3%A1ticos) La palabra clave static define un m茅todo est谩tico para una clase.
- Los m茅todos est谩ticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase. 
- Los m茅todos est谩ticos son a menudo usados para crear funciones de utilidad para una aplicaci贸n.

```js
class Persona {

    static probarSaludo(nombre) {
        return `${nombre} est谩 saludando`;
    }
}

console.log(Persona.probarSaludo("juanito"));
```

## Heredar
- [extends](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#subclases_con_extends): La palabra clave extends es usada en declaraciones de clase o expresiones de clase para crear una clase hija.

```js
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `${this.nombre} est谩 saludando`;
    }

    static probarSaludo(nombre) {
        return `${nombre} est谩 saludando`;
    }
}


class Estudiante extends Persona {

}
const juanito = new Estudiante("juanito", 55);
console.log(juanito);
```

Si un m茅todo tiene el mismo nombre se sobrescribe:
```js
class Estudiante extends Persona {
    saludar() {
        return `${this.nombre} es un estudiante saludando`;
    }
}
const juanito = new Estudiante("juanito", 55);
console.log(juanito.saludar());
```

## Super
- [super](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes#llamadas_a_s%C3%BAperclases_con_super)

```js
class Estudiante extends Persona {
    constructor(nombre, edad, notas = []) {
        super(nombre, edad);
        this.notas = notas;
    }

    set setNotas(nota) {
        this.notas.push(nota);
    }

    get getNotas() {
        return this.notas;
    }

    saludar() {
        return `${this.nombre} es un estudiante saludando`;
    }
}

const juanito = new Estudiante("juanito", 55);

juanito.setNotas = 3;
juanito.setNotas = 5;
juanito.setNotas = 7;

console.log(juanito.getNotas);
```

Tambi茅n se puede llamar a un m茅todo de Persona:
```js
saludarPersona() {
    return super.saludar();
}
```

## Private class fields
- [Private class fields](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- Las propiedades de la clase son p煤blicas de forma predeterminada y se pueden examinar o modificar fuera de la clase. 
- Sin embargo, existe una propuesta experimental  para permitir la definici贸n de campos de clase privados utilizando un #prefijo hash .
- [caniuse.com](https://caniuse.com/?search=private%20fields)

```js
class Estudiante extends Persona {
    #notas = [];

    set setNotas(nota) {
        this.#notas.push(nota);
    }

    get getNotas() {
        return this.#notas;
    }
}

const juanito = new Estudiante("juanito", 55);

// Error: Private field '#notas'
console.log(juanito.#notas);

juanito.setNotas = 3;
juanito.setNotas = 5;
juanito.setNotas = 7;

console.log(juanito.getNotas);
```

## MegaPractica Class
- [Ejemplo Final](https://poo-javacript-class.netlify.app/)

```html
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

        <title>Hello, world!</title>
    </head>
    <body>
        <div class="container my-5">
            <h1>Estudiantes y Profesores</h1>

            <!-- alerta en caso de falla -->
            <div class="alert alert-danger my-2 d-none" role="alert">
                Todos los campos son obligatorios
            </div>

            <form id="formulario">
                <input
                    class="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese nombre"
                    type="text"
                    value="Juanito"
                    required
                />
                <input
                    class="form-control mb-2"
                    name="edad"
                    placeholder="Ingrese nombre"
                    type="number"
                    value="25"
                    required
                />

                <select class="form-select mb-2" name="opcion">
                    <option value="Estudiante" selected>Estudiante</option>
                    <option value="Profesor">Profesor</option>
                </select>

                <button class="btn btn-primary" type="submit">Agregar</button>
            </form>

            <section class="row mt-3">
                <div class="col-6" id="cardsEstudiantes"></div>
                <div class="col-6" id="cardsProfesores"></div>
            </section>
        </div>

        <template id="templateEstudiante">
            <article class="card mb-2">
                <div class="card-body">
                    <h5>
                        <span class="text-primary">Nombre</span>
                        <span class="badge bg-success">Aprobado</span>
                    </h5>
                    <h6></h6>
                    <p class="lead">edad</p>
                    <button class="btn btn-success">Aprobar</button>
                    <button class="btn btn-danger">Reprobar</button>
                </div>
            </article>
        </template>

        <template id="templateProfesor">
            <article class="card mb-2 bg-dark text-white">
                <div class="card-body">
                    <h5>nombre</h5>
                    <h6></h6>
                    <p class="lead">Edad</p>
                </div>
            </article>
        </template>

        <script src="app.js"></script>
    </body>
</html>
```

```js
const formulario = document.querySelector("#formulario");
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");
const templateEstudiante = document.querySelector(
    "#templateEstudiante"
).content;
const templateProfesor = document.querySelector("#templateProfesor").content;
const alert = document.querySelector(".alert");

const estudiantes = [];
const profesores = [];

document.addEventListener("click", (e) => {
    // preguntamos por uid
    if (e.target.dataset.uid) {
        if (e.target.matches(".btn-success")) {
            estudiantes.map((item) => {
                // modificamos en caso de que sea true
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = true;
                }
                // console.log(item);
                return item;
            });
        }
        if (e.target.matches(".btn-danger")) {
            estudiantes.map((item) => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = false;
                }
                console.log(item);
                return item;
            });
        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante");
    }
});

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        // agregamos uid
        this.uid = `${Date.now()}`;
    }

    static pintarPersonaUI(personas, tipo) {
        if (tipo === "Estudiante") {
            cardsEstudiantes.textContent = "";
            const fragment = document.createDocumentFragment();

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });

            cardsEstudiantes.appendChild(fragment);
        }

        if (tipo === "Profesor") {
            cardsProfesores.textContent = "";
            const fragment = document.createDocumentFragment();
            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });
            cardsProfesores.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona {
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado) {
        this.#estado = estado;
    }

    get getEstudiante() {
        return this.#estudiante;
    }

    agregarNuevoEstudiante() {
        const clone = templateEstudiante.cloneNode(true);

        clone.querySelector("h5 .text-primary").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.getEstudiante;
        clone.querySelector(".lead").textContent = this.edad;

        if (this.#estado) {
            clone.querySelector(".badge").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
        } else {
            clone.querySelector(".badge").className = "badge bg-danger";
            clone.querySelector(".btn-danger").disabled = true;
            clone.querySelector(".btn-success").disabled = false;
        }
        clone.querySelector(".badge").textContent = this.#estado
            ? "Aprobado"
            : "Reprobado";

        // reemplaze por uid
        clone.querySelector(".btn-success").dataset.uid = this.uid;
        clone.querySelector(".btn-danger").dataset.uid = this.uid;

        return clone;
    }
}

class Profesor extends Persona {
    #profesor = "Profesor";

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.#profesor;
        clone.querySelector(".lead").textContent = this.edad;
        return clone;
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alert.classList.add("d-none");

    const datos = new FormData(formulario);

    const [nombre, edad, opcion] = [...datos.values()];

    // validaci贸n de campos vac铆os
    if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
        console.log("Elemento vac铆o");
        alert.classList.remove("d-none");
        return;
    }

    if (opcion === "Estudiante") {
        const estudiante = new Estudiante(nombre, edad);
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes, opcion);
    }

    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores, opcion);
    }
});
```