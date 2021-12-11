# PostgreSQL SELECT

En este tutorial veremos:
- SELECT
    - DISTINCT
    - ORDER BY
    - WHERE
    - LIMIT
    - GROUP BY
    - HAVING
    - JOIN (próxima clase)

:::tip ver video anterior
- [Fundamentos de PostgreSQL](https://youtu.be/0ORzpdQrnxE)
:::

## Ejercicio Cafetería
- [Modelo completo](http://www.databaseanswers.org/data_models/amazon_and_starbucks/index.htm)
- [Modelo tutorial](http://www.databaseanswers.org/tutorial4_data_modelling_dimple_and_toby_visit_starbucks/index.htm)
- [Ejemplo modelo Juego Planeshift](https://sourceforge.net/p/planeshift/code/HEAD/tree/trunk/src/server/database/)

Modelo entidad relación (ERD):
<div class="text-center">
    <img :src="$withBase('/img/cafe-1.JPG')" alt="relacion todo sql">
</div>

- [tipos de datos](http://codigoelectronica.com/blog/postgresql-tipo-de-datos)
- [tipo de datos numéricos](https://www.postgresql.org/docs/9.1/datatype-numeric.html)
- [NUMERIC](https://www.tutorialesprogramacionya.com/postgresqlya/temarios/descripcion.php?cod=174&punto=16&inicio=): El primer argumento indica el total de dígitos y el segundo, la cantidad de decimales.
- [CHECK](https://www.postgresqltutorial.com/postgresql-check-constraint/): Es un tipo de restricción que le permite especificar si los valores de una columna deben cumplir un requisito específico.

```sql
DROP TABLE IF EXISTS ordenes;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS productos;

CREATE TABLE clientes (
	cliente_id SERIAL PRIMARY KEY,
	cliente_nombre VARCHAR(50)
);

CREATE TABLE productos (
	producto_id SERIAL PRIMARY KEY,
	producto_nombre VARCHAR(50),
	producto_precio NUMERIC(6,2) CHECK(producto_precio >= 0),
	producto_stock SMALLINT CHECK(producto_stock >= 0) DEFAULT 0,
	producto_tipo VARCHAR(20)
);

CREATE TABLE ordenes (
	orden_id SERIAL PRIMARY KEY,
	cliente_id INT REFERENCES clientes(cliente_id),
	producto_id INT REFERENCES productos(producto_id)
);


INSERT INTO productos 
(producto_nombre, producto_precio, producto_stock, producto_tipo)
VALUES
	('Latte', 2.50, 100, 'café'),
	('Cappuccino', 1.90, 100, 'café'),
	('Dulce de leche Latte', 20.50, 100, 'café'),
	('Café Americano', 3.50, 100, 'café'),
	('Iced Café Americano', 0.50, 100, 'ice café'),
	('Café Mocha', 50, 100, 'café'),
	('Caramel Macchiato', 3.2, 100, 'café'),
	('Iced Mocha', 2.50, 100, 'ice café'),
	('Mocha Blanco', 2.50, 0, null),
	('Vanilla Latte', 2.50, 100, 'té'),
	('Flat White', 2.50, 100, 'té'),
	('Espresso', 2.50, 100, 'café'),
	('Espresso Macchiato', 0.90, 0, 'café'),
	('Espresso Con Panna', 1.50, 100, 'café'),
	('Café Cortado', 3.50, 100, 'café'),
	('Torta Cuatro Leches', 4.50, 100, 'postre'),
	('Pie de Berries', 5.50, 0, 'postre'),
	('Bagel', 2.50, 100, 'postre'),
	('Donut Rellena', 6.50, 100, 'donut'),
	('Scone de 4 quesos', 7.50, 100, 'sandwich'),
	('Muffin Zanahoria Nuez', 8.50, 100, 'muffin'),
	('Media luna', 9.50, 100, 'donut'),
	('Pan de Queso', 11.50, 100, 'sandwich'),
	('Praline Cake', 12.50, 100, 'sandwich'),
	('Lemon Cake', 22.50, 100, null),
	('Muffin con Chips', 33.50, 100, 'muffin'),
	('Muffin de Arándano', 454.50, 10, 'muffin');

INSERT INTO clientes (cliente_nombre)
VALUES 
	('María'),
	('Carmen'),
	('Josefa'),
	('Antonio'),
	('José'),
	('Manuel'),
	('David'),
	('Daniel');

SELECT * FROM productos;
```

## SELECT
- [fuentes](https://www.postgresqltutorial.com/postgresql-select/): Una de las tareas más comunes, cuando trabaja con la base de datos, es consultar datos de tablas mediante la instrucción SELECT.
- SELECT es una de las declaraciones más complejas de PostgreSQL. Tiene muchas cláusulas que puede utilizar para formar una consulta flexible.

### Opciones:
- DISTINCT
- ORDER BY
- WHERE
- LIMIT o FETCH
- GROUP BY
- HAVING
- INNER JOIN, LEFT JOIN, FULL OUTER JOIN, CROSS JOIN
- UNION, INTERSECT y EXCEPT

## SELECT Y FROM

```sql
SELECT * FROM productos;

SELECT producto_nombre
FROM productos;

-- es buena práctica especificar
-- los campos específicos de cada tabla
SELECT producto_nombre, producto_precio 
FROM productos;
```

:::tip
Tenga en cuenta que las palabras clave de SQL no distinguen entre mayúsculas y minúsculas. Significa que ``SELECT`` es equivalente a ``select`` o ``Select``. Por convención, usaremos todas las palabras clave SQL en mayúsculas para facilitar la lectura de las consultas.
:::

```sql
-- En este ejemplo, usamos el operador || de concatenación
SELECT 
    producto_nombre || ' ' || producto_precio, 
    producto_id
FROM productos;
```

```sql
SELECT 
	producto_nombre,
	producto_precio * 100
FROM productos;
```

## Alias
- [AS](https://www.postgresqltutorial.com/postgresql-column-alias/): Un alias de columna le permite asignar un nombre temporal a una columna o expresión en la lista de selección de una declaración. 
- El alias de columna existe temporalmente durante la ejecución de la consulta.

```sql
SELECT 
	producto_nombre,
	producto_precio * 100 AS valor
FROM productos;

SELECT 
	producto_nombre,
	producto_precio * 100 valor
FROM productos;

-- alias con espacios
SELECT 
	producto_nombre,
	producto_precio * 100 AS "valor por cien"
FROM productos;
```

## ORDER BY
- Cuando consulta datos de una tabla, la declaración SELECT devuelve filas en un orden no especificado.
- [ORDER BY](https://www.postgresqltutorial.com/postgresql-order-by/): Para ordenar las filas del conjunto de resultados, use la cláusula ``ORDER BY`` en la SELECTdeclaración.

```sql
-- orden ascendente
SELECT producto_nombre, producto_precio 
FROM productos
ORDER BY producto_nombre ASC;

-- orden descendente
SELECT producto_nombre, producto_precio 
FROM productos
ORDER BY producto_nombre DESC;

SELECT producto_nombre, producto_precio 
FROM productos
ORDER BY producto_precio DESC;
```

La función ``LENGTH()`` acepta una cadena y devuelve la longitud de esa cadena.
```sql
SELECT 
	producto_nombre,
	LENGTH(producto_nombre) AS len
FROM productos
ORDER BY len DESC;
```

## DISTINCT
- [DISTINCT](https://www.postgresqltutorial.com/postgresql-select-distinct/): se utiliza en la declaración ``SELECT`` para eliminar filas duplicadas de un conjunto de resultados.

```sql
SELECT 
	DISTINCT producto_tipo
FROM productos;
```

## WHERE
- [WHERE](): ``SELECT `` devuelve todas las filas de una o más columnas en una tabla. Para seleccionar filas que satisfagan una condición específica, use una ``WHERE``.
- Operadores: =, >, <, >=, <=, <>, !=, AND, OR, 
    - IN: Devuelve verdadero si un valor coincide con cualquier valor en una lista.
    - BETWEEN: Devuelve verdadero si un valor está entre un rango de valores.
    - LIKE: Devuelve verdadero si un valor coincide con un patrón.
    - IS NULL: Devuelve verdadero si un valor es NULL.
    - NOT: Negar el resultado de otros operadores.

Buscar los de tipo café:
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_tipo = 'café';
```

Buscar los de tipo café y precio mayor a 3:
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_tipo = 'café' AND producto_precio > 3;
```

Buscar en un rago de coincidencias: (con IN nos evitamos estar utilizando diferentes OR)
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_tipo IN ('té', 'café', 'ice café');
```

NOT IN
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_tipo NOT IN ('té', 'café', 'ice café');
```

Buscar una cadena según un patrón específico:
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_nombre LIKE 'Espresso%';
```

- [LIKE](https://www.postgresqltutorial.com/postgresql-like/)
- El signo de porcentaje ``%`` coincide con cualquier secuencia de cero o más caracteres.
- El signo de subrayado ``_`` coincide con cualquier carácter.
```sql
SELECT
	'foo' LIKE 'foo', -- true
	'foo' LIKE 'f%', -- true
	'foo' LIKE '_o_', -- true
	'bar' LIKE 'b_'; -- false
```

Entre:
```sql
SELECT 
	producto_nombre,
	producto_tipo,
	producto_precio
FROM productos
WHERE producto_precio BETWEEN 1 AND 2;
```

## LIMIT
- [LIMIT](https://www.postgresqltutorial.com/postgresql-limit/): restringe el número de filas devueltas por la consulta.

```sql
SELECT producto_nombre
FROM productos
LIMIT 6;
```

```sql
SELECT producto_nombre
FROM productos
LIMIT 6 OFFSET 5;
```

```sql
SELECT producto_nombre
FROM productos AS p
ORDER BY p.producto_precio
LIMIT 6;
```

## IS NULL
- [IS NULL](https://www.postgresqltutorial.com/postgresql-is-null/)
- En el mundo de las bases de datos, NULL significa información faltante o no aplicable.
- NULL no es un valor, por lo tanto, no puede compararlo con otros valores como números o cadenas.
- La comparación de NULL con un valor siempre dará como resultado NULL, lo que significa un resultado desconocido.
- Además, NULL no es igual a NULL.

```sql
SELECT 
	producto_nombre,
	producto_tipo
FROM productos
WHERE producto_tipo = NULL;
```

- La declaración no devuelve ninguna fila. Esto se debe a que la expresión ``producto_tipo = NULL`` de la cláusula ``WHERE`` siempre devuelve falso.
- Aunque hay un ``NULL`` en la columna del producto_tipo, la expresión ``NULL = NULL`` devuelve falso. Esto se debe a que ``NULL`` no es igual a ningún valor, incluso a sí mismo.

```sql
SELECT 
	producto_nombre,
	producto_tipo
FROM productos
WHERE producto_tipo IS NULL;
```

## GROUP BY
- [GROUP BY](https://www.postgresqltutorial.com/postgresql-group-by/): Devuelve las filas en grupos.
-  Para cada grupo, puede aplicar una función agregada, por ejemplo, ``SUM()`` para calcular la suma de elementos o ``COUNT()`` para obtener el número de elementos en los grupos.


Agrupamos por tipo:
```sql
SELECT 
	producto_tipo
FROM productos
GROUP BY producto_tipo;
```

Cantidad de productos por tipo:
```sql
SELECT 
	producto_tipo,
	COUNT(producto_nombre) AS cantidad
FROM productos
GROUP BY producto_tipo;
```

## HAVING
- [HAVING](https://www.postgresqltutorial.com/postgresql-having/)
- La cláusula ``WHERE`` le permite filtrar filas según una condición específica. Sin embargo, la cláusula ``HAVING`` le permite filtrar grupos de filas de acuerdo con una condición específica.
- En otras palabras, la cláusula ``WHERE`` se aplica a filas mientras que la cláusula ``HAVING`` se aplica a grupos de filas.

```sql
SELECT 
	producto_tipo,
	COUNT(producto_nombre) AS cantidad
FROM productos
GROUP BY producto_tipo
HAVING COUNT(producto_nombre) > 2;
```


## JOIN
- Próxima Clase:
- [Fuente](https://www.postgresqltutorial.com/postgresql-joins/)
<div class="text-center">
    <img :src="$withBase('/img/joins.png')" alt="relacion todo sql">
</div>


