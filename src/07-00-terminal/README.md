# Terminal CMD

Este es un tutorial introductorio al símbolo del sistema (CMD.exe), o consola de Windows o línea de comandos.

## Abrir cmd.exe
- Busca la lupa de windows y escribe "cmd", aparecerá un programa llamado "símbolo del sistema" click y wuala 👏

## Para qué nos sirve
- Posteriormente vamos a conocer el controlador de versiones "GIT", este trabaja de manera óptima a través de la terminal.
- Además cuando comiences a trabajar con node.js podrás instalar dependencias a través de npm utilizando la terminal.

## ¿Cómo funciona?
Una línea de comandos (a menudo también conocida como consola o terminal) es una interfaz basada en texto dentro de un sistema operativo a través de la que los usuarios envían **comandos** al sistema operativo. De esta manera pueden, por ejemplo, **organizarse archivos**, **iniciar programas** o ejecutarse otros comandos que afectan al sistema operativo, al ordenador o a la red. [fuente](https://www.ionos.es/digitalguide/servidores/know-how/comandos-cmd/#:~:text=Una%20l%C3%ADnea%20de%20comandos%20(a%20menudo%20tambi%C3%A9n%20conocida%20como%20consola%20o%20terminal)%20es%20una%20interfaz%20basada%20en%20texto%20dentro%20de%20un%20sistema%20operativo%20a%20trav%C3%A9s%20de%20la%20que%20los%20usuarios%20env%C3%ADan%20comandos%20al%20sistema%20operativo.)

## Help
Este comando nos sirve para mostrar una lista de todos los comandos y su definición.

```sh
help
```

```sh
help exit
```

Ejecuta ahora
```sh
exit
```

<img :src="$withBase('/img/error-1.JPG')" alt="mensaje error al escribir en la terminal"></img>


## Comandos básicos
- [Lista de comandos](https://www.ionos.es/digitalguide/servidores/know-how/comandos-cmd/#:~:text=derechos%20de%20administrador.-,Fundamentos,-Comando%20CMD)

## CD
Muestra el nombre del directorio actual o cambia de directorio
```sh
cd
```

Si quisieramos viajar a esta ruta: "C:\Users\bluuweb\Desktop\jugando con la terminal"
```sh
cd Desktop
cd jugando con la terminal
cd "jugando con la terminal"
```

Para retroceder un directorio utiliza
```sh
cd ..
```

Atajo:
```sh
cd C:\Users\bluuweb\Desktop\jugando con la terminal
```

:::tip
También en la barra de navegación de la carpeta puedes escribir ``cmd`` y se abrirá la consola con la ruta actual de dicha carpeta.
:::

## DIR
El comando lista el contenido del directorio o carpeta donde te encuentras, mostrando todas las subcarpetas o archivos que tiene. Con este comando podrás saber si el archivo que buscas está ahí o a qué subcarpeta navegar.

```sh
dir
```

## CLS
Limpia la consola.

```sh
cls
```

## MKDIR o MD
Sirve para crear una carpeta

```sh
md assets
```

```sh
mkdir nueva-carpeta
```

## MOVE
Podemos mover archivos a otras carpetas
```sh
move app.js assets
```

En caso de mover a otro directorio utilizar comillas dobles "C:\Users\bluuweb\Desktop"
```sh
move index.html "C:\Users\bluuweb\Desktop"
```

## CTRL + C
A veces necesitamos terminar con una ejecución, este comando es muy útil.

## PowerShell
Diferencias:

Necesitamos las comillas si la carpeta tiene espacios:
```cd
cd "jugando con la terminal"
```

Podemos utilizar `mv` o `move` para mover carpetas:
```sh
mv prueba nueva-carpeta
```

Podemos ver el path o ruta actual con:
```sh
pwd
```

Crear archivos
```sh
ni index.html
```

## VSCode
Visual Studio Code tiene una opción para abrir una terminal integrada, la gracia es que nos deja en el directorio del proyecto, muy útil para poder trabajar posteriormente con git o npm.

<img :src="$withBase('/img/power-config.JPG')" alt="configurar powershell en vscode"></img>