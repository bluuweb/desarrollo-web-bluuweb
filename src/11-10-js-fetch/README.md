# JS - Fetch

:::tip
Recuerden que estamos también en Twitch: 
[twitch.tv/bluuweb](https://www.twitch.tv/bluuweb) 👏👏
:::

- [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API): La API Fetch proporciona una interfaz para recuperar recursos.
- **Fetch es una interfaz para hacer solicitudes AJAX en JavaScript.** Es usado generalmente para hacer una solicitud a un API.
- El método ``fetch()`` toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
- [fuente #02](https://www.freecodecamp.org/espanol/news/como-usar-fetch-para-solicitudes-ajax-en-javascript/)

## Ajax
- [ajax](https://developer.mozilla.org/es/docs/Web/Guide/AJAX)
- JavaScript Asíncrono + XML (XML viejito ahora utilizamos JSON) 
- AJAX no es una tecnología por sí misma, **es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes.**
- Esto incluye: **HTML, CSS, JavaScript, DOM, JSON y lo más importante, el objeto XMLHttpRequest (XMLHttpRequest viejito ahora Fetch)**
- Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. 
- Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

## Métodos nativos para AJAX
- [XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Fetch API
- [Fetch api](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) Proporciona una interfaz JavaScript para hacer peticiones HTTP así como sus respuestas.
- También provee un método para obtener recursos de forma asíncrona por la red.
- [fetch parámetros](https://developer.mozilla.org/en-US/docs/Web/API/fetch) inicia el proceso de obtener un recurso de la red, devolviendo una promesa que se cumple una vez que la respuesta está disponible.
- Este tipo de funcionalidad se conseguía previamente haciendo uso de **XMLHttpRequest**.

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Conceptos Claves al momento de hacer una petición HTTP:
- [HTTP:](https://developer.mozilla.org/es/docs/Web/HTTP) Hypertext Transfer Protocol (HTTP) (o Protocolo de Transferencia de Hipertexto en español) es el nombre de un protocolo el cual nos permite realizar una petición de datos y recurso.
- **Ruta (PATH):** Es la dirección de donde queremos obtener los recursos.
- [Métodos Http:](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. (GET, POST, PUT, PATCH, DELETE)
- **Cabeceras (headers):** Cabeceras HTTP opcionales, que pueden aportar información adicional a los servidores.
- **Códigos de respuestas (Response Codes):** Un código de estado, indicando si la petición ha sido exitosa, o no, y debido a que. [más info](https://developer.mozilla.org/es/docs/Web/HTTP/Status) [cat http](https://http.cat/)
- [JSON:](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON) JavaScript Object Notation, es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web.

## Estructura del JSON
- Como se describió previamente, un JSON es una cadena cuyo formato recuerda al de los objetos literales JavaScript.
- Es posible incluir los mismos tipos de datos básicos dentro de un JSON que en un objeto estándar de JavaScript - cadenas, números, arreglos, booleanos, y otros literales de objeto. 
- Esto permite construir una jerarquía de datos, como ésta: [pokeapi/ditto](https://pokeapi.co/api/v2/pokemon/ditto)
- [Json Formatter Chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## Volviendo a Fetch

```js
const url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
```

- Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. 
- El uso de ``fetch()`` más simple toma un argumento (la ruta del recurso que quieres obtener) y **devuelve un objeto Promise conteniendo la respuesta**, un objeto Response.
- Esto es, por supuesto, una respuesta HTTP **sin el archivo JSON**. 
- **Para extraer el contenido en el cuerpo del JSON** desde la respuesta, usamos el método ``json()``, el cual está implementado por los objetos Request y Response.

## En profundidad
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

```js
fetch(resource [, init])
```

- resource: Esto define el recurso que desea recuperar.
- init (opcional): Un objeto que contiene cualquier configuración personalizada que desee aplicar a la solicitud. Las posibles opciones son:
    - method: El método de la petición, por ejemplo, GET, POST. Tenga en cuenta que el Originencabezado no se establece en las solicitudes Fetch con un método de HEADo GET.
    - headers: Cualquier encabezado que desee agregar a su solicitud, contenido dentro de un Headersobjeto o un objeto literal con String valores.
    - body: Cualquier cuerpo que desea agregar a su solicitud: esto puede ser una Blob, BufferSource, FormData, URLSearchParams, USVString, o ReadableStreamobjeto. Tenga en cuenta que una solicitud que utiliza el método GET no puede tener un cuerpo.
    - mode: El modo en el que desea utilizar para la solicitud, por ejemplo, cors, no-cors, o same-origin.
    - credentials: Controla lo que hacen los navegadores con las credenciales.

[Ejemplo método POST](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#suministrando_opciones_de_petici%C3%B3n)
```js
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

## Ejercicio pokeApi
- [rickandmortyapi](https://rickandmortyapi.com/documentation)
- [get character](https://rickandmortyapi.com/api/character)

```html
<!DOCTYPE html>
<html lang="en">
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

        <title>Poke API</title>
    </head>
    <body>
        <div class="container my-5">
            <section class="d-flex align-items-center" id="loading">
                <strong>Loading...</strong>
                <div
                    class="spinner-border ms-auto"
                    role="status"
                    aria-hidden="true"
                ></div>
            </section>
            <div class="row" id="card-dinamica">
                <template id="template-card">
                    <article class="col-md-6 col-lg-3 mb-3">
                        <div class="card text-center shadow">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                                alt=""
                                class="card-img-top"
                            />
                            <div class="card-body">
                                <h5 class="card-title text-primary lead">
                                    Rick Sanchez
                                </h5>
                                <p class="lead text-secondary">Human</p>
                            </div>
                        </div>
                    </article>
                </template>
            </div>
        </div>

        <script src="app.js"></script>
    </body>
</html>
```

```js
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const cards = document.querySelector("#card-dinamica");
const templateCard = document.querySelector("#template-card").content;

const fetchData = async () => {
    try {
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        pintarDatos(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const loadingData = (estado) => {
    const loading = document.querySelector("#loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};

const pintarDatos = (data) => {
    const fragment = document.createDocumentFragment();

    cards.textContent = "";

    data.results.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};
```


