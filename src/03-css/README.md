# 03 - CSS Fundamentos
* CSS (en inglés Cascading Style Sheets) Hojas de estilo en Cascada. 
* Es el responsable de todo lo visual de nuestro sitio web.
* CSS describe cómo deben mostrarse los elementos HTML.

## Vista rápida
Ingresa el siguiente código
```html
<h1 style="color: peru;">Título del sitio web</h1>
```
Y wualá cambiamos el color del título de nuestro sitio web.

## Archivos separados
Como estamos trabajando con un lenguaje diferente a HTML podemos ordenar nuestro código en archivos con la extensión ``.css``

Dentro del ``<head>`` escribe los siguiente:
```html
<link rel="stylesheet" href="estilos.css">
```

Crea el archivo en cuestión ``estilos.css``
Y ahora escribamos nuestras primeras lineas de código CSS.

```css
h1{
    font-size: 50px;
}
```
Ten en cuenta que ahora todos los ``<h1>`` que crees tendrás los mismos estilos.

## Sintaxis
Definamos las reglas generales para escribir código CSS.

<img src='https://www.w3schools.com/css/selector.gif'>

* El selector apunta al elemento HTML que desea diseñar.
* El bloque de declaración contiene una o más declaraciones separadas por punto y coma.
* Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.
* Múltiples declaraciones CSS están separadas por punto y coma, y ​​los bloques de declaración están rodeados por llaves.

## Alernativas
Dentro del head puedes incluir código CSS:
```html
<style>
    p {
        color: palevioletred;
    }
</style>
```

Por lo tanto tienes 3 formas de trabajar con CSS:
* CSS externo
* CSS interno
* CSS en línea

