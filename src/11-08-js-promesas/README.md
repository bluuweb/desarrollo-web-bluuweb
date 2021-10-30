# Javascript (Promesas, Async, Await)

El objetivo de esta sección es entender el uso de:
- Callbacks
- Promesas
- Try Catch
- Async Await
- Introducción a Fetch API
- ¿Que es una API?

## Callbacks
- [Callback](https://developer.mozilla.org/es/docs/Glossary/Callback_function): Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
- Cada vez se ocupan menos.
- Pasar una función como argumento.

```js
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
];
```

```js
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);

    callback(post);
};

findPostById(1, (post) => {
    console.log(post);
});
```

### Errores
```js
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);

    if (post) {
        // mandamos el null ya que no existen errores
        callback(null, post);
    } else {
        // en caso de que no exista el post
        callback("No encontrado por id: " + id);
    }
};

// ser recibe el err como primer argumento
findPostById(4, (err, post) => {
    if (err) {
        return console.log(err);
    }
    console.log(post);
});
```

## Callback Hell

<div class="text-center">
    <img :src="$withBase('/img/hell.jpg')" alt="abrir snippet vscode">
</div>

```js
findPostById(1, (err, post) => {
    if (err) {
        return console.log(err);
    }

    findPostById(2, (err, post2) => {
        if (err) {
            return console.log(err);
        }
        console.log(post.title, post2.title);
    });
});
```

## Promesas
- [promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises): Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona. 

<div class="text-center">
    <img :src="$withBase('/img/promesa.gif')" alt="abrir snippet vscode">
</div>

```js
const findPostById = (id) => {
    const post = posts.find((item) => item.id === id);

    // devolver la promesa
    return new Promise((resolve, reject) => {
        //resolve
        if (post) {
            resolve(post);
        } else {
            reject("No encontrado por id: " + id);
        }
    });
};

findPostById(1)
    .then((post) => console.log(post))
    .catch((err) => console.log(err))
    .finally(() => console.log("fin de la promesa"));
```

Ahorrando teclas:
```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        const post = posts.find((item) => item.id === id);

        post ? resolve(post) : reject("No encontrado por id: " + id);
    });

findPostById(4)
    .then((post) => console.log(post))
    .catch((e) => console.log(e));
```

## hell
```js
findPostById(1)
    .then((post) => {
        console.log(post.title);
        return findPostById(2);
    })
    .then((post) => {
        console.log(post.title);
        return findPostById(3);
    })
    .then((post) => {
        console.log(post.title);
        return findPostById(4);
    })
    .then((post) => console.log(post.title))
    .catch((e) => console.log(e));
```

<!-- ## async await
- [async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function): La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction. -->

<!-- ```js
const findPostById = async (id) => {
    const post = posts.find((item) => item.id === id);

    // resolve(post) = return
    if (post) return post;

    // reject
    // throw: lanza una excepcion definida por el usuario.
    throw "No encontrado por id: " + id;
};

findPostById(4)
    .then((post) => console.log(post))
    .catch((e) => console.log(e));
``` -->

## async await
- [async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function): La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction.
- [await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await): El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.

```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
            post ? resolve(post) : reject("No encontrado por id: " + id);
        }, 2000);
    });

findPostById(1)
    .then((post) => console.log(post))
    .catch((e) => console.log(e));

console.log("Fin de todo");
```

```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
            post ? resolve(post) : reject("No encontrado por id: " + id);
        }, 2000);
    });

const buscar = async () => {
    const post = await findPostById(1);
    console.log(post);
};

buscar();
```

try catch
```js
const findPostById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id);
            post ? resolve(post) : reject("No encontrado por id: " + id);
        }, 2000);
    });

const buscar = async () => {
    try {
        const post = await findPostById(4);
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

buscar();
```

Múltiples solicitudes:
```js
const buscar = async () => {
    try {
        const postUno = await findPostById(1);
        const postDos = await findPostById(2);

        // se está demorando 4 segundos ??
        console.log(postUno.title, postDos.title);
    } catch (error) {
        console.log(error);
    }
};

buscar();
```

### Promise.all
```js
const buscar = async () => {
    try {
        // solo en el caso que no dependan una de la otra
        const rePosts = await Promise.all([findPostById(1), findPostById(2)]);

        // console.log(rePosts);
        console.log(rePosts[0].title, rePosts[1].title);
    } catch (error) {
        console.log(error);
    }
};

buscar();
```

## fetch API

:::tip
Hoy solo veremos una **introducción** para entender el uso de las promesas, async y await.
:::

- [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API): La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
- El método ``fetch()`` toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar.
- Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta.
- Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.
- [jsonplaceholder](https://jsonplaceholder.typicode.com/)
- [post 1](https://jsonplaceholder.typicode.com/posts/1)

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res));
```

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
```

```js
const findPostById = async (id) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = await res.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostById(1);
```

```js
const findPostById = async (id) => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + id
        );
        const post = await res.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
};

findPostById(50);
```

## ¿Qué son las APIs?
- [api](https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction): Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés)

