# Bases de datos
En este capitulo conoceremos los fundamentos de bases de datos trabajadas con MariaDB.

## ¿Qué es una DB?
- DB: data base o base de datos.
- Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso.
- Resumen: Guardar y leer datos pero de forma ordenada.

## Tipos de bases de datos
- **Bases de datos relacionales**.
- Bases de datos NoSQL. 
- Bases de datos orientadas a objetos. 
- Bases de datos distribuidas.
- etc [más info](https://www.oracle.com/cl/database/what-is-database/)

:::tip Bases de datos relacionales
- Las bases de datos relacionales se basan en el modelo relacional
- Una forma intuitiva y directa de representar datos en tablas.
- Cada tabla utiliza filas y columnas.
:::

:::tip Bases de datos no relacionales
- noSQL: la información se organiza normalmente mediante documentos y es muy útil cuando no tenemos un esquema exacto de lo que se va a almacenar.
:::

## DBMS
- Sistema gestor de base de datos (Database Management System).
- Resumen: Software que nos permite gestionar las bases de datos.
- Administrar, acceder, controlar permisos, respaldar, crear informes.etc.
- Este sistema (DBMS) necesita de alguna manera consultar estos datos y para ello una **alternativa** es utilizar SQL.

## SQL
- SQL (Structured Query Language): lenguaje de consulta estructurada, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.
- si un DBMS utiliza SQL sería "Un sistema de gestión de bases de datos relacionales" (RDBMS, por sus siglas en inglés).
- SQL es el lenguaje más común para realizar consultas en base de datos.

## Conclusión
- En RDBMS (software) creas y administras las bases de datos, utilizando SQL para las consultas.

## RDBMS populares
- Oracle
- MySQL
- Microsoft SQL Server
- PostgreSQL
- IBM Db2
- SQLite
- Microsoft Access
- MariaDB

## PostgreSQL
- [postgresql.org](https://www.postgresql.org/)
- PostgreSQL, también llamado Postgres, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto, publicado bajo la licencia PostgreSQL, ​ similar a la BSD o la MIT.
- Como muchos otros proyectos de código abierto, el desarrollo de PostgreSQL no es manejado por una empresa o persona, sino que es dirigido por una comunidad de desarrolladores que trabajan de forma desinteresada, altruista, libre o apoyados por organizaciones comerciales. Dicha comunidad es denominada el PGDG (PostgreSQL Global Development Group).
- [descargar](https://www.postgresql.org/download/)
- [doc](https://www.postgresql.org/docs/)

:::tip
Existen dos maneras de trabajar, una es con SQL Shell y la otra es a través de pgAdmin 4, esta última nos permite hacer todo de manera visual.
:::

Comandos de navegación en SQL Shell
```sh
\l -> listar DBs
\q -> exit
\c nombreDB -> cambiar de base de datos
\dt -> listar tablas
```

Crear DB
```sh
CREATE DATABASE prueba;
\c prueba
```

## SQL
- [tipos de datos](http://codigoelectronica.com/blog/postgresql-tipo-de-datos)
- [Data models industry](http://www.databaseanswers.org/data_models/index.htm)

Diagrama entidad relación:
<div class="text-center">
    <img :src="$withBase('/img/todo-relaciones.JPG')" alt="relacion todo sql">
</div>

## CREATE
```sql
CREATE TABLE usuarios(
	nombre VARCHAR(100) NOT NULL,
	edad INT,
	descripcion TEXT,
	id_usuario SERIAL,
	PRIMARY KEY (id_usuario)
);

SELECT * FROM usuarios;
```

```sql
CREATE TABLE tareas(
	id_tarea SERIAL PRIMARY KEY,
	id_usuario INT NOT NULL,
	titulo VARCHAR(50) NOT NULL,
	fecha DATE DEFAULT CURRENT_DATE,
	estado BOOLEAN DEFAULT false,
	FOREIGN KEY	(id_usuario) REFERENCES usuarios(id_usuario)
);

SELECT * FROM tareas;
```

## ALTER
- [más info](https://www.todopostgresql.com/comandos-postgresql-alter/)

Agregar columna:
```sql
ALTER TABLE tareas
ADD descripcion TEXT;
```

Eliminar:
```sql
ALTER TABLE tareas
DROP descripcion;
```

Cambiar tipo de dato:
```sql
ALTER TABLE tareas
ALTER COLUMN descripcion SET DATA TYPE VARCHAR(500);
```

Cambiar nombre columna:
```sql
ALTER TABLE tareas
RENAME COLUMN titulo TO cabecera;
```

## INSERT
```sql
INSERT INTO usuarios(nombre, edad, descripcion)
VALUES (
	'alex',
	50,
	'me gusta la programación'
);
```

```sql
INSERT INTO tareas(id_usuario, titulo)
VALUES (
	1,
	'Componer una canción'
);

SELECT * FROM tareas;
```

## UPDATE
```sql
UPDATE usuarios
	SET nombre = 'Felipe 2'
	WHERE id_usuario = 3;
```

## DELETE
```sql
DELETE FROM usuarios
WHERE id_usuario = 3;
```

:::warning
ERROR:  update o delete en «usuarios» viola la llave foránea «tareas_id_usuario_fkey» en la tabla «tareas»

DETAIL:  La llave (id_usuario)=(2) todavía es referida desde la tabla «tareas».
SQL state: 23503
:::