:::tip ¿Por qué se llaman estilos en cascada?
Esto pasa porque se pueden sobre-escribir los estilos para un determinado elemento.
Por lo tanto, un estilo en línea tiene la máxima prioridad y anulará los estilos externos e internos y los valores predeterminados del navegador.
[https://www.w3schools.com/css/css_howto.asp](https://www.w3schools.com/css/css_howto.asp)
:::


## colores
[https://www.w3schools.com/css/css_colors.asp](https://www.w3schools.com/css/css_colors.asp)

#### Por nombre: (muy limitado)
* [https://www.w3schools.com/colors/colors_names.asp](https://www.w3schools.com/colors/colors_names.asp)

#### Colores en hexadecimal: (lo más utilizado)
* [https://www.w3schools.com/css/css_colors_hex.asp](https://www.w3schools.com/css/css_colors_hex.asp)
* [https://colorhunt.co/](https://colorhunt.co/)

#### RGB y RGBA: (podemos agregar transparencia)
* [https://www.w3schools.com/css/css_colors_rgb.asp](https://www.w3schools.com/css/css_colors_rgb.asp)

#### HSL
* [HSL #01](https://developer.mozilla.org/es/docs/Web/CSS/color_value#hsl())
* [HSL #02](https://www.w3schools.com/colors/colors_hsl.asp)


## Selectores
Hace referencia a como aplicamos estilos a determinados elementos HTML.
[https://www.w3schools.com/css/css_selectors.asp](https://www.w3schools.com/css/css_selectors.asp)

#### Elementos HTML
Estilos generales: Ya que todos nuestros párrafos tendrás el mismo diseño.
```css
p {
  text-align: center;
  color: red;
}
```

#### ID
Cuidado: Los ID son únicos por cada documento HTML por lo tanto <b>no puede haber dos o más elementos HTML con el mismo ID</b>.
```css
#mi_id_unico {
  text-align: center;
  color: red;
}
```
```html
<p id="mi_id_unico">Lorem ipsum dolor sit amet</p>
```

#### Clase
Ventaja: Podemos agregar esa clase a más de un elemento HTML.
```css
.mi-clase {
    background-color: #e8505b;
    color: #f3ecc2;
}
```
```html
<button class="mi-clase">Mi botón</button>
```

## Ejercicios
Trata de resolver los siguientes ejercicios:

* [Ejercicio 1](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors1)
* [Ejercicio 2](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors2)
* [Ejercicio 3](https://www.w3schools.com/css/exercise.asp?filename=exercise_selectors3)

## Práctica

<img :src="$withBase('/img/sitio-css-1.PNG')" alt="foo">

Documentación utilizada:
* [Etiquetas HTML](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/main)
* [Colores](https://colorhunt.co/palette/191657)
* [Width CSS](https://www.w3schools.com/cssref/pr_dim_width.asp)
* [Text align](https://www.w3schools.com/cssref/pr_text_text-align.asp)
* [Background color](https://www.w3schools.com/cssref/pr_background-color.asp)
* [Comentarios en CSS](https://www.w3schools.com/css/css_comments.asp)
* [html colores codes](https://htmlcolorcodes.com/es/)

```css
/* 
https://colorhunt.co/palette/191657 
*/

/* 
primary: #383e56
secondary: #f69e7b 
light: #eedad1
info: #d4b5b0
*/


.bg-primary {
    background-color: #383e56;
}

.bg-secondary {
    background-color: #f69e7b;
}

.bg-light {
    background-color: #eedad1;
}

.bg-info {
    background-color: #d4b5b0;
}

.text-primary {
    color: #383e56;
}

.text-secondary {
    color: #f69e7b;
}

.text-light {
    color: #eedad1;
}

.text-info {
    color: #d4b5b0;
}

.text-white {
    color: #fff;
}

.text-center {
    text-align: center;
}

.w-200 {
    width: 200px;
}
```

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer sitio web con CSS</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <!-- agregar secciones -->
    <header class="bg-primary text-center">
        <hr>
        <h1 class="text-light">Mi primer sitio web con estilos CSS</h1>
        <hr class="bg-primary">
        <p class="text-info">Lorem ipsum dolor sit amet consectetur.</p>
        <hr>
    </header>

    <!-- navbar -->
    <nav class="text-center">
        <button class="w-200 bg-secondary text-primary">Inicio</button>
        <button class="w-200 bg-secondary text-primary">Nosotros</button>
        <button class="w-200 bg-secondary text-primary">Servicios</button>
        <button class="w-200 bg-secondary text-primary">Blog</button>
        <button class="w-200 bg-secondary text-primary">Contacto</button>
    </nav>
    <!-- navbar -->

    <!-- main -->
    <main>
        <table>
            <tr>
                <td>
                    <div class="bg-info">
                        <hr>
                        <h3 class="text-center text-primary">Lorem, ipsum dolor.</h3>
                        <hr>
                        <p class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati nihil vitae
                            expedita neque aperiam a exercitationem tempore reiciendis recusandae, minima velit. Quis
                            voluptatem error delectus doloremque placeat aspernatur. Excepturi!
                        </p>
                        <hr>
                        <div class="text-center">
                            <button class="bg-primary text-white">Más información</button>
                        </div>
                        <hr>
                    </div>
                </td>
                <td>
                    <div class="bg-info">
                        <hr>
                        <h3 class="text-center text-primary">Lorem, ipsum dolor.</h3>
                        <hr>
                        <p class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati nihil vitae
                            expedita neque aperiam a exercitationem tempore reiciendis recusandae, minima velit. Quis
                            voluptatem error delectus doloremque placeat aspernatur. Excepturi!
                        </p>
                        <hr>
                        <div class="text-center">
                            <button class="bg-primary text-white">Más información</button>
                        </div>
                        <hr>
                    </div>
                </td>
                <td>
                    <div class="bg-info">
                        <hr>
                        <h3 class="text-center text-primary">Lorem, ipsum dolor.</h3>
                        <hr>
                        <p class="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati nihil vitae
                            expedita neque aperiam a exercitationem tempore reiciendis recusandae, minima velit. Quis
                            voluptatem error delectus doloremque placeat aspernatur. Excepturi!
                        </p>
                        <hr>
                        <div class="text-center">
                            <button class="bg-primary text-white">Más información</button>
                        </div>
                        <hr>
                    </div>
                </td>
            </tr>
        </table>
    </main>
    <!-- main -->

    <!-- pie de página -->
    <footer class="bg-secondary text-center">
        <hr>
        <p>Todos los derechos reservados 2020</p>
    </footer>
</body>

</html>
```