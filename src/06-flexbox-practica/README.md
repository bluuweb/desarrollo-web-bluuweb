# CSS Flexbox [Práctica]

Comenzaremos a crear nuestro primer sitio web con Flexbox

## Utilidades

Ya habíamos trabajado con varios estilos por ende los vamos a reciclar:

- [Normalize](https://necolas.github.io/normalize.css/)
- [Box-sizing](https://css-tricks.com/box-sizing/)
- [Fuente Raleway](https://fonts.google.com/specimen/Raleway?query=rale)

Otros recursos utilizados:

- [https://color.adobe.com/es/create/image](https://color.adobe.com/es/create/image)
- [https://lenguajecss.com/css/selectores/selectores-avanzados/](https://lenguajecss.com/css/selectores/selectores-avanzados/)
- [https://www.iloveimg.com/es/redimensionar-imagen](https://www.iloveimg.com/es/redimensionar-imagen)
- [https://developer.mozilla.org/es/docs/CSS/Media_queries](https://developer.mozilla.org/es/docs/CSS/Media_queries)

## Header
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alto's Game</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="bg-header">
        <div class="bg-navbar">
            <div class="container">
                <div class="navbar">
                    <a href="/" class="navbar-brand">
                        <img src="assets/icons/logo.svg" alt="Logo Altos Game">
                        Alto's Game
                    </a>
                    <nav class="navbar-nav">
                        <a href="" class="nav-link">Inicio</a>
                        <a href="" class="nav-link">Tienda</a>
                        <a href="" class="nav-link">Nosotros</a>
                        <a href="" class="nav-link">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</body>

</html>
```

```css
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    font-family: 'Raleway', sans-serif;
}

/* Utilidades */
.container {
    width: 80%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

.bg-header {
    background-image: url('../assets/images/bg-header.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 18.75em;
}

.bg-navbar {
    background-color: rgba(0, 0, 0, 0.157);
    padding: 1.5em 0;
}

.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navbar-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin-bottom: 1em;
    font-weight: 500;
}

.navbar-brand img {
    width: 2em;
}

.navbar-nav {
    background-color: rgba(0, 0, 0, 0.750);
    padding: 1em;
    border-radius: 0.3em;
}

.nav-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 0.3em;
}

.nav-link:hover {
    background-color: white;
    color: black;
    border-radius: 0.5em;
}
```

## Main & Tienda
```html
<main class="container main">
    <h1 class="main-title">Nuestros productos</h1>
    <section class="tienda">
        <article class="card">
            <img src="assets/images/card-1.png" alt="" class="card-img">
            <div class="card-body">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem quod adipisci a
                    eaque tempore recusandae voluptatibus atque sed ratione dolores, officia deserunt et dolorum
                    sunt
                    velit quis excepturi eius.</p>
                <a href="https://www.google.cl/" target="_blanck" class="btn btn-dark">Comprar</a>
            </div>
        </article>
        <article class="card">
            <img src="assets/images/card-1.png" alt="" class="card-img">
            <div class="card-body">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem quod adipisci a
                    eaque tempore recusandae voluptatibus atque sed ratione dolores, officia deserunt et dolorum
                    sunt
                    velit quis excepturi eius.</p>
                <a href="https://www.google.cl/" target="_blanck" class="btn btn-dark">Comprar</a>
            </div>
        </article>
        <article class="card">
            <img src="assets/images/card-1.png" alt="" class="card-img">
            <div class="card-body">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem quod adipisci a
                    eaque tempore recusandae voluptatibus atque sed ratione dolores, officia deserunt et dolorum
                    sunt
                    velit quis excepturi eius.</p>
                <a href="https://www.google.cl/" target="_blanck" class="btn btn-dark">Comprar</a>
            </div>
        </article>
    </section>
</main>
```

```css
/* Utilidades */
.container {
    width: 80%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5em;
    margin: 0 0.1em;
    border-radius: 0.5em;
}

.btn-primary {
    color: white;
    background-color: #214037;
}

.btn-secondary {
    color: white;
    background-color: #77A699;
}

.btn-danger {
    color: white;
    background-color: #A6464E;
}

.btn-info {
    color: black;
    background-color: #E2F2C9;
}

.btn-dark {
    color: white;
    background-color: #2F2E2E;
}

/* MAIN */
.main {
    background-color: white;
    margin-top: -2rem;
    border-radius: 0.3em;
    padding: 0.3em;
}

.main-title {
    text-align: center;
    text-transform: uppercase;
}

/* CARD */
.card {
    background-color: #A6464E;
    color: white;
    overflow: hidden;
    border-radius: 0.5em;
    margin-bottom: 1em;
}

.card-img {
    width: 100%;
}

.card-body {
    padding: 1em;
}

.card-body h5 {
    font-size: 1.5rem;
    margin: 1em 0;
    font-weight: 500;
}

.card-body p {
    font-weight: 300;
}
```

## Nosotros
```html
<section class="nosotros">
    <div class="nosotros-col-img"></div>
    <div class="nosotros-col-text">
        <div class="nosotros-body">
            <h2>Nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis, incidunt velit voluptatum
                officia
                nulla enim ea ducimus maiores consequatur earum quisquam sapiente architecto magnam provident
                ratione
                quibusdam aperiam sit?
            </p>
            <a href="#" class="btn btn-danger">Más información</a>
        </div>
    </div>
</section>
```

```css
/* NOSOTROS */
.nosotros {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    background-color: #2F2E2E;
}

.nosotros-col-img {
    order: 2;
    background-image: url('../assets/images/perfil-dos.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
}

.nosotros-col-text {
    order: 1;
}

.nosotros-body {
    padding: 1em;
    text-align: center;
    color: white;
}

.nosotros-body h2 {
    text-transform: uppercase;
    font-weight: 500;
}

.nosotros-body p {
    font-weight: 200;
}
```

## Footer
```html
<footer class="bg-footer">
    <div class="container">
        <p>Lorem, ipsum dolor.</p>
    </div>
</footer>
```

```css
/* FOOTER */
.bg-footer {
    background-color: #214037;
    color: #E2F2C9;
}

.bg-footer p {
    padding: 1em;
    margin: 0;
    text-align: center;
}
```

## Media Queries

- [media queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

El resultado de la consulta es "verdadero" cuando el tipo de medio (si se especifica) coincide con el dispositivo en el que se está mostrando el documento y todas las expresiones en el media query son "verdaderas". En este caso, se aplica los estilos correspondientes, siguiendo las reglas usuales de cascada.

```html
<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- CSS media query within a style sheet -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
```

#### Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries</title>
    <style>
        main {
            background-color: black;
            color: white;
        }

        @media (min-width: 576px) {
            main {
                background-color: peru;
            }
        }

        @media (min-width: 768px) {
            main {
                background-color: tomato;
            }
        }
    </style>
</head>

<body>
    <main>
        <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed a, accusamus culpa voluptatem quasi
                dignissimos officia necessitatibus ad quod voluptate ipsa expedita enim ratione perspiciatis, omnis
                asperiores totam esse architecto.</p>
        </article>
        <article>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sed porro. Quis, ipsa architecto
                accusantium, porro dolorem officia, repellat rem nostrum doloremque sunt saepe quaerat dicta quod amet
                illo quo.</p>
        </article>
    </main>
</body>

</html>
```

#### Ejemplo flexbox:
```css
@media (min-width: 576px) {
    main {
        background-color: peru;
        display: flex;
    }

    article {
        margin: 2em;
        font-size: 1.5rem;
    }
}

@media (min-width: 768px) {
    main {
        background-color: tomato;
    }

    article {
        font-size: 2rem;
    }
}
```

## Práctica Responsive
```css
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    font-family: 'Raleway', sans-serif;
}

/* Utilidades */
.container {
    width: 80%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5em;
    margin: 0 0.1em;
    border-radius: 0.5em;
}

.btn-primary {
    color: white;
    background-color: #214037;
}

.btn-secondary {
    color: white;
    background-color: #77A699;
}

.btn-danger {
    color: white;
    background-color: #A6464E;
}

.btn-info {
    color: black;
    background-color: #E2F2C9;
}

.btn-dark {
    color: white;
    background-color: #2F2E2E;
}

/* HEADER */
.bg-header {
    background-image: url('../assets/images/bg-header.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 18.75em;
}

.bg-navbar {
    background-color: rgba(0, 0, 0, 0.157);
    padding: 1.5em 0;
}

.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
    }
}

.navbar-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin-bottom: 1em;
    font-weight: 500;
}

@media (min-width: 768px) {
    .navbar-brand {
        flex-direction: row;
        margin-bottom: 0;
    }
}

.navbar-brand img {
    width: 2em;
}

.navbar-nav {
    background-color: rgba(0, 0, 0, 0.750);
    padding: 1em;
    border-radius: 0.3em;
}

.nav-link {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 0.3em;
}

.nav-link:hover {
    background-color: white;
    color: black;
    border-radius: 0.5em;
}

/* MAIN */
.main {
    background-color: white;
    margin-top: -2rem;
    border-radius: 0.3em;
    padding: 0.3em;
}

.main-title {
    text-align: center;
    text-transform: uppercase;
}

@media (min-width: 768px) {
    .tienda {
        display: flex;
        gap: 1em;
    }
}

/* CARD */
.card {
    background-color: #A6464E;
    color: white;
    overflow: hidden;
    border-radius: 0.5em;
    margin-bottom: 1em;
}

.card-img {
    width: 100%;
}

.card-body {
    padding: 1em;
}

.card-body h5 {
    font-size: 1.5rem;
    margin: 1em 0;
    font-weight: 500;
}

.card-body p {
    font-weight: 300;
}

/* NOSOTROS */
.nosotros {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    background-color: #2F2E2E;
}

.nosotros-col-img {
    order: 2;
    background-image: url('../assets/images/perfil-dos.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
}

.nosotros-col-text {
    order: 1;
}

@media (min-width: 576px) {
    .nosotros-col-img {
        height: 500px;
    }
}

@media (min-width: 768px) {
    .nosotros {
        flex-direction: row;
    }

    .nosotros-col-img {
        order: 1;
        flex: 1 1 0;
    }

    .nosotros-col-text {
        order: 2;
        flex: 1 1 0;
    }
}

.nosotros-body {
    padding: 1em;
    text-align: center;
    color: white;
}

.nosotros-body h2 {
    text-transform: uppercase;
    font-weight: 500;
}

.nosotros-body p {
    font-weight: 200;
}

/* FOOTER */
.bg-footer {
    background-color: #214037;
    color: #E2F2C9;
}

.bg-footer p {
    padding: 1em;
    margin: 0;
    text-align: center;
}
```

## Hosting
- [netlify.com](https://www.netlify.com/)