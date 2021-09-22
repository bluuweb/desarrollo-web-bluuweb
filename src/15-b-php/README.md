# Mail PHP
Vamos a configurar un formulario con envío de formulario a través de PHP.

## Requisitos
- Hosting con PHP y habilitada la función mail (puede ser hosting compartido)
- Servidor Apache [xampp](https://www.apachefriends.org/es/index.html)
- Clear Cache [Extensión navegador](https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn?hl=es)
- Estudiar sección de Formularios 👍

## HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />

    <title>Form PHP</title>
  </head>
  <body>
    <div class="container">
      <h1 class="my-5">Form PHP</h1>
      
      <form class="row g-3" novalidate id="formulario">
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label">Usuario</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            name="usuario"
            required
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Escriba un usuario válido</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom02" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="validationCustom02"
            name="correo"
            required
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Escriba un correo válido</div>
        </div>
        <div class="col-md-12">
            <label for="validationCustom03" class="form-label">Mensaje</label>
            <textarea
              type="text"
              class="form-control"
              id="validationCustom03"
              name="mensaje"
              required
            /></textarea>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Escriba un mensaje</div>
          </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit" id="boton">Submit form</button>
            <div class="valid-feedback">Mensaje enviado con éxito 🙌</div>
            <div class="invalid-feedback">Ocurrió un error de servidor 😱, intentelo más tarde 🙏🏾</div>
        </div>
      </form>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>

    <script src="app.js"></script>
  </body>
</html>
```

## JS
```js
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const form = document.getElementById("formulario");
const usuario = document.getElementById("validationCustom01");
const correo = document.getElementById("validationCustom02");
const mensaje = document.getElementById("validationCustom03");
const boton = document.getElementById("boton");

form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        const data = new FormData(form);

        // Validar usuario
        if (!data.get("usuario").trim()) {
            console.log("campo vacio usuario");
            campoError(usuario);
            return
        } else {
            campoValido(usuario);
        }

        // Validar correo
        if (!data.get("correo").trim()) {
            console.log("campo vacio correo");
            campoError(correo);
            return
        } else {
            campoValido(correo);
        }

        // Validar mensaje
        if (!data.get("mensaje").trim()) {
            console.log(data.get("mensaje"));
            campoError(mensaje);
            return
        } else {
            campoValido(mensaje);
        }
        console.log("todos los campos completados");

        fetch("formulario.php", {
                method: "POST",
                body: data,
            })
            .then((res) => res.json())
            .then((datos) => {
                console.log(datos);

                if (datos.error && datos.campo === "usuario") {
                    console.log("error con usuario php");
                    campoError(usuario);
                    return;
                }
                campoValido(usuario);

                if (datos.error && datos.campo === "correo") {
                    console.log("error con correo php");
                    campoError(correo);
                    return;
                }
                campoValido(correo);

                if (datos.error && datos.campo === "mensaje") {
                    console.log("error con mensaje php");
                    campoError(mensaje);
                    return;
                }
                campoValido(mensaje);

                if (datos.error && datos.campo === 'mail') {
                    console.log('Existe un error con la función mail de php.')
                    campoError(boton);
                    return;
                }

                if (!datos.error) {
                    limpiarFormulario(form);
                    campoValido(boton)
                }
            })
            .catch((e) => {
                console.log(e)
                campoError(boton);
            });
    },
    false
);

const campoError = (campo) => {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
};

const campoValido = (campo) => {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
};

const limpiarFormulario = (form) => {
    console.log("Mensaje enviado con éxito!");
    form.reset();
    correo.classList.remove("is-valid");
    usuario.classList.remove("is-valid");
    mensaje.classList.remove("is-valid");
};
```

## PHP
```php
<?php

// isset — Determina si una variable está definida y no es null
// empty — Determina si una variable está vacía
// trim — Elimina espacio en blanco (u otro tipo de caracteres) del inicio y el final de la cadena

if($_POST){

    // Iniciarlizar variables POST
    $usuario = "";
    $correo = "";
    $mensaje = "";

    if(isset($_POST['usuario'])){
        $usuario = filter_var(trim($_POST['usuario']), FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['correo'])){
        $correo = filter_var(trim($_POST['correo']), FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['mensaje'])){
        $mensaje = filter_var(trim($_POST['mensaje']), FILTER_SANITIZE_STRING);
    }

    if(empty($usuario)){
        echo json_encode(array(
            'error' => true,
            'campo' => 'usuario'
        ));
        return;
    }

    if(empty($correo)){
        echo json_encode(array(
            'error' => true,
            'campo' => 'correo'
        ));
        return;
    }

    if(empty($mensaje)){
        echo json_encode(array(
            'error' => true,
            'campo' => 'mensaje'
        ));
        return;
    }

    // Cuerpo del mensaje
    $cuerpo = 'Usuario: ' . $usuario . "<br>";
    $cuerpo.= 'Email: ' . $correo . "<br>";
    $cuerpo.= 'Mensaje: ' . $mensaje . "<br>";

    // Dirección
    $destinatario = 'correoDestino@destino.com';
    $asunto = 'Mensaje de mi sitio web';

    // Para que acepte correo con HTML
    $headers  = 'MIME-Version: 1.0' . "\r\n" .'Content-type: text/html; charset=utf-8' . "\r\n" .'From: ' . $correo . "\r\n";

    if(mail($destinatario, $asunto, $cuerpo, $headers)){
        echo json_encode(array(
            'error' => false,
            'campo' => 'exito'
        ));
    }else {
        echo json_encode(array(
            'error' => true,
            'campo' => 'mail'
        ));
    }


}else {
    echo json_encode(array(
        'error' => true,
        'campo' => 'post'
    ));
    return;
}
```
