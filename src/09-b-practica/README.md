# Práctica Scroll

## Base

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />

    <title>Scroll web!</title>
  </head>
  <body>
    <h1 class="text-primary">Hello, world!</h1>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

## Navbar

- [aria-current](https://www.aditus.io/aria/aria-current/#:~:text=aria%2Dcurrent%20is%20an%20attribute,translated%22%20into%20the%20accessibility%20tree.)

```html
<!-- navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a href="/" class="navbar-brand">Bootstrap</a>
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
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="#inicio" class="nav-link active" aria-current="page">
            Inicio
          </a>
        </li>
        <li class="nav-item">
          <a href="#servicios" class="nav-link"> Servicios </a>
        </li>
        <li class="nav-item">
          <a href="#comentarios" class="nav-link"> Comentarios </a>
        </li>
        <li class="nav-item">
          <a href="#suscribete" class="nav-link"> Suscríbete </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- navbar -->
```

## Imágenes

- [https://picsum.photos/](https://picsum.photos/)
- [https://picsum.photos/1000/400](https://picsum.photos/200/300)

## Slider

```html
<!-- Slider -->
<section id="inicio">
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-bs-target="#carouselExampleControls"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/slider-1.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/slider-2.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/slider-3.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Tercero slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</section>
<!-- Slider -->
```

## Iconos

```html
<main class="bg-dark text-white py-5" id="servicios">
  <div class="container">
    <div class="text-center py-5 text-primary">
      <i class="bi bi-lightning h4"></i>
      <i class="bi bi-lightning h4 text-danger"></i>
      <i class="bi bi-lightning h4"></i>
    </div>
    <h2 class="text-center display-4">Servicios</h2>
  </div>
</main>
```

## Main

```html
<main class="bg-dark text-white py-5" id="servicios">
  <div class="container">
    <div class="text-center py-5 text-primary">
      <i class="bi bi-lightning h4"></i>
      <i class="bi bi-lightning h4 text-danger"></i>
      <i class="bi bi-lightning h4"></i>
    </div>
    <h2 class="text-center display-4 mb-5">Servicios</h2>

    <div class="row align-items-center">
      <div class="col-12 col-lg-4">
        <h5>Lorem ipsum dolor sit amet.</h5>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magnam
          obcaecati veritatis architecto expedita assumenda, sequi, eaque labore
          eum, perferendis deleniti? Repudiandae nulla alias sint natus
          eligendi. In, voluptate consequuntur?
        </p>
        <button class="btn btn-outline-light mb-5 mb-lg-0">Suscríbete</button>
      </div>
      <div class="col-12 col-lg-8">
        <img src="img/slider-3.jpg" alt="" class="img-fluid rounded" />
      </div>
    </div>

    <h1 class="py-5 display-6">
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      laborum, est consequatur, quos earum nemo, ratione natus quis ullam ab
      dolores optio nostrum laudantium! Illum temporibus vero debitis fuga
      veniam."
    </h1>
  </div>
</main>
```

## Commentarios

```html
<section id="comentarios" class="py-5 bg-light">
  <div class="container">
    <div class="text-center py-5 h1">
      <i class="bi bi-calendar-date"></i>
      <i class="bi bi-calendar-date"></i>
      <i class="bi bi-calendar-date"></i>
    </div>
    <h2 class="text-center mb-5 display-4">Comentarios</h2>
    <p class="lead mb-5 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
      soluta, maxime quis iure rem inventore. Eum distinctio id, suscipit
      accusamus nihil inventore doloremque. Dolor voluptatibus quia quo
      laboriosam reiciendis explicabo!
    </p>

    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 mb-md-0">
        <img src="img/vertical.jpg" alt="" class="img-fluid rounded" />
      </div>
      <div class="col-12 col-md-6 col-lg-8 col-xl-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        ipsum reiciendis suscipit fugit tempora impedit maxime ullam velit
        culpa, incidunt commodi maiores earum et quo corrupti quas in nobis
        animi!
      </div>
    </div>
  </div>
</section>
```

## Accordion

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>
```

## Card

```html
<!-- Suscribete -->
<section id="suscribete" class="bg-secondary text-light">
  <div class="container">
    <div class="text-center h1 py-5">
      <i class="bi bi-cart4"></i>
      <i class="bi bi-cart4"></i>
      <i class="bi bi-cart4"></i>
    </div>
    <h2 class="text-center mb-5 display-4">Suscríbete</h2>
    <p class="lead text-center pb-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet
      repellat temporibus iste excepturi, eaque totam iusto provident expedita
      quos voluptate exercitationem corrupti. Necessitatibus aspernatur expedita
      ratione culpa quod voluptate.
    </p>

    <div class="row text-dark text-center">
      <div class="col-12 col-md-4 mb-5">
        <div class="card">
          <div class="card-body">
            <h2 class="my-5">$100</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-outline-dark">Suscríbete</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-5">
        <div class="card">
          <div class="card-body">
            <h2 class="my-5">$500</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-outline-dark">Suscríbete</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-5">
        <div class="card">
          <div class="card-body">
            <h2 class="my-5">$900</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-outline-dark">Suscríbete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Suscribete -->
```

## Modal

```html
<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-outline-dark"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal1"
>
  Launch demo modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal1"
  tabindex="-1"
  aria-labelledby="exampleModalLabel1"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## Footer

```html
<footer class="container-fluid py-5 text-center bg-dark text-white">
  <p>Lorem, ipsum dolor.</p>
</footer>
```

## Scroll

```html
<body
  style="position: relative;"
  data-bs-spy="scroll"
  data-bs-target="#navbar-example3"
  data-bs-offset="10"
  tabindex="0"
>
  <nav id="navbar-example3"></nav>

  ...
</body>
```
