# Bootstrap Fundamentos

Aprendamos a trabajar con Bootstrap 5! 🐱‍👤

## Requisitos

- [Curso Fundamentos de HTML y CSS](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)

## Herramientas

- [https://code.visualstudio.com/](https://code.visualstudio.com/)
- [https://nodejs.org/es/](https://nodejs.org/es/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Tema e iconos VSC](https://marketplace.visualstudio.com/items?itemName=sldobri.bunker)

## CDN

- [CDN](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

La manera más sencilla de comenzar con Bootstrap es utilizar el CDN. Los archivos están alojados en un servidor externo.

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
  crossorigin="anonymous"
/>
```

## Breakpoints

- [breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)

Hace referencia a los puntos de interrupción, dependiendo del tamaño del dispositivo que esté visitando nuestro sitio web.

## Container

- [containers](https://getbootstrap.com/docs/5.0/layout/containers/)

Se utiliza para alinear nuestro contenido, estableciendo un ancho determinado.

::: warning Importante
Al utilizar el sistema de columnas es necesario envolver todo en un container
:::

## Grid

- [grid](https://getbootstrap.com/docs/5.0/layout/grid/)

Bootstrap utiliza un sistema de 12 columnas (con Flexbox) para diseñar y distribuir elementos en su sitio web.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid Fundamentos</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
        <div class="col-1 border">1</div>
      </div>
    </div>
  </body>
</html>
```

Por ejemplo si necesitamos crear 3 columnas:

```html
<div class="row">
  <div class="col-4 border">4</div>
  <div class="col-4 border">4</div>
  <div class="col-4 border">4</div>
</div>
```

Si necesitamos 4 columnas:

```html
<div class="row">
  <div class="col-3 border">3</div>
  <div class="col-3 border">3</div>
  <div class="col-3 border">3</div>
  <div class="col-3 border">3</div>
</div>
```

Diferentes tamaños:

```html
<div class="row">
  <div class="col-6 border">6</div>
  <div class="col-3 border">3</div>
  <div class="col-3 border">3</div>
</div>
```

## Grid Responsive

La gracia es hacer sitios web responsives, y la gracia mayor es que con Bootstrap es muy sencillo.

- [Breakpoint](https://getbootstrap.com/docs/5.0/layout/grid/#grid-options)

Agregando las opciones a la grid, podemos crear diseños responsives:

```html
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 border">12 sm-6 md-4</div>
  <div class="col-12 col-sm-6 col-md-4 border">12 sm-6 md-4</div>
  <div class="col-12 col-sm-12 col-md-4 border">12 sm-6 md-4</div>
</div>
```

## Flexbox
La grid de Bootstrap utiliza Flexbox para posicionar elementos.

- ¿No sabes nada de Flexbox? [Aquí un tutorial](https://www.youtube.com/watch?v=TtgkU8LMGAc)

## Práctica
Ya que sabemos algunos fundamentos de Bootstrap 5, comencemos a desarrollar nuestro primer sitio web.

- [sitio web terminado](https://upbeat-galileo-14c85e.netlify.app/)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica Fundamentos</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

</head>
<body>
        
    <div class="container">
    
        <h2 class="text-center display-4 mb-4 mt-5 mt-md-0">Lista de precios</h2>
        <p class="lead text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ea? Pariatur voluptatibus recusandae quas modi quam necessitatibus ducimus, voluptate accusamus dolorum sunt libero, nesciunt cum quod? Quod eligendi totam beatae.</p>

        <main class="row">

            <article class="col-12 col-md-4 text-center mb-5 mb-md-0">

                <div class="border border-dark rounded rounded-3 overflow-hidden">

                    <p class="fw-bold mt-5">Basic</p>
                    <h3 class="display-4">$100</h3>
                    <p class="mt-3 font-monospace">Up to 5 user for free</p>
                    <ul class="list-unstyled my-5">
                        <li>Lorem, ipsum</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem, ipsum dolor</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                    <a class="bg-info text-white py-3 d-block text-decoration-none" href="#">Acceder</a>

                </div>

            </article>

        </main>

        <footer class="mt-5 text-center">
            <p class="text-muted">2021 - Todos los derechos reservados</p>
        </footer>
    </div>

</body>
</html>
```

### Todo junto
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica Fundamentos</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

    <style>
        @media (min-width: 768px) {
            .altura {
                height: 100vh;
            }
        }
    </style>
</head>
<body>
        
    <div class="container altura d-flex flex-column justify-content-center">
    
        <h2 class="text-center display-4 mb-4 mt-5 mt-md-0">Lista de precios</h2>
        <p class="lead text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ea? Pariatur voluptatibus recusandae quas modi quam necessitatibus ducimus, voluptate accusamus dolorum sunt libero, nesciunt cum quod? Quod eligendi totam beatae.</p>

        <main class="row">
            <article class="col-12 col-md-4 text-center mb-5 mb-md-0">
                <div class="border border-dark rounded rounded-3 overflow-hidden">
                    <p class="fw-bold mt-5">Basic</p>
                    <h3 class="display-4">$100</h3>
                    <p class="mt-3 font-monospace">Up to 5 user for free</p>
                    <ul class="list-unstyled my-5">
                        <li>Lorem, ipsum</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem, ipsum dolor</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                    <a class="bg-info text-white py-3 d-block text-decoration-none" href="#">Acceder</a>
                </div>
            </article>
            <article class="col-12 col-md-4 text-center mb-5 mb-md-0">
                <div class="border border-dark rounded rounded-3 overflow-hidden bg-dark text-white">
                    <p class="fw-bold mt-5">Pro</p>
                    <h3 class="display-4">$200</h3>
                    <p class="mt-3 font-monospace">Up to 15 user for free</p>
                    <ul class="list-unstyled my-5">
                        <li>Lorem, ipsum</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem, ipsum dolor</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                    <a class="bg-secondary text-white py-3 d-block text-decoration-none" href="#">Acceder</a>
                </div>
            </article>
            <article class="col-12 col-md-4 text-center">
                <div class="border border-dark rounded rounded-3 overflow-hidden">
                    <p class="fw-bold mt-5">Ultimate</p>
                    <h3 class="display-4">$500</h3>
                    <p class="mt-3 font-monospace">Up to 50 user for free</p>
                    <ul class="list-unstyled my-5">
                        <li>Lorem, ipsum</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem, ipsum dolor</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                    <a class="bg-info text-white py-3 d-block text-decoration-none" href="#">Acceder</a>
                </div>
            </article>
        </main>

        <footer class="mt-5 text-center">
            <p class="text-muted">2021 - Todos los derechos reservados</p>
        </footer>
    </div>

</body>
</html>
```