API **son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple.** Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

Si quisieras programar gráficos 3D, sería mucho más facil hacerlo usando una API escrita en un lenguaje de alto nivel como JavaScript o Python, en lugar de intentar escribir código de bajo nivel (por ejemplo: C o C++) que controle directamente la GPU del equipo u otras funciones gráficas.

## APIs en JavaScript del lado cliente
JavaScript del lado cliente, particularmente, tiene muchas APIs disponibles — estas no son parte del lenguaje en sí, sino que están construidas sobre el núcleo de este lenguaje de programación, proporcionándote superpoderes adicionales para usar en tu código. Por lo general, se dividen en dos categorías:

- **Las APIs de navegador:** están integradas en tu navegador web, Por ejemplo, l**a API de Geolocalización** proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. **Realmente, el navegador está haciendo uso de códigos de bajo nivel complejos en segundo plano (por ejemplo, C++) para comunicarse con el hardware GPS del dispositivo** (o lo que esté disponible para determinar los datos de posición), recuperar datos de posición y devolverlos al entorno del navegador para su uso en tu código. Pero una vez más, la API se encarga de abstraer esta complejidad.
- **Las APIs de terceros:** no están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus últimos tweets en un sitio web.

## APIs de navegador más comunes
- APIs para manipular documentos cargados en el navegador. El ejemplo más obvio es la API DOM
- APIs que obtienen datos del servidor, comunmente usadas para actualizar pequeñas secciones de una página web. [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).
- Las APIs para dibujar y manipular graficos: Las más populares son Canvas y WebGL
- APIS de audio y vídeo como HTMLMediaElement, la Web Audio API, y WebRTC
- Las APIs de dispositivos:  geolocalización, notificaciones de sistema, vibración de hardware, etc
- Las APIS de almacenamiento en el lado del cliente:  Web Storage API (sessionStorage, localStorage), IndexedDB API.

## APIs populares de terceros
- Google maps
- Facebook, Twitter, Instagram, Discord, Youtube, etc
- jsonplaceholder

## ¿Que es API REST?
REST: "Representational State Transfer" o traducido a "Transferencia de presentación de estado".

**Cuando queremos comunicar nuestro mundo del Frontend con el Backend (por ejemplo con Node.js), necesitamos alguna técnica. Aquí es donde nosotros podemos construir nuestra propia API para que nuestras aplicaciones se comuniquen de manera efectiva.**

**Para que la comunicación no sea un despelote existe el término de REST, que es un estandar para la construcción de APIS.** una técnica de arquitectura de software usada para construir APIs que permitan comunicar a nuestro servidor con sus clientes usando el protocolo HTTP mediante URIs lo suficientemente inteligentes para poder satisfacer la necesidad del cliente.

**Por ende API REST en simples palabras sería:** Una forma de entregar recursos para su utilización (comunicación) estandarizado y basado en arquitectura REST.

Para que sea REST:
- REST es STATELESS: TOKEN para cada petición realizada a la API.
- Crea URIs únicas que permiten al cliente entender y utilizar lo que está exponiendo. ``api.anexsoft.com/users``
- Tiene que responder a verbos Http: GET, POST, PUT, DELETE

## ¿Qué es Restful?
REST es el concepto, **RESTFul es la implementación** y al crear un RESTFul creamos una API, la cual una API es un conjunto de funciones o procedimientos para que sea utilizado por otro software.

## Recursos
- [Curso gratuito Udemy](https://www.udemy.com/course/aprende-a-disenar-una-api-restful-correctamente/)






