# Chat con Firebase

- Firebase [documentación](https://firebase.google.com/)
- Agregar Firebase [documentación](https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize)
- Auth con Google [documentación](https://firebase.google.com/docs/auth/web/google-signin?authuser=0)
- Observa cambios entre instantáneas [documentación](https://firebase.google.com/docs/firestore/query-data/listen?authuser=0#view_changes_between_snapshots)
- Reglas [documentación](https://firebase.google.com/docs/firestore/security/rules-structure?authuser=0#basic_readwrite_rules)
- Curso de Javascript Moderno [youtube](https://www.youtube.com/watch?v=Z4TuS0HEJP8&list=PLPl81lqbj-4I2ZOzryjPKxfhK3BzTlaJ7)
- Tutorial de JS [youtube](https://www.youtube.com/watch?v=pnLHUyO96QA&list=PLPl81lqbj-4K4bSaIziJsu3GtCiytRpEL)

## HTML
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/custom.css" />

    <title>Hello, world!</title>

    <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>

    <!-- Add Firebase products that you want to use -->
    <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-firestore.js"></script>

    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "xxx",
        authDomain: "xxx",
        projectId: "xxx",
        storageBucket: "xxx",
        messagingSenderId: "xxx",
        appId: "xxx",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    </script>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#" id="nombreUsuario">BChat</a>
        <div>
          <button class="btn btn-primary" id="btnIngreso">Ingresar</button>
          <button class="btn btn-danger" id="btnCerrarSesion">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>

    <main class="container py-3 container-chat" id="contenidoWeb">
      <!-- <div class="text-start">
        <span class="badge bg-info">Primary</span>
      </div>
      <div class="text-end">
        <span class="badge bg-success">Primary</span>
      </div> -->
    </main>
    <form class="fixed-bottom container mb-2" id="formulario">
      <input type="text" class="form-control" placeholder="..." id="texto" />
      <button class="btn btn-dark w-100 mt-2">Enviar</button>
    </form>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

```scss
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
// font-family: 'Alata', sans-serif;
$font-family-base: 'Alata', sans-serif;


@import "../node_modules/bootstrap/scss/bootstrap";

.container-chat {
    overflow-y: scroll;
    height: calc(100vh - 160px);
}
```

## JS
```js
console.log('funcionando!')

const btnIngreso = document.querySelector('#btnIngreso')
const btnCerrarSesion = document.querySelector('#btnCerrarSesion')
const nombreUsuario = document.querySelector('#nombreUsuario')
const contenidoWeb = document.querySelector('#contenidoWeb')
const texto = document.querySelector('#texto')
const formulario = document.querySelector('#formulario')

firebase.auth().onAuthStateChanged(user => {
    if(user){
        nombreUsuario.innerHTML = user.displayName
        accionCerrarSesion()
        contenidoChat(user)
    }else{
        accionAcceder()
        console.log('usuario no registrado')
        nombreUsuario.innerHTML = 'Chat'
        contenidoWeb.innerHTML = /*html*/`
            <p class="lead mt-5 text-center">Debes iniciar sesión</p>
        `
    }
})

const accionCerrarSesion = () => {
    formulario.classList.remove('d-none')
    btnCerrarSesion.addEventListener('click', () => firebase.auth().signOut())
}

const accionAcceder = () => {
    formulario.classList.add('d-none')
    btnIngreso.addEventListener('click', async() => {
        console.log('entro')
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })
}

const contenidoChat = user => {

    formulario.addEventListener('submit', event => {
        event.preventDefault()
        console.log(texto.value)
        if(!texto.value.trim()){
            console.log('texto vacio')
            return
        }
        firebase.firestore().collection('chat').add({
            texto: texto.value,
            uid: user.uid,
            fecha: Date.now()
        }).then(res => {
            console.log('texto agregado')
        })
        texto.value = ''
    })

    firebase.firestore().collection('chat').orderBy('fecha')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log(change.doc.data());
                    console.log(user.uid)
                    console.log(change.doc.data().uid)
                    if (user.uid === change.doc.data().uid) {
                        console.log('entró', change.doc.data().texto)
                        contenidoWeb.innerHTML += /*html*/`
                        <div class="text-end">
                            <span class="badge badge bg-info">
                                ${change.doc.data().texto}
                            </span>
                        </div>
                        `
                    }else{
                        contenidoWeb.innerHTML += /*html*/`
                        <div class="text-start">
                            <span class="badge bg-secondary">${change.doc.data().texto}</span>
                        </div>
                        `
                    }
                    contenidoWeb.scrollTop = contenidoWeb.scrollHeight
                }
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data());
                }
            });
        })
}
```

## Reglas
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /chat/{doc} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```