# Form Range + JS
Vamos a desarrollar una práctica inspirados en: [FrontendMentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8)

## custom.scss
```scss
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap');
// font-family: 'Manrope', sans-serif;

$font-family-base: 'Manrope', sans-serif;

@import "../node_modules/bootstrap/scss/bootstrap";
```

## HTML
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Precios level up</title>
    <link rel="stylesheet" href="css/custom.css" />
  </head>
  <body>
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bold mb-3">Simple, traffic-based pricing</h1>
        <p class="text-muted">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card border-0 shadow bg-dark text-light">
            <div class="card-body">
              <div class="row text-center my-3 align-items-center">
                <div class="col-12 col-md-6 order-1 order-md-1">
                  <p class="h2 fw-bold m-0">
                    $ <span id="price">16</span>.00
                    <span class="text-muted h6 align-middle">/ month</span>
                  </p>
                </div>
                <div
                  class="col-12 col-md-6 order-3 order-md-2 text-uppercase text-muted"
                >
                  <p class="m-0">
                    <span id="views" class="text-primary">100K</span> pageviews
                  </p>
                </div>
                <div class="col-12 order-2 order-md-3 my-3">
                  <input
                    type="range"
                    class="form-range"
                    min="8"
                    max="40"
                    step="8"
                    id="customRange3"
                    value="24"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-12">
                  <ul class="list-unstyled text-center">
                    <li>
                      <i class="bi bi-play text-primary"></i>
                      Unlimited websites
                    </li>
                    <li>
                      <i class="bi bi-play text-primary"></i>
                      100% updates data ownership
                    </li>
                    <li>
                      <i class="bi bi-play text-primary"></i>
                      Email report
                    </li>
                  </ul>
                </div>
                <div class="col-12 text-center">
                  <button class="btn btn-outline-primary">Acceder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="js/app.js"></script>
  </body>
</html>
```

## JS
```js
console.log('holis')

const range = document.querySelector('#customRange3')
const views = document.querySelector('#views')
const price = document.querySelector('#price')
const arrayViews = ['10K', '50K', '100K', '500K', '1M']



range.addEventListener('input', () => {
    console.log('me cambiaste 😱')
    console.log(range.value)
    price.textContent = range.value
    views.textContent = arrayViews[(range.value/8 -1)]
})
```