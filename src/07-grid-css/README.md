# 07 - CSS GRID

[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Fundamentos

CSS Grid Layout es el sistema de diseño más poderoso disponible en CSS. Es un sistema bidimensional, lo que significa que puede manejar tanto columnas como filas, a diferencia de flexbox, que es en gran medida un sistema unidimensional.

:::tip
Utilizaremos la misma referencia que Flexbox, existiendo un contendor padre e hijos directos.
:::

## Contenedor

```css
.grid-container {
  display: grid;
}

.item {
  background-color: cornflowerblue;
  color: white;
  padding: 2rem;
}
```

```html
<div class="grid-container">
  <div class="item">item #1</div>
  <div class="item">item #2</div>
  <div class="item">item #3</div>
  <div class="item">item #4</div>
  <div class="item">item #5</div>
  <div class="item">item #6</div>
</div>
```

## grid-template

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 400px 200px;
  grid-template-rows: 500px 100px;
  gap: 1rem 2rem;
}
```

## fr

```css{3}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 500px 100px;
  gap: 1rem 2rem;
}
```

## repeat

```css{3}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 500px 100px;
  gap: 1rem 2rem;
}
```

## gap

```css{3}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 500px 100px;
  /* gap: 1rem 2rem; */
  row-gap: 1rem;
  column-gap: 2rem;
}
```


