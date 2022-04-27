# PostgreSQL JOIN

En esta sección conoceremos como realizar consultas en tablas relacionadas utilizando JOIN.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gL9EELZXuKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos:

-   [Relational DB](http://www.databaseanswers.org/data_models/amazon_and_starbucks/index.htm)

Modelo entidad relación (ERD):

<div class="text-center">
    <img :src="$withBase('/img/cafe-2.JPG')" alt="relacion todo sql">
</div>

## Tablas

```sql
DROP TABLE IF EXISTS cliente_ordenes_productos;
DROP TABLE IF EXISTS cliente_ordenes;
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

CREATE TABLE cliente_ordenes (
	cliente_orden_id SERIAL PRIMARY KEY,
	cliente_id INT REFERENCES clientes(cliente_id),
	orden_fecha DATE DEFAULT NOW()
);

CREATE TABLE cliente_ordenes_productos (
	cliente_orden_id INT REFERENCES cliente_ordenes(cliente_orden_id),
	producto_id INT REFERENCES productos(producto_id),
	cantidad SMALLINT DEFAULT 1
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

SELECT * FROM clientes;
SELECT * FROM productos;
```

## Agregar Ordenes

Agregar una nueva orden de un cliente:

```sql
INSERT INTO cliente_ordenes (cliente_id)
VALUES (4);

SELECT * FROM cliente_ordenes;
```

Cliente compra producto con id: 12

```sql
INSERT INTO
cliente_ordenes_productos (cliente_orden_id, producto_id, cantidad)
VALUES (1, 12, 1);

SELECT * FROM cliente_ordenes_productos;
```

Descontar stock del producto con id: 12

```sql
UPDATE productos
SET producto_stock = producto_stock - 1
WHERE productos.producto_id = 12;

SELECT * FROM productos;
```

¿Si desea agregar otro producto?

```sql
INSERT INTO
cliente_ordenes_productos (cliente_orden_id, producto_id, cantidad)
VALUES (1, 27, 2);

UPDATE productos
SET producto_stock = producto_stock - 2
WHERE productos.producto_id = 27;

SELECT * FROM productos;
```

:::tip Transacciones
Más adelante vamos a realizar una transacción, así validamos que exista el stock necesario para comprar un producto.

[Más info](https://www.todopostgresql.com/comandos-de-transacciones-en-postgresql/)
:::

:::tip
Cómo pudimos verificar todo el proceso lo hicimos de manera manual, ingresando estáticamente los id y stock correspondientes. Al finalizar los conceptos de join podremos hacer el ejercicio de manera dinámica.
:::

## JOIN

-   [Fuente](https://www.postgresqltutorial.com/postgresql-joins/)
-   La unión o join de PostgreSQL se utiliza para combinar columnas de una o más tablas, en función de los valores de las columnas comunes entre tablas relacionadas.
-   Existen diferentes tipos de join:
    -   INNER JOIN o JOIN
    -   LEFT JOIN
    -   RIGHT JOIN
    -   FULL JOIN o FULL OUTER JOIN
    -   y otros... saquen su autodidacta interior 🤙

<div class="text-center">
    <img :src="$withBase('/img/joins.png')" alt="relacion todo sql">
</div>

## INNER JOIN

-   [INNER JOIN](https://www.postgresqltutorial.com/postgresql-inner-join/)

¿Si quisieramos pintar, el nombre del producto y la cantidad comprada?

```sql
SELECT *
FROM productos AS p
INNER JOIN cliente_ordenes_productos AS cop
ON p.producto_id = cop.producto_id;
```

```sql
SELECT p.producto_nombre, cop.cantidad
FROM productos p
INNER JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

Pintar el total a pagar por producto:

```sql
SELECT
	p.producto_nombre,
	p.producto_precio * cop.cantidad "$ producto"
FROM productos p
JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

Pintar la suma total a pagar:

```sql
SELECT
	SUM(p.producto_precio * cop.cantidad) "Total a pagar"
FROM productos p
JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

## LEFT JOIN

-   [LEFT JOIN](https://www.postgresqltutorial.com/postgresql-left-join/)

```sql
SELECT
	*
FROM productos p
LEFT JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

Pintar productos que no se aún no se venden:

```sql
SELECT p.producto_nombre
FROM productos p
LEFT JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id
WHERE cop.producto_id IS NULL;
```

## RIGHT JOIN

-   [RIGHT JOIN](https://www.postgresqltutorial.com/postgresql-right-join/)

```sql
SELECT
	*
FROM productos p
RIGHT JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

## FULL JOIN

-   [FULL JOIN](https://www.postgresqltutorial.com/postgresql-full-outer-join/)

```sql
SELECT
	*
FROM productos p
FULL JOIN cliente_ordenes_productos cop
ON p.producto_id = cop.producto_id;
```

## JOIN \* N TABLAS

Pintar fecha de orden y nombre del producto:

```sql
SELECT *
FROM cliente_ordenes co
JOIN cliente_ordenes_productos cop
ON co.cliente_orden_id = cop.cliente_orden_id
JOIN productos p
ON	cop.producto_id = p.producto_id;
```

```sql
SELECT co.orden_fecha, producto_nombre
FROM cliente_ordenes co
JOIN cliente_ordenes_productos cop
ON co.cliente_orden_id = cop.cliente_orden_id
JOIN productos p
ON	cop.producto_id = p.producto_id;
```

Pintar nombre cliente, fecha orden, cantidad, nombre producto y cantidad \* precio:

```sql
SELECT
	c.cliente_nombre,
	co.orden_fecha,
	cop.cantidad,
	p.producto_nombre,
	cop.cantidad * p.producto_precio total
FROM clientes c
JOIN cliente_ordenes co
ON c.cliente_id = co.cliente_id
JOIN cliente_ordenes_productos cop
ON co.cliente_orden_id = cop.cliente_orden_id
JOIN productos p
ON cop.producto_id = p.producto_id;
```

<!-- ## Próxima clase
- Subconsultas
- Transacciones

```sql
INSERT INTO Cliente_Ordenes (cliente_id)
VALUES (6);

SELECT * FROM Cliente_Ordenes;

-- transacción
INSERT INTO
Cliente_Ordenes_Productos (cliente_orden_id, producto_id, cantidad)
VALUES (3, 9, 1);

UPDATE productos
SET producto_stock = producto_stock - (
	SELECT cantidad
	FROM cliente_ordenes_productos cop
	JOIN productos p
	ON cop.producto_id = p.producto_id
	WHERE p.producto_id = 9
)
WHERE productos.producto_id = 9;
-- fin transacción

SELECT * FROM Productos;
``` -->
