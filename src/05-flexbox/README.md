# 05 - CSS Flexbox

- [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [https://cssreference.io/](https://cssreference.io/flexbox/)

## Contenedor

Envolvemos todos nuestros items dentro de un div contenedor, el cual tendrá la clase `display: flex`

```html
<div class="border flex-container">
  <div class="item">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```

```css
.item {
  background-color: #fb7813;
  text-align: center;
  border: solid;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 200px;
}

.border {
  border: 2px #000 solid;
}

.flex-container {
  display: flex;
}
```

## flex-direction

- row
- row-reverse
- column
- column-reverse

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

## flex-wrap

- nowrap
- wrap
- wrap-reverse

Disminuir pantalla para visualizar cambios:

```css
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

## justify-content

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

```css
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
```

## align-items

Nos sirve para posicionar verticalmente los elementos si estos tienen alturas diferentes.

```css
.h-700 {
  height: 700px;
}

/* Colocar a un item */
.h-200 {
  height: 200px;
}
```

```html
<div class="border h-700 flex-container">
  <div class="item">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```

- stretch
- flex-start
- flex-end
- center
- baseline

```css
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
```

## align-content

No confundir con `aling-items` ya que ahora alineamos todo el contenedor verticalmente.

- flex-start
- flex-end
- space-between
- space-around
- space-evenly

```css
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-end;
}
```

## Propiedades para los items

## order

```css
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
.order-3 {
  order: 3;
}
```

```html
<div class="border h-700 flex-container">
  <div class="item order-1">item 1</div>
  <div class="item order-2">item 2</div>
  <div class="item order-3">item 3</div>
</div>
```

## flex-grow

Si todos los elementos se han establecido en `flex-grow:1`, el espacio restante en el contenedor se distribuirá por igual a todos item. Si uno de los item tiene un valor de 2, el espacio restante ocuparía el doble de espacio que los demás (o lo intentará, al menos).

:::tip
Sacar el ancho a los item para ver los resultados
:::

```html
<div class="border flex-container">
  <div class="item flex-grow-1">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```

```css
.flex-grow-1 {
  flex-grow: 1;
}
```

Jugar:

```html
<div class="border flex-container">
  <div class="item flex-grow-1">item 1</div>
  <div class="item flex-grow-3">item 2</div>
  <div class="item flex-grow-1">item 3</div>
</div>
```

## flex-shrink

Con `flex-shrink: 0;` hacemos que nuestro item no se reduzca de su tamaño establecido.

```css
.flex-shrink-0 {
  width: 400px;
  flex-shrink: 0;
}
```

```html
<div class="border flex-container">
  <div class="item flex-grow-1">item 1</div>
  <div class="item flex-grow-3 flex-shrink-0">item 2</div>
  <div class="item flex-grow-1">item 3</div>
</div>
```

:::tip
Prueba sacando la clase `flex-wrap: wrap;`
:::

Ahora con valor mayor a 0

```css
.flex-shrink-0 {
  width: 400px;
  flex-shrink: 1;
}
```

## flex-basis

Obligamos a un item a partir de una proporción determinada:

```css
.flex-basis-1 {
  flex-basis: 50%;
}
```

```html
<div class="border flex-container">
  <div class="item flex-grow-1 flex-basis-1">item 1</div>
  <div class="item flex-grow-3 flex-shrink-0">item 2</div>
  <div class="item flex-grow-1">item 3</div>
</div>
```

## flex

```css
.item {
  flex: flex-grow | flex-shrink | flex-basis;
}
```

```css
.flex-1 {
  flex: 1;
}
```

```html
<div class="border flex-container">
  <div class="item flex-grow-1 flex-basis-1">item 1</div>
  <div class="item flex-grow-3 flex-shrink-0">item 2</div>
  <div class="item flex-grow-1">item 3</div>
</div>

<div class="border flex-container">
  <div class="item flex-1">item 1</div>
  <div class="item flex-1">item 2</div>
  <div class="item flex-1">item 3</div>
</div>
```

Otro ejemplo:

```css
.flex-1 {
  flex: 1 1 300px;
}
```

## align-self

Esto permite que se anule la alineación predeterminada (o la especificada por `align-items`) para elementos flexibles individuales.

- Agregar altura a contendedor
- Agregar un align-items

```css
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}

.aling-self {
  align-self: flex-start;
}
```

```html
<div class="border flex-container h-700">
  <div class="item flex-1 aling-self">item 1</div>
  <div class="item flex-1">item 2</div>
  <div class="item flex-1">item 3</div>
</div>
```

## Notas

- [inline-flex](https://altruistas.org/flex-e-inline-flex-de-flex-box-en-css-y-html/)
- [Alinear icono y texto vertical](https://css-tricks.com/when-do-you-use-inline-block/)

Alinear icono y texto vertical
```css
.button {
  display: inline-flex;
  align-items: center;
}
```