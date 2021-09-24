# GIT y Github Fundamentos

Está guía está diseñada para poder obtener el código del curso de GIT / GITHUB de una forma amigable y en español.

## Enlaces
- [Instalar Git](https://git-scm.com/)
- [Github](https://github.com/)

## ¿Qué es GIT?
Es un software de control de versiones, su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos (También puedes trabajar solo no hay problema :)). Existe la posibilidad de trabajar de forma remota y una opción es GitHub.

## ¿Para qué usar GIT?
- Permite regresar a versiones anteriores de forma sencilla y muy rápida.
- Facilita el trabajo colaborativo.
- Permite respaldar tus proyectos en la nube (ej con github).
- Reduce considerablemente los tiempos de deploy.
- Las "branches" o ramas, permiten trabajar con una base de código paralela al proyecto en sí.
- [Fuente](https://blog.coffeedevs.com/8-razones-para-usar-git/)

### Flujo de trabajo de GIT
<div class="text-center">
<br>
<img :src="$withBase('/img/caja-git.png')" alt="flujo git" width="500px">

[Fuente](https://medium.com/nerd-for-tech/a-non-scary-introduction-to-the-wondrous-world-of-git-eb213643a4e8)

<br>
<br>
<img :src="$withBase('/img/git-flujo.png')" alt="flujo git" width="500px">

</div>

:::tip
Tus proyectos vinculados a git serán un repositorio
:::

**Tratando de explicar la imagen:** Tenemos nuestro directorio local (una carpeta en nuestro pc) con muchos archivos, Git nos irá registrando los cambios de archivos o códigos cuando nosotros le indiquemos, así podremos viajar en el tiempo retrocediendo cambios o restaurando versiones de código, ya sea en Local o de forma Remota (servidor externo). En la práctica quedará más claro.

## ¿Qué es GitHub?
Es una plataforma de desarrollo colaborativo para alojar proyectos (en la nube) utilizando el sistema de control de versiones Git, Además cuenta con una herramienta muy útil que es GitHub Pages donde podemos publicar nuestros proyectos estáticos (HTML, CSS y JS) gratis.

## Fundamentos de GIT
En este apartado podrás comenzar a trabajar con git.

## Comandos básicos
Aprendamos los primeros comandos con git

### Versión de git
``` js
git version
```

### Registrar nuevo usuario asociado a git:

:::warning
**No colocar como nombre de usuario** el correo de su cuenta de Github, podría traer problemas a futuro.
:::

```js
git config --global user.name "mi nombre"
```

Es recomendable utilizar el correo asociado a Github
```js
git config --global user.email "myemail@example.com"
```

```js
git config user.name
git config user.email
```

### Ayuda
``` js
// Ayuda sobre los comandos
git help
```

### Mi primer repositorio
``` js
// Iniciar un nuevo repositorio
// Crear la carpeta oculta .git
// Solo se ejecuta una vez por proyecto
git init
```

``` js
// Ver que archivos no han sido registrados
git status -s
```

``` js
// Agregar todos los archivos para que esté pendiente de los cambios
git add .
```

<div class="text-center">
    <img :src="$withBase('/img/scaner.gif')" alt="add archivos git">
</div>

``` js
// Crear commit (fotografía del proyecto en ese momento)
git commit -m "primer commit"
```

``` js
// Muestra la lista de commit del mas reciente al más antigüo
git log --oneline
```

En resumidas cuentas nosotros realizamos cambios en nuestros archivos, el comando `status` verificará que archivos han sidos modificados.
Cuando deseemos registrar esos cambios tendremos que agregarlos con `add .` así ya estará listo para poder hacer un commit.
El `commit` realiza la copia de ese instante para poder volver en el tiempo si es que es necesario.

::: tip Diferencias entre -- y -
`--decorate` hace referencia a una palabra <br>
`-s` hace referencia al comando o a varios comandos, `-sa` serían dos comandos diferentes
:::

``` js
// Vemos información de la rama maestra
git status -s -b
git status -sb //Hace lo mismo que el comando anterior
```

**Vim** es el editor de código en la línea de comandos

::: warning Salir del modo edición "Vim"
Para salir del modo edición de la líneas de comando precionar `:q`, en caso de realizar algún cambio sin guardar escribir `:qa` <br>
`:q!` también sirve para salir sin guardar
:::

## VSCode
Visual Studio Code tiene un apartado de Git, el cual de manera visual podemos trabajar.

<div class="text-center">
    <img :src="$withBase('/img/git-vscode.JPG')" alt="icono visual studio code git">
</div>

## Github
- [github](https://github.com/)

<br>
<div class="text-center embed-container">
    <iframe src="https://www.youtube.com/embed/L_lWQZNhN7w?start=1166" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Crear repositorio
<div class="text-center">
    <img :src="$withBase('/img/repo-github.JPG')" alt="icono visual studio code git">
</div>

```sh
git remote add origin https://github.com/bluuweb/tutorial-github.git
git push -u origin master
```

Al ejecutar estas líneas de comando te pedirá el usuario y contraseña de tu cuenta de github.

:::warning
En caso de que no pida las credenciales o bien tengas otra cuenta vinculada, puedes reiniciar con:
- Panel de control ->
- Cuentas de usuario ->
- Administrar credenciales ->
- Credenciales de Windows ->
- Buscar git:https//github.com y quitar
:::

``` js
// Nos muestra en que repositorio estamos enlazados remotamente.
git remote -v
```

## Push
Para futuros cambios y subir los registros a github ejecutar:
```sh
git add .
git commit -m "nuevo commit"
git push
```

## Clonar repositorio
Para descargar un repositorio completo basta con tomar la url ej: `https://github.com/bluuweb/tutorial-github.git` y ejecutar el siguiente comando en alguna carpeta de su computadora.

```
git clone https://github.com/bluuweb/tutorial-github.git nombreCarpeta
```

## Github pages
<br>
<div class="text-center">
    <img :src="$withBase('/img/github-page.JPG')" alt="icono visual studio code git" width="500px">
</div>