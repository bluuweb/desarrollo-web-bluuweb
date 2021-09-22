# Sass

- [https://sass-lang.com/](https://sass-lang.com/)

## Herramientas

- Recomendable conocer los fundamentos de node.js [Tutorial aquí](https://www.youtube.com/watch?v=mG4U9t5nWG8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6)
- [https://nodejs.org/es/](https://nodejs.org/es/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

## Instalación NPM

```
npm init -y
```

```
npm install bootstrap@next
```

Creamos una carpeta llamada `sass/custom.scss`

```scss
@import "../node_modules/bootstrap/scss/bootstrap";
```

```html
<link rel="stylesheet" href="css/custom.css" />
```

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personalización Sass</title>

    <link rel="stylesheet" href="css/custom.css" />
  </head>
  <body>
    <h1 class="text-danger">Hola Sass</h1>
  </body>
</html>
```

## JS

Copiar carpeta `node_modules/bootstrap/dist/js`

```html
<script src="js/bootstrap.min.js"></script>
```

## Variables

Revisa el archivo: `node_modules\bootstrap\scss\_variables.scss`, pero modificas en `css/custom.css`

```scss
$danger: indigo;

@import "../node_modules/bootstrap/scss/bootstrap";
```

## Fonts

- [https://fonts.google.com/](https://fonts.google.com/)

```scss
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");
// font-family: 'Open Sans Condensed', sans-serif;

$font-family-base: "Open Sans Condensed", sans-serif;
```

## All Colors

```html
<div class="container text-center">
  <h1 class="text-danger">Hola Sass</h1>
  <p class="text-white">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odio quia
    quam nihil, dolore perspiciatis dolorum eius dolor aut sapiente, et illo,
    animi unde aperiam accusantium sequi provident consequuntur hic!
  </p>
</div>
```

```scss
@import "../node_modules/bootstrap/scss/bootstrap";

p {
  background-color: $teal-600;
}
```

## Práctica

## header

```html
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/servicios.html">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacto.html">Contacto</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control nav-form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>
```

```scss
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,600&display=swap");
// font-family: 'Montserrat', sans-serif;
$font-family-base: "Montserrat", sans-serif;

$primary: #3cb4ab;

@import "../node_modules/bootstrap/scss/bootstrap";

header {
  background-image: url("../img/header.jpg");
  background-size: cover;
  background-position: center;
  height: 200px;
}

@include media-breakpoint-up(md) {
  header {
    height: 500px;
  }
}

.nav-form-control {
  background-color: $primary;
  border-color: $light;
}
```

## main

```html
<main class="container mt-n5 bg-light">
  <h1 class="text-center display-6 py-5">Lorem ipsum dolor sit.</h1>
  <p class="lead text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos deserunt
    dolorum amet. Impedit ut, repellat perferendis voluptatem vel asperiores,
    rerum reprehenderit hic quo doloremque et quae quibusdam. Cupiditate, nihil!
  </p>

  <div class="row mt-5">
    <div class="col-12 col-md-4">
      <h2>5.000</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="col-12 col-md-4">
      <h2>10,5</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="col-12 col-md-4">
      <h2>%75</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
  <div class="pb-5">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 75%"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</main>
```

```scss
$enable-negative-margins: true;
```

## footer

```html
<footer class="mt-5 text-center">
  <p>Lorem ipsum dolor sit amet consectetur.</p>
</footer>
```

## servicios.html
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sitio web Sass</title>

    <link rel="stylesheet" href="css/custom.css" />
  </head>
  <body>
      <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/servicios.html">Servicios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacto.html">Contacto</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control nav-form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
      </header>

      <main class="container mt-n5 bg-light">
          <h1 class="text-center display-6 py-5">Servicios</h1>
          <p class="lead text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos deserunt dolorum amet. Impedit ut, repellat perferendis voluptatem vel asperiores, rerum reprehenderit hic quo doloremque et quae quibusdam. Cupiditate, nihil!</p>

          <div class="row py-5">
              <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <img src="img/card-1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <img src="img/card-2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
            <div class="col-12 col-md-4 mb-3">
                <div class="card">
                    <img src="img/card-3.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
          </div>
      </main>

      <footer class="mt-5 text-center">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </footer>

    <script src="js/bootstrap.min.js"></script>
  </body>
</html>

```

## contacto.html

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sitio web Sass</title>

    <link rel="stylesheet" href="css/custom.css" />
  </head>
  <body>
      <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/servicios.html">Servicios</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/contacto.html">Contacto</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control nav-form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
      </header>

      <main class="container mt-n5 bg-light">
          <h1 class="text-center display-6 py-5">Contacto</h1>
          <p class="lead text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos deserunt dolorum amet. Impedit ut, repellat perferendis voluptatem vel asperiores, rerum reprehenderit hic quo doloremque et quae quibusdam. Cupiditate, nihil!</p>

          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">First name</label>
              <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">Last name</label>
              <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">City</label>
              <input type="text" class="form-control" id="validationCustom03" required>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">State</label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom05" class="form-label">Zip</label>
              <input type="text" class="form-control" id="validationCustom05" required>
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
      </main>

      <footer class="mt-5 text-center">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </footer>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>

```

app.js
```js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()
```




