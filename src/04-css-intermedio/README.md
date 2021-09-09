# CSS Intermedio
Sigamos jugando con CSS.

## Bordes
[https://www.w3schools.com/css/css_border.asp](https://www.w3schools.com/css/css_border.asp)

```css
.border-solid {
    border-style: solid;
}

.border-dashed {
    border-style: dashed;
}
```

```html
<p class="border-solid">Lorem ipsum dolor sit amet.</p>
<a class="border-dashed" ref="#">Enlace</a>
```

## Display
[https://www.w3schools.com/css/css_display_visibility.asp](https://www.w3schools.com/css/css_display_visibility.asp)
La propiedad ``display`` es sumamente importante para controlar el diseño de nuestra página web.

### Elementos de bloque
```css
elemento {
    display: block;
}
```
Un elemento de nivel de bloque siempre comienza en una nueva línea y ocupa todo el ancho disponible (se extiende hacia la izquierda y la derecha tanto como sea posible).

#### Ejemplos de elementos a nivel de bloque:
* ``<div>``
* ``<h1> - <h6>``
* ``<p>``
* ``<form>``
* ``<encabezado>``
* ``<footer>``
* ``<sección>``

### Elementos en línea
```css
elemento {
    display: inline;
}
```
Un elemento en línea no comienza en una nueva línea y solo ocupa el ancho que sea necesario.

#### Ejemplos de elementos en línea:
* ``<span>``
* ``<a>``
* ``<img>``

#### HTML estilos por defecto
- [https://www.w3schools.com/cssref/css_default_values.asp](https://www.w3schools.com/cssref/css_default_values.asp)

#### ¿De línea o de bloque?
- [html reference](https://htmlreference.io/)

## Padding
Las paddingpropiedades CSS se utilizan para generar espacio alrededor del contenido de un elemento, dentro de cualquier borde definido.
Con CSS, tienes control total sobre el relleno. Hay propiedades para configurar el relleno para cada lado de un elemento (arriba, derecha, abajo e izquierda).
[https://www.w3schools.com/css/css_padding.asp](https://www.w3schools.com/css/css_padding.asp)

```css
.clase {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

```css
.clase {
  padding: 25px 50px 75px 100px;
}
```

```css
.clase {
  padding: 25px 50px;
}
```

```css
div {
  width: 300px;
  padding: 25px;
}
```
Aquí, el elemento ``<div>`` tiene un ancho de 300 px. Sin embargo, el ancho real del elemento `` <div>`` será de 350 px (300 px + 25 px de relleno izquierdo + 25 px de relleno derecho)


## Margin
Las marginpropiedades CSS se utilizan para crear espacio alrededor de los elementos, fuera de los bordes definidos.
[https://www.w3schools.com/css/css_margin.asp](https://www.w3schools.com/css/css_margin.asp)

```css
margin-top
margin-right
margin-bottom
margin-left
```

## Altura y ancho
Las propiedades ``height`` y ``width`` se utilizan para establecer el alto y el ancho de un elemento.
[https://www.w3schools.com/css/css_dimension.asp](https://www.w3schools.com/css/css_dimension.asp)

```css
.caja {
  height: 100px;
  width: 500px;
  background-color: powderblue;
}
```

## Display: inline-block
En comparación con ``display: inline``, la principal diferencia es que ``display: inline-block`` permite establecer un ancho y alto en el elemento.
Además, con display: ``inline-block``, se respetan los márgenes / rellenos superiores e inferiores, pero con ``display: inline`` no.
En comparación con ``display: block``, la principal diferencia es que ``display: inline-block`` no agrega un salto de línea después del elemento, por lo que el elemento puede sentarse junto a otros elementos.

[https://www.w3schools.com/css/css_inline-block.asp](https://www.w3schools.com/css/css_inline-block.asp)


## Modelo de caja
[https://www.w3schools.com/css/css_boxmodel.asp](https://www.w3schools.com/css/css_boxmodel.asp)


<!-- Ver antes los anchos para conocer box -->
## box-sizing
Para mantener el ancho a 300 px, sin importar la cantidad de relleno, puede usar la propiedad ``box-sizing: border-box``. Esto hace que el elemento mantenga su ancho; Si aumenta el relleno, el espacio de contenido disponible disminuirá.

[https://www.w3schools.com/css/css3_box-sizing.asp](https://www.w3schools.com/css/css3_box-sizing.asp)

Use la propiedad de tamaño de caja para mantener el ancho a 300 px, sin importar la cantidad de relleno:
```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## Unidades relativas vs Abosultas
En CSS se pueden utilizar diferentes unidades de medida y no existe "la más recomendable". Es necesario conocerlas y saber cómo funcionan en el contexto para evaluar cuál es la más conveniente en cada caso. [más info](https://www.laurachuburu.com.ar/tutoriales/unidades-de-medida-css.php)

### Medidas absolutas
Su valor se encuentra definido en términos concretos y de manera medible. Esto quiere decir que no depende de otro valor de referencia, ni del contexto.

- mm: milímetros.
- cm: centímetros.
- in: pulgada ("inches", en inglés). Una pulgada equivale a 2.54 centímetros.
- pt: puntos. Un punto equivale a 1 /72 de pulgada, es decir, unos 0.35 milímetros.
- pc: picas. Una pica equivale a 12 puntos, o aproximadamente a 4.23 milímetros.
- px: pixel. Es la unidad mínima de resolución de la pantalla. En realidad suele considerársela una unidad.

### Medidas relativas
Las unidades relativas no son valores exactos sino que se calculan a partir de otro valor de referencia. A pesar de parecer más difíciles de calcular son las más utilizadas en el diseño de sitios web responsive por su adaptabilidad a los diferentes dispositivos.

- em: Tamaño relativo al tamaño de texto de su contenedor.
- rem: Funciona igual que el em, con la diferencia que es relativo al valor de la fuente del elemento html

REM
```css
html {
    font-size: 16px;
}

h1 {
    font-size: 1rem;
    background-color: aqua;
    padding: 5rem;
}
```

EM
```css
html {
    font-size: 16px;
}

body {
    font-size: 32px;
}

h1 {
    /* Ahora serán 32px! */
    font-size: 1em;
    background-color: aqua;
    padding: 5rem;
}
```

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem;
    background-color: aqua;
    padding: 1em;

```

## Normalize CSS
[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

Normalize.css hace que los navegadores procesen todos los elementos de manera más consistente y en línea con los estándares modernos. Precisamente se dirige solo a los estilos que necesitan normalizarse.

## Práctica

### HTML
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica CSS</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <a href="/">Logo Empresa</a>
    </header>
    <nav>
        <a href="#">primary</a>
        <a href="#">secondary</a>
        <a href="#">danger</a>
        <a href="#">info</a>
    </nav>
    <section>
        <article>
            <img src="" alt="">
            <div>
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem quod adipisci a
                    eaque tempore recusandae voluptatibus atque sed ratione dolores, officia deserunt et dolorum sunt
                    velit quis excepturi eius.</p>
                <a href="https://www.google.cl/" target="_blank">Google</a>
            </div>
        </article>
    </section>
</body>

</html>
```

### Recursos
- [Normalize](https://necolas.github.io/normalize.css/)
- [Box Sizing](https://css-tricks.com/box-sizing/#universal-box-sizing-with-inheritance)
- [photos](https://picsum.photos/)
- [Fuentes](https://fonts.google.com/)
- [coolors.co](https://coolors.co/palettes/trending)

### Clases
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica CSS</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header class="container">
        <a href="/" class="logo">Logo Empresa</a>
    </header>
    <nav class="container mt-2">
        <a href="#" class="btn btn-primary">primary</a>
        <a href="#" class="btn btn-secondary">secondary</a>
        <a href="#" class="btn btn-danger">danger</a>
        <a href="#" class="btn btn-info">info</a>
    </nav>
    <section class="container mt-2">
        <article class="card">
            <img src="assets/img/800x500.jpg" alt="" class="card-img">
            <div class="card-body">
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem quod adipisci a
                    eaque tempore recusandae voluptatibus atque sed ratione dolores, officia deserunt et dolorum sunt
                    velit quis excepturi eius.</p>
                <a href="https://www.google.cl/" target="_blanck" class="btn btn-success">Google</a>
            </div>
        </article>
    </section>
</body>

</html>
```

### CSS
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
    font-family: 'Open Sans', sans-serif;
}

.mt-2 {
    margin-top: 2rem;
}

.container {
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    max-width: 600px;
    /* background-color: aqua; */
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
    background-color: #264653;
}

.btn-secondary {
    color: white;
    background-color: #2a9d8f;
}

.btn-danger {
    color: white;
    background-color: #e76f51;
}

.btn-info {
    color: black;
    background-color: #e9c46a;
}

.btn-success {
    color: black;
    background-color: #f4a261;
}

.logo {
    display: block;
    text-decoration: none;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding: 0.5em;
    background-color: #264653;
}

.card {
    width: 300px;
    background-color: #2a9d8f;
    color: white;
    overflow: hidden;
    border-radius: 0.5em;
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
    font-weight: 700;
}

.card-body p {
    font-weight: 300;
}
```

## Hosting
- [netlify.com](https://www.netlify.com/)