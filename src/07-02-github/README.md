# GIT Intermedio
Vamos a jugar con otros comandos super útiles de Git.

- [Explicación simple](https://pixelpioneers.co/blog/2017/git-basics-explained-by-designing-a-new-car)

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

## Introducción
- [fuente](https://www.atlassian.com/es/git/tutorials/undoing-changes)
- Una vez que se ha hecho un commit de los cambios, estos suelen volverse permanentes.
- Utiliza ``git checkout`` para desplazarte y revisar el historial de commits.
- ``git revert`` es la mejor herramienta para deshacer cambios públicos compartidos.
- ``git reset`` es más adecuado para deshacer cambios privados locales.

<div class="text-center">
    <img :src="$withBase('/img/reset.png')" alt="git merge" width="500px">
    <br>
    <a href="https://medium.com/mindorks/use-of-git-reset-git-revert-git-checkout-squash-commit-2b721ca2d2d3" target="_blank">Fuente imagen</a>
</div>


## git log --oneline
Nos muestra el identificador para poder revisar el historial de commit (Cada confirmación tiene un hash SHA-1 de identificación único.).
```sh
git log --oneline
```

```sh
a6d151c (HEAD -> master) 02-h2
a00beae 01-html
```

## git checkout
Si queremos visitar un commit en específico utilizamos:
```sh
git checkout a00beae
```

Durante el curso normal del desarrollo, HEAD apunta por lo general a la rama main u otra rama local ``(HEAD -> master)``, pero, cuando extraes una confirmación anterior, HEAD ya no apunta a una rama, sino que apunta directamente a una confirmación. Este estado recibe el nombre de **"HEAD desasociado" (detached HEAD)**

```sh
a00beae (HEAD) 01-html
```

Comprobar un commit específico pondrá el repositorio en un estado "HEAD desasociado". Esto significa que ya no estás trabajando en ninguna rama.

```sh
git checkout master
```

## ¿y si hago un commit?
En el caso de que visitemos un historial de un commit con checkout y comencemos a realizar cambios a partir de ese momento en el tiempo, **nuestro nuevo commit quedará huerfano**, no tendrá ninguna rama asociada (recuerden que estamos trabajando en master o main). Por lo tanto siguiendo el mismo ejemplo anterior:

```sh
git log --oneline
```

```sh
a6d151c (HEAD -> master) 02-h2
a00beae 01-html
```

```sh
git checkout a00beae
```

Realizamos cambios en el archivo y guardamos un nuevo commit
```sh
git add .
git commit -m "03-huerfano"
```

Ahora si queremos volver a la rama principal (master o main)
```sh
git checkout master
```

Tomar nota que efectivamente viajamos al último commit pero git nos recomienda hacer una nueva rama para el commit huerfano.

<div class="text-center">
    <img :src="$withBase('/img/checkout-1.JPG')" alt="adventencia de rama huerfana">
</div>

Todavía no vemos como hacer una rama así que lo dejamos hasta acá por el momento.

## Master a Main
- [Leer artículo](https://www.zdnet.com/article/github-to-replace-master-with-alternative-term-to-avoid-slavery-references/)

De forma global
```sh
git config --global init.defaultBranch main
```

Para un único proyecto
```sh
git branch -m master main
```

## git reset
- [fuente](https://www.freecodecamp.org/espanol/news/la-guia-definitiva-para-git-reset-y-git-revert/)
- Viaje a través de diferentes commit

Vamos a conocer como podemos movernos entre los diferentes commit que tengamos registrados, **Esto es útil si aún no has subido tu commit a GitHub o a otro repositorio remoto.**, supongamos que tenemos los siguientes commit:

```sh
17d793b (HEAD -> master) tercero.html
c97d996 nosotros.html
3f81f17 primer commmit
```

Viajamos al commit en específico c97d996
```sh
git reset --mixed c97d996
```
Podemos notar que no se restauran los archivos pero quedaron sin seguimiento, verás una "u" en VSCode.

Retrocedamos nuevamente
```sh
git reset 17d793b
```

Ahora vamos a utilizar un método destructivo: viajamos al commit en específico c97d996 y eliminamos los cambios futuros
```sh
git reset --hard c97d996
```

En caso de resturar los cambios podemos utilizar reflog: muestra todos los cambios incluso si borramos los commit
```sh
git reflog
```

Viajamos al commit en específico 17d793b y podemos restaurar los archivos
```sh
git reset --hard 17d793b
```

Para mayor información visite: [Click aquí](https://git-scm.com/book/es/v2/Herramientas-de-Git-Reiniciar-Desmitificado)

## Cuidado con Reset
Ambos comandos ``git revert`` y ``git reset``, deshacen commits anteriores. Pero si ya has subido tu commit a un repositorio remoto, se recomienda que no uses git reset, ya que reescribe el historial de commits. Esto puede hacer que trabajar en un repositorio con otros desarrolladores y mantener un historial consistente de commits sea muy difícil.

Solución: Restaurar a la última versión remota
```sh
git pull origin YOUR_BRANCH_NAME
```
- [fuente](https://docs.github.com/es/get-started/using-git/dealing-with-non-fast-forward-errors)

## git revert
En su lugar es mejor usar ``git revert``, deshace los cambios realizados por un commit anterior creando un commit completamente nuevo, todo esto sin alterar el historial de commits.

<div class="text-center">
    <img :src="$withBase('/img/revert.svg')" alt="revert vs reset">
    <br>
    <a href="https://www.atlassian.com/es/git/tutorials/undoing-changes/git-revert" target="_blank">Fuente imagen</a>
</div>


Ejemplo:
```sh
17d793b (HEAD -> main) tercero.html
c97d996 nosotros.html
3f81f17 primer commmit
```

```sh
git revert 3f81f17
```

Ventajas
- Revertir presenta dos ventajas importantes con respecto a restablecer. En primer lugar, no cambia el historial del proyecto, lo que la convierte en una operación "segura" para las confirmaciones que ya se han publicado en un repositorio compartido.
- En segundo lugar, el comando git revert puede dirigirse a una sola confirmación en un punto arbitrario del historial, mientras que git reset solo puede volver hacia atrás desde la confirmación actual. Por ejemplo, si quisieras deshacer una confirmación anterior mediante git reset, tendrías que eliminar todas las confirmaciones que se hubieran producido después de la confirmación a la que va destinada la acción, eliminarla y, acto seguido, volver a confirmar todas las confirmaciones posteriores.
- [fuente](https://www.atlassian.com/es/git/tutorials/undoing-changes/git-revert)

## Ramas o branch
Hasta el momento solo hemos trabajado en la rama "master" o "main" pero puede que necesitemos crear diferentes ramas para los seguimientos de git.

<div class="text-center">
    <img :src="$withBase('/img/feature.png')" alt="git merge" width="500px">
    <br>
    <a href="https://zepel.io/blog/how-to-create-a-new-branch-in-github/" target="_blank">Fuente imagen</a>
</div>

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

```js
// Nos muestra visualmente las ramas
git log --oneline --graph
```

```js
git push --set-upstream origin nombreRama
```

## git merge
Podemos unir una rama con la nueva, para eso tenemos que estar en la rama para ejecutar el siguiente comando:

Tenemos que estar en la rama que está esperando los cambios (los nuevos cambios):
```sh
git merge nombreRama
```

```sh
git log --oneline --graph
```

<div class="text-center">
    <img :src="$withBase('/img/git-merge.gif')" alt="git merge" width="500px">
</div>

```js
// Eliminar una rama
git branch -d nombreRama
```

::: tip Atajos
Podemos utilizar `git checkout -b nuevaRama` para crear la nuevaRama y viajar a ella.
:::

## Conflictos
<div class="text-center">
    <img :src="$withBase('/img/conflicto-2.JPG')" alt="conflicto en ramas unidas">
</div>

Puedes utilizar las herramientas de VSCode o bien hacer los cambios manualmente en el archivo. **Lo importante es hacer un nuevo commit al finalizar.**

```sh
git add .
git commit -m "solucion de conflicto"
```

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

<!-- ## Fetch
Este comando hace la comparación de nuestros archivos locales con los del servidor, si existiera alguna diferencia nos pediría realizar un `get pull` para realizar un match de nuestros arhivos locales.

```
git fetch
``` -->