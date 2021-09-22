# OffCanvas (sidebar)
- [offcanvas](https://getbootstrap.com/docs/5.0/components/offcanvas/)

## Base
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>offcanvas Bootstrap 5</title>

    <link rel="stylesheet" href="css/custom.css">
</head>
<body>
    
    <div class="container">
        <h1>offcanvas</h1>
        <button
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            type="button"
        >
            OffCanvas
        </button>
    </div>

    <div 
        class="offcanvas offcanvas-start"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
    >
        <div class="offcanvas-header">
            <h5 class="offcanvas-title">OffCanvas Title</h5>
            <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam numquam incidunt amet modi commodi voluptates, nisi maxime excepturi, quam facilis asperiores ab rem, architecto consequatur nihil ipsum recusandae doloremque dolore!
            </div>
        </div>
    </div>


    <script src="js/bootstrap.min.js"></script>
</body>
</html>
```

## Posiciones

```php
class="offcanvas offcanvas-start"
class="offcanvas offcanvas-end"
class="offcanvas offcanvas-bottom"
```

## Demo #01

```scss
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

$font-family-base: 'Poppins', sans-serif;
$primary: #6D7FCC;

@import "../node_modules/bootstrap/scss/bootstrap";
```

```html
<nav class="navbar navbar-dark bg-primary">
    <div class="container">
        <i 
            class="bi bi-list h1 m-0 text-white" 
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
        ></i>
    </div>
</nav>

<div 
    class="offcanvas offcanvas-start bg-primary text-white"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
>
    <div class="offcanvas-header">
        <h2 class="offcanvas-title text-center">OffCanvas Title</h2>
        <h2
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        >
            <i class="bi bi-x-square"></i>
        </h2>
    </div>
    <div class="offcanvas-body">
        <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, placeat? Reprehenderit dignissimos a, illum unde officia veritatis quisquam vitae laborum laudantium dolorum ratione maxime neque animi nostrum voluptatibus cumque corrupti!</p>
        <div class="d-grid gap-2">
            <button class="btn btn-info text-white">
                <i class="bi bi-google"></i>
                Acceder
            </button>
            <button class="btn btn-info text-white">
                <i class="bi bi-cloud-lightning-rain-fill"></i>
                Tiempo
            </button>
            <button class="btn btn-info text-white">
                <i class="bi bi-credit-card"></i>
                Planes
            </button>
            <button class="btn btn-info text-white">
                <i class="bi bi-controller"></i>
                Games
            </button>
            <button class="btn btn-info text-white">
                <i class="bi bi-envelope-fill"></i>
                Contacto
            </button>
            <button class="btn btn-info text-white">
                <i class="bi bi-geo-alt-fill"></i>
                Ubicación
            </button>
        </div>
    </div>
</div>
```

## Demo #02
#### Puntos claves:
- Agregar atributos al body
- Agregar id al navbar relacionado con el data-bs-target
- Cada section con un id correspondiente
- Vincular id de cada section con anclas y #
- Manejar espaciados directamente en las section


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>offcanvas Bootstrap 5</title>

    <link rel="stylesheet" href="css/custom.css">
</head>
<body
    style="position: relative;"
    data-bs-spy="scroll"
    data-bs-target="#navbar-example3"
>

    <nav class="navbar navbar-dark bg-primary fixed-top" id="navbar-example3">
        <div class="container">
            <i 
                class="bi bi-list h1 m-0 text-white" 
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            ></i>
        </div>
    </nav>

    <div class="container">
        <section id="uno" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">uno</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
        <section id="dos" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">dos</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
        <section id="tres" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">tres</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
        <section id="cuatro" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">cuatro</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
        <section id="cinco" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">cinco</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
        <section id="seis" class="vh-100 pt-5">
            <h2 class="mt-5 display-5">seis</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel obcaecati ab soluta? Sequi, dolorum, minus placeat ratione voluptate, dolor illum in porro maiores cum recusandae quaerat asperiores incidunt eos fugit.</p>
        </section>
    </div>

    <div 
        class="offcanvas offcanvas-start bg-primary text-white"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
    >
        <div class="offcanvas-header">
            <h2 class="offcanvas-title text-center">OffCanvas Title</h2>
            <h2
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            >
                <i class="bi bi-x-square"></i>
            </h2>
        </div>
        <div class="offcanvas-body">
            <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, placeat? Reprehenderit dignissimos a, illum unde officia veritatis quisquam vitae laborum laudantium dolorum ratione maxime neque animi nostrum voluptatibus cumque corrupti!</p>
            <div class="d-grid gap-2">
                <a class="btn btn-info text-white" href="#uno" data-bs-dismiss="offcanvas">
                    <i class="bi bi-google"></i>
                    Acceder
                </a>
                <a class="btn btn-info text-white" href="#dos" data-bs-dismiss="offcanvas">
                    <i class="bi bi-cloud-lightning-rain-fill"></i>
                    Tiempo
                </a>
                <a class="btn btn-info text-white" href="#tres" data-bs-dismiss="offcanvas">
                    <i class="bi bi-credit-card"></i>
                    Planes
                </a>
                <a class="btn btn-info text-white" href="#cuatro" data-bs-dismiss="offcanvas">
                    <i class="bi bi-controller"></i>
                    Games
                </a>
                <a class="btn btn-info text-white" href="#cinco" data-bs-dismiss="offcanvas">
                    <i class="bi bi-envelope-fill"></i>
                    Contacto
                </a>
                <a class="btn btn-info text-white" href="#seis" data-bs-dismiss="offcanvas">
                    <i class="bi bi-geo-alt-fill"></i>
                    Ubicación
                </a>
            </div>
        </div>
    </div>


    <script src="js/bootstrap.min.js"></script>
</body>
</html>
```

