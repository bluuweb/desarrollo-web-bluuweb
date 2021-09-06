# 02 - HTML Intermedio
Conozcamos cosas más avanzadas de HTML

## Tablas
```html
<table border='1'>
    <tr>
        <td>Gato</td>
        <td>3 años</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>Perro</td>
        <td>1 mes</td>
        <td>Azul</td>
    </tr>
</table>
```

* `<table></table>` Comienzo y final de una tabla.
* `<tr></tr>` Comienzo y final de una fila.
* `<td></td>` Contenido de una celda.

```html{3-5}
<table border='1'>
    <tr>
        <th>Mascota</th>
        <th>Edad</th>
        <th>Color</th>
    </tr>
    <tr>
        <td>Gato</td>
        <td>3 años</td>
        <td>Negro</td>
    </tr>
    <tr>
        <td>Perro</td>
        <td>1 mes</td>
        <td>Azul</td>
    </tr>
</table>
```

* `<th>Mascota</th>` Define la fila de encabezado

```html{2-3}
<table border='1'>
    <!-- Título de la tabla -->
    <caption>Titulo de la tabla</caption>
    <tr>
        <th>Mascota</th>
        <th>Edad</th>
        <th>Color</th>
    </tr>
    ...
```

#### Estructurar en partes tablas grandes
```html{4,10,12,18,31}
<table border='1'>
    <caption>Titulo de la tabla</caption>
    <!-- Encabezado -->
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <!-- Pie de tabla -->
    <tfoot>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </tfoot>
    <!-- contenido -->
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td>Azul</td>
        </tr>
    </tbody>
</table>
```

#### Combinar
```html{22}
<table border='1'>
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td>Azul</td>
        </tr>
        <tr>
            <td>Rana</td>
            <td colspan="2">Desconocido</td>
        </tr>
    </tbody>
</table>
```

```html{18}
<table border='1'>
    <thead>
        <tr>
            <th>Mascota</th>
            <th>Edad</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Gato</td>
            <td>3 años</td>
            <td>Negro</td>
        </tr>
        <tr>
            <td>Perro</td>
            <td>1 mes</td>
            <td rowspan="2">Azul</td>
        </tr>
        <tr>
            <td>Rana</td>
            <td>2 semanas</td>
        </tr>
    </tbody>
</table>
```

## Formularios
[https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
Los formularios web son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Los formularios permiten a los usuarios ingresar datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento.

#### form
Define el contenedor para el formulario. Admite algunos atributos específicos para configurar la forma en que se comporta el formulario. Todos sus atributos son opcionales, pero es una práctica estándar establecer siempre al menos los atributos action y method:
```html
<form action="" method="">

</form>
```

#### input
Aquí es donde nuestro usuario puede ingresar datos. Contamos con varios atributos:
* `type` dato que recibirá el input.
* `placeholder` texto de ayuda para el usuario.
* `id` identificador único.
* `name` nombre del input, nos sire para asociar información al dato ingresado por ejemplo: <br><b>curso = "texto proporcionado por el usuario"</b>
```html
<input id="curso" type="text" placeholder="Ingrese un curso" name="curso">
```

#### label
Texto adicional que describe al ``input`` es por esto que cuenta con el atributo ``for`` donde ingresamos el id del ``input``.
```html
<label for="curso">Curso: </label>
```

#### button
Es un botón para procesar nuestro formulario es por esto que cuenta con el atributo `submit`
```html
<button type="submit">Enviar</button>
```

#### Formulario completo
```html
<form action="recibir.html" method="GET">
    <label for="curso">Curso: </label>
    <input id="curso" type="text" placeholder="Ingrese un curso" name="curso">
    <button type="submit">Enviar</button>
</form>
```

## Input
Existen diferentes tipos de `input`
[https://www.w3schools.com/tags/tag_input.asp](https://www.w3schools.com/tags/tag_input.asp)

```html
<form action="recibir.html" method="GET">
    <input type="email" required>
    <button type="submit">Enviar</button>
</form>
```

```html
<input type="password">
```

```html
<textarea name="mensaje" rows="10" cols="30">
Ingrese aquí su mensaje
</textarea>
```

```html
<form>
    <input type="radio" id="gato" name="gender" value="gato">
    <label for="gato">Gato</label>
    <input type="radio" id="perro" name="gender" value="perro">
    <label for="perro">Perro</label>
    <input type="radio" id="otro" name="gender" value="otro">
    <label for="otros">Otro</label>
</form>
```


```html
<input type="button" value="Enviar">
```

```html
<input type="color">
```

```html
<input type="date">
<input type="datetime-local">
```

```html
<input type="file">
```

```html
<input type="month">
```

```html
<input type="range">
```

```html
<input type="time">
```

```html
<input type="week">
```

En la siguiente sección conoceremos los estilos en CSS y hablaremos un poco más sobre los formularios.
