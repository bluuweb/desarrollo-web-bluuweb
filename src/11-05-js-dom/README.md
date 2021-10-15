# Javascript (DOM)

- El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML.
- Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.
- **Una página web es un documento**. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML.
- [fuente](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)

:::danger
nacho coloca una imagen del árbol dom y explicalo
:::

## document
- [document](https://developer.mozilla.org/es/docs/Web/API/Document) La interfaz Document representa cualquer página web cargada en el navegador y sirve como punto de entrada al contenido de la página (El árbol DOM). 

```js
console.log(document);
```

[Algunas propiedades:](https://developer.mozilla.org/es/docs/Web/API/Document#properties)
```js
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);
```

[Algunos métodos:](https://developer.mozilla.org/es/docs/Web/API/Document#methods)
- Document.getElementsByClassName(String className)
- Document.getElementsByTagName(String tagName)
- Document.getElementById(String id)
- Document.querySelector(String selector)
- Document.querySelectorAll(String selector)
- Document.createDocumentFragment()
- Document.createElement(String name)

## getElementById
- [getElementById](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById): Devuelve una referencia al elemento por su ID.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1 id="tituloWeb">Lorem, ipsum dolor.</h1>

    <script src="app.js"></script>
</body>

</html>
```

```js
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
console.log(document.getElementById("tituloWeb").innerHTML);
```

## ¿qué pasa en este caso?
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script> <!-- Qué pasará?? -->
</head>
```

## script, DOMContentLoaded, defer

- [DOMContentLoaded](https://es.javascript.info/onload-ondomcontentloaded): el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como ``<img>`` y hojas de estilo aún no se hayan cargado.

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector("h1"));
});
```

- [defer](https://es.javascript.info/script-async-defer): El atributo defer indica al navegador que no espere por el script. En lugar de ello, debe seguir procesando el HTML, construir el DOM. El script carga “en segundo plano” y se ejecuta cuando el DOM esta completo.
- Los scripts con defer siempre se ejecutan **cuando el DOM esta listo** (pero antes del evento DOMContentLoaded).
- defer no funciona igual en todos los navegadores.

```html{6}
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js" defer></script>
</head>
```

## querySelector
- [querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector): Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.

```html
<h1 class="text-primary" id="tituloWeb">Lorem, ipsum dolor.</h1>
```

```js
console.log(document.querySelector("h1"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("#tituloWeb"));
```

Otro ejemplo:
```js
<div class="container">
    <p class="text-danger">Lorem, ipsum dolor.</p>
    <p class="text-danger">Lorem, ipsum dolor.</p>
    <p class="text-danger">Lorem, ipsum dolor.</p>
</div>

<p class="text-danger">parrafo volando</p>
```

```js
// El primer elemento que encuentre
console.log(document.querySelector(".text-danger"));

// Todos
console.log(document.querySelectorAll(".text-danger"));

// Todo lo que esté en "container"
console.log(document.querySelectorAll(".container .text-danger"));
```

## querySelector vs getElementById
- El método querySelector le permite recuperar un elemento mediante una consulta de selector de CSS
- El método getElementById recupera un elemento por su ID DOM.
- Ambos métodos tienen una amplia compatibilidad con los navegadores. Debe optar por usar el método querySelector si necesita seleccionar elementos usando reglas más complejas que se representan fácilmente usando un selector CSS. Si desea seleccionar un elemento por su ID, usar getElementById es una buena opción.
- [fuente](https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/)
- A menudo necesitará realizar selecciones más complejas en su HTML, y ahí es donde querySelector puede ser más útil; usarlo de manera constante también puede hacer que su código sea más fácil de leer para otros codificadores.
- En otras palabras, el principal beneficio de usar querySelector o querySelectorAll es que podemos seleccionar elementos usando selectores CSS, lo que nos da **una forma uniforme de manejar la selección de elementos**, y eso lo convierte en una forma preferida de seleccionar elementos para muchos desarrolladores.
- Si usa una herramienta como Babel para admitir navegadores más antiguos, entonces puede ser irrelevante, ya que las funciones más nuevas se pueden convertir a código compatible con versiones anteriores cuando compila su script.
- 800.000 selecciones por segundo, querySelector es aprox. 6% más lento.
- [fuente](https://beamtic.com/getelementbyid-vs-queryselector)

```html
<div id="container">
    <p class="text-danger">Lorem, ipsum dolor.</p>
    <p class="text-danger">Lorem, ipsum dolor.</p>
    <p class="text-danger">Lorem, ipsum dolor.</p>
</div>

<p>parrafo volando</p>
```

```js
console.log(document.querySelectorAll("div p"));
```

## element
- [element](https://developer.mozilla.org/es/docs/Web/API/Element): eventos disponibles para los elementos HTML

Algunas propiedades:
```js
const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "nuevo texto";
h1.style.backgroundColor = "red";
h1.style.color = "white";
```

[Algunos métodos:](https://developer.mozilla.org/es/docs/Web/API/Element#m.c3.a9todos)
- addEventListener: Registra un controlador de evento para un tipo de evento específico en un elemento.
- appendChild: Inserta un nodo así como el último nodo hijo de este elemento.
- hasAttributes: Verifica si el elemento tiene o no algún atributo.

## Eventos
En JavaScript, la interacción con el usuario se consigue mediante la captura de los eventos que éste produce. Un evento es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor de un formulario, o la pulsación de un enlace).

## addEventListener
- [addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener): Registra un evento a un objeto en específico.
- **El Objeto especifico puede ser un simple elemento** en un archivo, el mismo  documento , una ventana o un  XMLHttpRequest.
- [Eventos estándar](https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar)


```js
target.addEventListener(tipo, listener);
```
- tipo:  tipo de evento a escuchar.
- listener: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz EventListener o **solo una function en JavaScript**.


## click
```html
<button id="boton">Cambiar texto</button>
<p id="parrafo">Lorem, ipsum dolor.</p>
```

```js
const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#parrafo");

boton.addEventListener("click", () => {
    parrafo.textContent = "Nuevo texto desde evento";
});
```

## Práctica:

- [Intenta hacer esto](https://color-picker-hexadecimal.netlify.app/)

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar Color</title>
    <link
      crossorigin="anonymous"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      rel="stylesheet"
    >
</head>

<body>

    <div class="container mt-5 text-center">
        <label
          class="form-label"
          for="inputColor"
        >Color picker</label>
        <input
          id="inputColor"
          class="form-control form-control-color mb-3 w-100"
          title="Seleccione un color"
          type="color"
          value="#563d7c"
        >
        <button
          id="boton"
          class="btn btn-primary w-100"
        >Visualizar</button>
    </div>
    <div class="container mt-5">

        <p
          id="textoHexa"
          class="lead text-center"
        >#563d7c</p>
        <div
          id="cardColor"
          class="card text-center p-5"
          style="background-color: #563d7c;"
        ></div>
    </div>

    <script src="app.js"></script>
</body>

</html>
```

```js
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
});
```

## bonus opcional
- Copiar color en el portapapeles:
```js
boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});
```


