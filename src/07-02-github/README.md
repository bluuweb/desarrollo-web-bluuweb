# GIT Intermedio
Github es la plataforma online para trabajar con proyectos en git, en simples palabras es utilizar git de forma remota pero entiendase que son cosas totamente distintas

## Creando alias globales
Los alias nos sirven para crear atajos de comandos, podemos guardar diferentes alias de forma global y quedarán guardados en la configuración de git.

``` js
// Guardamos el alias "lg" que ejecutará todo lo que está entre comillas
git config --global alias.lg "log --oneline --decorate --all --graph"
```

``` js
// Para ver el archivo config con los alias creados
git config --global -e
```

**Vim** es el editor de código en la línea de comandos

::: tip Salir del modo edición "Vim"
Para salir del modo edición de la líneas de comando precionar `:q`, en caso de realizar algún cambio sin guardar escribir `:qa` <br>
`:q!` también sirve para salir sin guardar
:::

``` js
// Modo lectura sin poder modificar
git config --global -l
```

``` js
// Realiza el add . y commit más mensaje al mismo tiempo
git commit -am "más comandos agregados"
```

``` js
// Para editar un commit, como por ej: el mensaje
git commit --amend
```

:::tip Trucos de editor Vim
`i` para comenzar a editar <br>
`esc` para salir del modo edición <br>
`wq` para guardar y salir <br>
`:q!` salir sin guardar cambios
:::


## Viajes a través de los commit
Vamos a conocer como podemos movernos entre los diferentes commit que tengamos registrados, supongamos que tenemos los siguientes commit:

* f82f457 (HEAD -> master) mas comandos agregados
* f52f3da nuevos comandos en fundamentos.md
* e4ab8af mi primer commit

``` js
// Viajamos al commit en específico f52f3da
git reset --mixed f52f3da
```

``` js
// Viajamos al commit en específico f52f3da y eliminamos los cambios futuros
git reset --hard f52f3da
```

``` js
// Muestra todos los cambios incluso si borramos los commit
git reflog
```

``` js
// Viajamos al commit en específico f52f3da y podemos restaurar los archivos
git reset --hard f52f3da
```

Si no hicimos un commit pero aún así queremos revertir los cambios en un archivo específico podríamos utilizar el siguiente comando:

```
git checkout -- nombreArchivo.conExtensión
```

Si deseamos destruir todos los cambios sin haber realizado un commit podemos utilizar:

```
git reset --hard
```

Para mayor información visite: [Click aquí](https://git-scm.com/book/es/v2/Herramientas-de-Git-Reiniciar-Desmitificado)


## Renombrar archivos
Puede que queramos renombrar un archivo, es recomendable hacerlo directamente en la línea de comandos para registrar los cambios con git.

``` js
// Cambiar nombre
git mv nombreOriginal.vue nombreNuevo.vue
```
Recuerden hacer el commit para registrar los cambios en git.

## Eliminar archivos
``` js
// Cambiar nombre
git rm nombreArchivo.vue
```
También recordar hacer el commit para salgar cambios en git.

## Ignorando Archivos
Para no hacer seguimiento de carpetas o archivos, debemos crear el siguiente archivo:
* .gitignore
<br>
Su estructura de ejemplo sería así:

```js
arhivo.js // Ignora el archivo en cuestion
*.js // Ignora todos los arhivos con extensión .js
node_modules/ //Ignora toda la carpeta
```

## Ramas o branch
Hasta el momento solo hemos trabajado en la rama "master" pero puede que necesitemos crear diferentes ramas para los seguimientos de git.

```js
// Crea una nueva rama
git branch nombreRama
```

```js
// Nos muestra en que rama estamos
git branch
```

```js
// Nos movemos a la nueva rama
git checkout nombreRama
```

Podemos unir la rama master con la nueva, para eso tenemos que estar en la master para ejecutar el siguiente comando:

```js
// Nos movemos a la nueva rama
git merge nombreRama
```

```js
// Eliminar una rama
git branch -d nombreRama
```

::: tip Atajos
Podemos utilizar `git checkout -b nuevaRama` para crear la nuevaRama y viajar a ella.
:::

## Tags
Con los tags podemos hacer versiones de nuestro proyecto.

```js
// Crear un tags
git tag versionAlpha -m "versión alpha"
```

```js
// Listar tags
git tag
```

```js
// Borrar tags
git tag -d nombreTags
```

```js
// Hacer una versión en un commit anterior ej: f52f3da
git tag -a nombreTag f52f3da -m "version alpha"
```

```js
// Mostrar información del tag
git show nombreTag
```

## GITHUB: Subir los tags
Por defecto si creaste un proyecto con diferentes versiones no subirá los tags, para eso tenemos el siguiente comando.

```
git push --tags
```

## Push
Al ejecutar el comando `git push` estaremos subiendo todos los cambios locales al servidor remoto de github, ten en cuenta que tienes que estar enlazado con tu repositorio, para eso puedes utilizar `git remote -v` luego ejecuta:

```
git push
```

## Pull
Cuando realizamos cambios directamente en github pero no de forma local, es esencial realizar un pull, donde descargaremos los cambios realizados para seguir trabajando normalmente. <br>
Es importante estar enlazados remotamente, puedes verificar con: `git remote -v`, luego ejecuta:

```
git pull
```

## Fetch
Este comando hace la comparación de nuestros archivos locales con los del servidor, si existiera alguna diferencia nos pediría realizar un `get pull` para realizar un match de nuestros arhivos locales.

```
git fetch
```