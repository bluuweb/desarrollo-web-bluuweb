# Parcel
Veamos una configuración avanzada para trabajar con Parcel.js y NPM de node.js

## NPM y parcel
```
npm init -y
```

```
npm install bootstrap@next
```

```
package.json
src
  index.html
  -css
    -custom.scss
  -js
    -app.js
  -assets
    -imagen.jpg
```

## package.json
```json
"scripts": {
  "dev": "parcel src/index.html src/js/app.js src/css/custom.scss src/assets/*",
  "build": "parcel build src/index.html src/js/app.js src/css/custom.scss src/assets/* --public-url . -d build/"
},
```

## index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Bootstrap 5!</title>
    <link rel="stylesheet" href="css/custom.scss">
</head>
<body>
    <div class="container mt-5">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
  
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="assets/1.jpg" alt="" class="img-fluid">
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
```

## custom.scss
- [sass/#importing](https://getbootstrap.com/docs/5.0/customize/sass/#importing)
```scss
$primary: rgb(65, 1, 139);
// Todos los estilos
// @import "../../node_modules/bootstrap/scss/bootstrap";

// Uno por uno **Recomendado
// Required
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/mixins";

// Optional
@import "../../node_modules/bootstrap/scss/root";
@import "../../node_modules/bootstrap/scss/reboot";
@import "../../node_modules/bootstrap/scss/type";
@import "../../node_modules/bootstrap/scss/images";
@import "../../node_modules/bootstrap/scss/containers";
@import "../../node_modules/bootstrap/scss/grid";

@import "../../node_modules/bootstrap/scss/buttons";
@import "../../node_modules/bootstrap/scss/modal";
@import "../../node_modules/bootstrap/scss/close";
```

## app.js
- [5.0/customize/optimize/](https://getbootstrap.com/docs/5.0/customize/optimize/)
```js
import 'bootstrap/js/dist/modal';
```

## Dev y Build
```
npm run dev
```

Cuando finalizamos el proyecto.
```
npm run build
```

## Purge.css
Esto lo vimos la sección anterior [01-fundamentos/#purgecss](https://bluuweb.github.io/bootstrap-5/01-fundamentos/#purgecss)

:::warning
Me optimiza más de la cuenta, por ende me excluye algunos estilos esenciales, si alguien tiene la solución, por favor compartir 😍
:::

```json
"scripts": {
  "build-purge": "purgecss --css build/css/custom.css --content index.html --output build/css/reducido.css"
},
```

