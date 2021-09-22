# Accordion

## Importante

- Debes tener las bases de Bootstrap 5 para comenzar con este tutorial, por favor revisar video anterior: [click aquí](https://youtu.be/1kNwZbRiVcQ)

## Desafío
- [Revisar aquí](https://accordion-bootstrap-5.netlify.app/)

<!-- - [Visualizar ejemplo](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g)
- [Solución premium](https://www.frontendmentor.io/solutions/mobilefirst-solution-using-html-scss-w-bem-and-vanilla-js-56Jm0C-Tn) -->

## CDN

- [starter-template](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template)

## Header

```html
<header class="container">
  <section class="row">
    <div class="col-12 col-md-6">
      <h1>A simple solution to complex tasks is coming soon</h1>
      <p>
        Say goodbye to inefficient juggling of multiple apps, teams, and
        projects. Officelite is the new collaboration platform built with an
        intuitive interface to improve productivity.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <div class="col-12 col-md-6">Accordion</div>
  </section>
</header>
```

## Componente Accordion

- [documentación](https://getbootstrap.com/docs/5.0/components/accordion/)

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseUno"
        aria-expanded="true"
        aria-controls="collapseUno"
      >
        Item #1
      </button>
    </h2>
    <div
      id="collapseUno"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero
        earum ipsa rerum ducimus, corporis quae consectetur tempora voluptate
        veniam nostrum aperiam quasi voluptatum consequuntur eligendi est illum
        error maiores!
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
        Item #2
      </button>
    </h2>
    <div
      class="accordion-collapse collapse"
      id="collapseTwo"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero
        earum ipsa rerum ducimus, corporis quae consectetur tempora voluptate
        veniam nostrum aperiam quasi voluptatum consequuntur eligendi est illum
        error maiores!
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
        Item #3
      </button>
    </h2>
    <div
      class="accordion-collapse collapse"
      id="collapseThree"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, libero
        earum ipsa rerum ducimus, corporis quae consectetur tempora voluptate
        veniam nostrum aperiam quasi voluptatum consequuntur eligendi est illum
        error maiores!
      </div>
    </div>
  </div>
</div>
```
