# PostgreSQL Normalización
Conozcamos como normalizar nuestra base de datos.

## Normalización
- [fuente #01](https://explodat.cl/Analytics/desarrollo-de-software/normalizacion-de-bases-de-datos/)
- La normalización es el proceso de seguir una serie de reglas (formas normales), para asegurar que nuestras relaciones estén **ordenadas y regularizadas** con el fin de **mejorar** dichas relaciones.
- Están enfocadas en evitar la redundancia de datos e inconsistencias en el diseño de nuestras tablas.

## ¿Por qué normalizar?
- Evitar redundancia de datos
- Proteger la integridad de los datos
- Evitar problemas de actualiación.

:::tip ¿Cómo normalizar una DB?
- Se siguen **en un proceso ordenado** las formas normales (FN).
- Por ende partimos con 1FN, 2FN... hasta la 6FN.
- Lo tradicional es llegar hasta la 3FN.
:::

## Ejemplo
<div class="text-center">
    <img :src="$withBase('/img/fn-0.JPG')" alt="relacion todo sql">
</div>

## 1FN (primera forma normal)
- Cada campo o atributo deben ser atómicos, es decir debe contener un único valor.
- No pueden haber grupos repetitivos.
- Existir una llave primaria.

### Solución 1
- Todos los datos son atómicos
- Pero telefono 1 y telefono 2 es un grupo repetitivo, esto genera:
    - Pérdida de espacios de memoría.
    - Limitar a solo dos teléfonos nuesta DB.

<div class="text-center">
    <img :src="$withBase('/img/fn-10.JPG')" alt="relacion todo sql">
</div>

## Solución 2

<div class="text-center">
    <img :src="$withBase('/img/fn-11.JPG')" alt="relacion todo sql">
</div>

### Redundancia solución 2
- Podemos notar que si un paciente pide otra hora médica genera redundancia en nuestra tabla. Por ende tenemos que separar en una nueva relación:

<div class="text-center">
    <img :src="$withBase('/img/fn-12.JPG')" alt="relacion todo sql">
</div> 

:::tip
Antes de pasar a 2FN, conozcamos los tipos de dependencia.
:::

## Tipos de dependencia
- **Dependencia Funcional**: Los atributos dependen de la clave primaria.
- B y C dependen funcionalmente de A (clave primaria).
- Para que exista B debe existir A. y lo mismo para C.

<div class="text-center">
    <img :src="$withBase('/img/fn-20.JPG')" alt="relacion todo sql">
</div>


- **Dependencia Transitiva**: 
- B depende funcionalmente de A.
- C depende de B, pero como B depende de A, C tiene una dependencia transitiva de A.

<div class="text-center">
    <img :src="$withBase('/img/fn-20.JPG')" alt="relacion todo sql">
</div>


## 2FN (segunda forma normal)
- Debe cumplir con 1FN.
- Cada atributo debe depender de la llave primaria, y no solo una parte de ella.
- Los atributos que dependen de manera parcial de la llave primaria deben ser
eliminados o almacenados en una nueva entidad.

<div class="text-center">
    <img :src="$withBase('/img/fn-12.JPG')" alt="relacion todo sql">
</div> 

### Llave primaria compuesta
- compuesta de "idpaciente", "especialidad" y "fecha atencion"
- si analizamos "area" esta depende exclusivamente de la especilidad y no del id del paciente, por ende no cumple con la 2FN (Cada atributo debe depender de la llave primaria, y no solo una parte de ella.)

<div class="text-center">
    <img :src="$withBase('/img/fn-21.JPG')" alt="relacion todo sql">
</div> 

## 3FN (tercera forma normal)
- Debe cumplir con 2FN.
- Eliminar toda dependencia transitiva.

<div class="text-center">
    <img :src="$withBase('/img/fn-30.JPG')" alt="relacion todo sql">
</div> 

## ¿Desnormalizar?
- Dependerá de cada caso, si es más factible duplicar datos que realizar múltiples relaciones que pueden ser complejas.

<div class="text-center">
    <img :src="$withBase('/img/fn-31.JPG')" alt="relacion todo sql">
</div> 
