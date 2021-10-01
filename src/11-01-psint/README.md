# Programación (Fundamentos)
Aquí conoceremos los fundamentos de programación utilizando un pseudocódigo llamado PSeInt. Si tu no sabes nada de programación deberías comenzar por aquí.

<div class="text-center">
    <img :src="$withBase('/img/programar.gif')" alt="icono visual studio code git">
</div>

## Ventajas
- Estos conceptos te servirán para la mayoría de los lenguajes de programación.
- Pasar estas definiciones a Javascript será muy fácil.
- Nos ayuda visualmente como pensar como programadores.
- **Esta guía tiene ejemplos orientados a Javascript.**

## PSeInt
PSeInt es una herramienta para asistir a un estudiante en sus primeros pasos en programación. Mediante un simple e intuitivo **pseudolenguaje** en español (complementado con un editor de diagramas de flujo), le permite centrar su atención en los conceptos fundamentales de la algoritmia computacional, minimizando las dificultades propias de un lenguaje y proporcionando un entorno de trabajo con numerosas ayudas y recursos didácticos.

## Instalación
- [Descargar](http://pseint.sourceforge.net/)

Una vez instalado seleccionar la opción 3:
<div class="text-center">
    <img :src="$withBase('/img/pseint-1.JPG')" alt="icono visual studio code git">
</div>

## Herramientas
Tenemos las típicas herramientas como nuevo, abrir, etc. Las importantes serán:

- Corregir Indentado: Las buenas prácticas indican que un código bien indentado será de fácil lectura.
- Ejecutar
- Ejecutar paso a paso 
- Dibujar diagrama de flujo

<div class="text-center">
    <img :src="$withBase('/img/indentar.gif')" alt="icono visual studio code git">
</div>

## Click derecho
Sobre el texto "Algoritmo" damos click derecho nos saldrá una opción de definición, lo cual es sumamente útil para revisar conceptos:

- Algoritmo: Una secuencia de instrucciones es una lista de una o más instrucciones y/o estructuras de control. Comienza con la palabra clave Algoritmo (o alternativamente Proceso, son sinónimos) seguida del nombre del programa, luego le sigue una secuencia de instrucciones y finaliza con la palabra FinAlgoritmo (o FinProceso).

Ejemplo SUMA:
```js
// este es el ejemplo más simple de esta ayuda, 
// toma dos numeros, los suma y muestra el resultado

Algoritmo Suma


    // para cargar un dato, se le muestra un mensaje al usuario
    // con la instrucción Escribir, y luego se lee el dato en 
    // una variable (A para el primero, B para el segundo) con 
    // la instrucción Leer

    Escribir "Ingrese el primer numero:"
    Leer A

    Escribir "Ingrese el segundo numero:"
    Leer B


    // ahora se calcula la suma y se guarda el resultado en la
    // variable C mediante la asignación (<-)
    
    C <- A+B


    // finalmente, se muestra el resultado, precedido de un 
    // mensaje para avisar al usuario, todo en una sola
    // instrucción Escribir
    
    Escribir "El resultado es: ",C

FinAlgoritmo
```

## Paso a paso
Ejecutar opción paso a paso 🦶🦶 y seleccionar explicar en detalle c/paso:
<div class="text-center">
    <img :src="$withBase('/img/pseint-2.JPG')" alt="icono visual studio code git">
</div>

## Variables
Primero tenemos que conocer el concepto de variable:

- En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.
- Imagina como una caja que guarda un tipo de dato/valor.

<div class="text-center">
    <img :src="$withBase('/img/pseint-3.JPG')" alt="icono visual studio code git">
</div>

## Datos (pseint)
Los tipos posibles son NUMERO/REAL/ENTERO, LOGICO, CARACTER/TEXTO/CADENA. 

- **NUMERO, NUMERICO y REAL** son sinónimos para el tipo de datos numérico básico, que puede almacenar tanto números reales como enteros.
- **LOGICO** sólo puede tomar los valores VERDADERO y FALSO, pero cuando se lee una variable ya definida como lógica, el usuario puede ingresar también las abreviaciones V y F, o 0 y 1.
- **CARACTER, TEXTO y CADENA** son sinónimos para definir variables de tipo carácter. Estas pueden contener cero, uno o más caracteres arbitrarios y no tienen una longitud máxima.


```js
Algoritmo super_suma
	textoUno = "Esto es un String";
	Escribir textoUno;
	
	numeroUno = 25;
	Escribir numeroUno;
	
	estadoActual = Verdadero;
	Escribir estadoActual;
FinAlgoritmo
```

:::tip Asignación
- El signo `=` en Javascript se conoce como asignación (permite almacenar un valor a una variable).
- Se evalúa la expresión de la derecha y luego se le asigna el resultado a la variable de la izquierda.
:::

## Reglas (en Javascript)
Al momento de declarar una variable recuerda:
- Javascript es un lenguaje sensible a mayúsculas y minúsculas. <br> No es lo mismo **"NombreUsuario"** a **"nombreUsuario"**.
- No use guiones bajos al comienzo de los nombres de las variables — esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede resultar confuso.
- No uses números al comienzo de las variables. Esto no está permitido y provoca un error.
- Una convención segura a seguir es la llamada "minúscula mayúsculas intercaladas" (Camel case) 🐫.

## Punto y coma
El punto y coma indica el final de una sentencia, pero Javascript lo detecta automáticamente, por ende puedes o no colocarlo. A excepción del siguiente ejemplo:
<div class="text-center">
    <img :src="$withBase('/img/pseint-4.JPG')" alt="icono visual studio code git">
</div>

## Leer
- La instrucción Leer permite ingresar información desde el ambiente. 
- Si una variable no existe, se crea durante la lectura. Si la variable existe se pierde su valor anterior ya que tomará el valor nuevo, razón por la cual se dice que la lectura es "destructiva" (destruye el valor que tenía previamente la variable).

```js
Imprimir "Ingrese su nombre"
leer nombreUsuario
Imprimir "Bienvenido: " , nombreUsuario
```

## Concatenación
Nos sirve para unir una o más variables, también lo puedes mezclar con diferentes tipos de datos.

## Práctica
```js
Algoritmo super_suma
	
	Imprimir "Ingrese su nombre"
	leer nombreUsuario
	Imprimir "Bienvenido: " , nombreUsuario
	
	Imprimir "Ingrese primero número"
	leer primerNumero
	
	Imprimir "Ingrese segundo número"
	leer segundoNumero
	
	resultadoSuma = primerNumero + segundoNumero
	
	Imprimir nombreUsuario , " el resultado es: " , resultadoSuma
	
FinAlgoritmo
```

:::tip
Las variables traten de hacerlas lo más descriptivas posibles, este es un programa simple pero a futuro tendrás cientos de variables declaradas. Además si alguien revisa el código también se da una idea de lo que está ocurriendo.
:::

## Operadores
Existen diferentes tipos de operadores

- Operadores Aritméticos o Algebraicos o Matemáticos.
- Operadores de Comparación / Relacionales.
- Operadores lógicos.

## Operadores Aritméticos
En programación y matemáticas, los operadores aritméticos son aquellos que manipulan los datos de tipo numérico, es decir, permiten la realización de operaciones matemáticas (sumas, restas, multiplicaciones, etc.).. [más info](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math#operadores_aritm%C3%A9ticos)

Adición: Suma dos números juntos.
```js
resultado = 20 + 10;
Mostrar resultado;
```

Resta: Resta el numero de la derecha del de la izquierda.
```js
resultado = 20 - 10;
Mostrar resultado;
```

Multiplicación: Multiplica dos números juntos.
```js
resultado = 20 * 10;
Mostrar resultado;
```

División: Divide el número de la izquierda por el de la derecha.
```js
resultado = 20 / 10;
Mostrar resultado;
```

Sobrante (también llamado módulo): Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
```js
resultado = 10 % 3;
Mostrar resultado;
```

## Operadores relacionales
Los operadores relacionales o comparación definidos por PseInt son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (==) y distinto de (!=, <>).

```js
resultado = 10 > 11;
Mostrar resultado;
```

```js
resultado = 10 <= 10;
Mostrar resultado;
```

```js
resultado = 10 == 11;
Mostrar resultado;
```

```js
resultado = 10 <> 11;
Mostrar resultado;
```

## Operadores lógicos
Los operadores lógicos se usan para combinar dos valores Booleanos y devolver un resultado verdadero, falso o nulo. Los operadores lógicos también se denominan operadores Booleanos.

- && (y): Si los dos son verdaderos devuelve verdadero.
- || (o): Basta con que uno sea verdadero para que devuelva verdadero.
- ! (no): Negación

```js
resultado = 20 > 10 y 50 < 100
Mostrar resultado
```

```js
resultado = !Verdadero
Mostrar resultado
```

## Estructuras de control
En lenguajes de programación, las estructuras de control **permiten modificar el flujo de ejecución de las instrucciones de un programa**.

Condicionales
- if/else (Si ocurre algo, haz esto, sino, haz lo esto otro...)
- ?: operador ternario (Operador ternario: Equivalente a If/else , método abreviado.)
- switch (Estructura para casos específicos: Similar a varios If/else anidados.)

Repetitivas o iterativas
- while
- do... while
- for

## if/else (si/no)
Un if en programación se utiliza para evaluar una expresión condicional: **si se cumple la condición (es verdadera), ejecutará un bloque de código.**

<div class="text-center">
    <img :src="$withBase('/img/pseint-5.JPG')" alt="icono visual studio code git">
</div>

Intenta hacer esto:
<div class="text-center">
    <img :src="$withBase('/img/pseint-6.JPG')" alt="icono visual studio code git">
</div>

```js
Algoritmo super_suma
	Mostrar "Ingrese un número del 1 al 10"
	Leer numeroIngresado
	Si ( numeroIngresado <= 10 ) Entonces
		Escribir 'Correcto!!'
	SiNo
		Escribir 'Super mal!!'
	FinSi
FinAlgoritmo
```

```js
Algoritmo super_suma
	Mostrar "adivina número del 1 al 10"
	leer nUser
	nMaquina = 6
	Si (nUser == nMaquina)
		Mostrar "Adivinaste!!"
	SiNo
		Si(nMaquina > nUser)
			Mostrar "Era más alto"
		SiNo
			Mostrar "Era más bajo"
		FinSi
		Mostrar "El número era: " , nMaquina
	FinSi
FinAlgoritmo
```


## switch (segun)
Esta instrucción permite ejecutar opcionalmente varias acciones posibles, dependiendo del valor almacenado en una variable. Al ejecutarse, se evalúa el contenido de la variable y se ejecuta la secuencia de instrucciones asociada con dicho valor. 

<div class="text-center">
    <img :src="$withBase('/img/pseint-7.JPG')" alt="icono visual studio code git">
</div>

```js
Algoritmo menu
	Mostrar "¿Aburrido? elija una opción:"
	Mostrar "1. Lectura"
	Mostrar "2. Cine"
	Mostrar "3. Juego"
	Mostrar "Ingrese número"
	
	Leer opcionElegida
	
	Segun opcionElegida
		1: 
			Escribir "Lectura recomendada"
			Escribir "* Principito"
		2:
			Escribir "Película recomendada"
			Escribir "* Matrix"
		3: 
			Escribir "Juego recomendado"
			Escribir "* NFS"
		De Otro Modo:
			Escribir "opción no válida"
	FinSegun
	
FinAlgoritmo
```

## while (mientras)
Crea un bucle o loop que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera.

<div class="text-center">
    <img :src="$withBase('/img/pseint-8.JPG')" alt="icono visual studio code git">
</div>

```js
Algoritmo while
	n <- 0
	Mientras (n<=5) Hacer
		Escribir 'vuelta: ' , n
		n <- n+1
	FinMientras
FinAlgoritmo
```

## Juego adivinar
```js
Algoritmo super_suma
	numAzar = Aleatorio(1,10)
	Mostrar numAzar
FinAlgoritmo
```

```js
Algoritmo aprender_while
	// genero un número aleatorio
	nAzar = Aleatorio(1,10)

	intentos = 3
	
	Mostrar "adivina número del 1 al 10, tienes: " , intentos , " intentos"
	Mostrar "Ingresa número"
	leer nUser
	
    // si el número no es igual entrará al while
	Mientras (nAzar <> nUser y intentos > 1) 
		
        Si (nAzar > nUser)
			Mostrar "muy bajo"
		SiNo
			Mostrar "muy alto"
		FinSi

        // restamos 1 intento
		intentos = intentos - 1
		Mostrar "Te quedan... " , intentos , " intentos!"

        // caputamos número user
		Leer nUser
	FinMientras
	
	Si (nAzar == nUser)
		Mostrar "Adivinaste!!"
	SiNo
		Mostrar "Perdiste!! se te acabaron los intentos!"
	FinSi

FinAlgoritmo
```

## Array (Arreglos)
Los arrays son objetos **similares a una lista** cuyo prototipo proporciona métodos **para efectuar operaciones de recorrido** y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

```js
Algoritmo array_for
	
	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"
	
	Mostrar frutas[1]
	Mostrar frutas[2]
	Mostrar frutas[3]
	
FinAlgoritmo
```

En Javascript es dinámico por ende no necesitamos indicar la dimensión:
```js
let frutas = ["Manzana", "Platano", "Sandía"]
```

## for (para)
La instrucción **Para (for)** ejecuta una secuencia de instrucciones un número determinado de veces. 
<div class="text-center">
    <img :src="$withBase('/img/pseint-10.JPG')" alt="icono visual studio code git">
</div>

```js
Algoritmo array_for
	
	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"
	
	Para i Desde 1 Hasta 3 Hacer
		Mostrar frutas(i)
	FinPara

FinAlgoritmo
```


## for of
<div class="text-center">
    <img :src="$withBase('/img/pseint-9.JPG')" alt="icono visual studio code git">
</div>

```js
Algoritmo for_of
	
	Dimension frutas[3]
	frutas[1] = "Manzana"
	frutas[2] = "Platano"
	frutas[3] = "Sandía"
	
	Para Cada elemento de frutas Hacer
		Mostrar elemento
	FinPara
	
FinAlgoritmo
```

## Funciones
Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un **conjunto de instrucciones que realiza una tarea o calcula un valor**, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Función si argumento o parámetros
```js
Funcion Saludar
	Mostrar "Hola Bienvenido!"
FinFuncion

Algoritmo ejemplo_func
	
	Saludar()

FinAlgoritmo
```

Con argumentos
```js
Funcion Saludar (nombreUsuario)
	Mostrar "Hola Bienvenido! " , nombreUsuario
FinFuncion

Algoritmo ejemplo_func
	
	Saludar("Juanito")

FinAlgoritmo
```

Con retorno
```js
Funcion resultado = Sumar ( n1, n2 )
	resultado = n1 + n2
Fin Funcion

Algoritmo ejemplo_func
	
	Mostrar "Ingrese número 1"
	leer numUno
	Mostrar "Ingrese número 2"
	leer numDos
	
	Mostrar "Suma es: " , Sumar(numUno, numDos)

FinAlgoritmo
```

## Qué sigue...
<div class="text-center">
    <img :src="$withBase('/img/javascript.gif')" alt="icono visual studio code git">
</div>

<p class="text-center">
<b>En la próxima sección aterrizaremos todos estos conceptos a Javascript!</b>
</p>
