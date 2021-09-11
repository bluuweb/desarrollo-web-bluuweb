# Bootstrap Formulario

En este apartado veremos un formulario con Bootstrap 5.

## Ejemplo

```html
<form id="formulario">
  <div class="mb-3">
    <label for="inputEmail">Email Address</label>
    <input
      type="email"
      class="form-control"
      id="inputEmail"
      aria-describedby="emailHelp"
      name="campoEmail"
    />
    <div class="form-text" id="emailHelp">
      No compartiremos su correo electrónico.
    </div>
  </div>
  <div class="mb-3">
    <label for="inputPassword">Password</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      name="campoPassword"
    />
  </div>
  <div class="mb-3 form-check">
    <input
      type="checkbox"
      id="inputCheck"
      class="form-check-input"
      name="campoAceptar"
    />
    <label for="inputCheck">Aceptar las condiciones</label>
  </div>
  <button class="btn btn-info w-100" type="submit" id="btnEnviar">
    Enviar
  </button>
  <button class="btn btn-dark w-100 d-none" disabled id="btnCargando">
    <span
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Cargando...
  </button>
</form>
```

## Javascript

```js
console.log("funcionando!");

const formulario = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#btnEnviar");
const btnCargando = document.querySelector("#btnCargando");

formulario.addEventListener("submit", (e) => {
  btnEnviar.classList.add("d-none");
  btnCargando.classList.remove("d-none");

  e.preventDefault();
  const datos = new FormData(formulario);
  console.log("email: ", datos.get("campoEmail"));
  console.log("password: ", datos.get("campoPassword"));
  console.log("aceptar: ", datos.get("campoAceptar"));

  // Enviar datos según sistema de backend
  // PHP: https://www.youtube.com/watch?v=nLrL9Ip3tWI

  // Simulación de carga
  window.setTimeout(() => {
    btnEnviar.classList.remove("d-none");
    btnCargando.classList.add("d-none");
  }, 1000);
});
```

## Toast

```html
<style>
  .toast {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 20px;
  }
</style>

<!-- Toasts -->
<div
  class="toast align-items-center"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  <div class="d-flex">
    <div class="toast-body">El mensaje a sido entregado correctamente...</div>
    <button
      type="button"
      class="btn-close me-2 m-auto"
      data-bs-dismiss="toast"
      aria-label="Close"
    ></button>
  </div>
</div>
<!-- Toasts -->
```

```js{7,27-28}
console.log('funcionando!')

const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

const toast = document.querySelector('.toast')

formulario.addEventListener('submit', e => {
    
    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')
    
    e.preventDefault()
    const datos = new FormData(formulario)
    console.log('email: ', datos.get('campoEmail'))
    console.log('password: ', datos.get('campoPassword'))
    console.log('aceptar: ', datos.get('campoAceptar'))

    // Enviar datos según sistema de backend
    // PHP: https://www.youtube.com/watch?v=nLrL9Ip3tWI

    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')
        
        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    }, 1000)

})
```
