# React Consumir API

En esta sección realizaremos una práctica para ir aterrizando todo lo aprendido.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GqJzxJVISuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
   :::

## Recursos

-   [Proyecto final](https://loving-keller-0ed376.netlify.app/)
-   [repo github](https://github.com/bluuweb/rick-morty-v1-react)
-   [api rick and morty](https://rickandmortyapi.com/)
-   [ruta fetch](https://rickandmortyapi.com/api/character/?name=rick&status=alive)

## useEffect

-   [useEffect](https://es.reactjs.org/docs/hooks-effect.html): El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales.
-   Peticiones de datos, establecimiento de suscripciones y actualizaciones manuales del DOM en componentes de React serían ejemplos de efectos secundarios.

:::tip
Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook useEffect equivale a `componentDidMount`, `componentDidUpdate` y `componentWillUnmount` combinados.
:::

### Efectos sin saneamiento

-   En ciertas ocasiones, queremos ejecutar código adicional después de que React haya actualizado el DOM. Peticiones de red, mutaciones manuales del DOM y registros, son ejemplos comunes de efectos que no requieren una acción de saneamiento.
-   Decimos esto porque podemos ejecutarlos y olvidarnos de ellos inmediatamente.

```js
import { useEffect, useState } from "react";

const Efectos = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("renderizado");
    });

    return (
        <div className="container">
            <h1>{contador}</h1>
            <button
                className="btn btn-primary"
                onClick={() => setContador(contador + 1)}
            >
                Aumentar
            </button>
        </div>
    );
};

export default Efectos;
```

### ¿Qué hace useEffect?

-   Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.
-   React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM.
-   ¿Se ejecuta useEffect después de cada renderizado? ¡Sí! Por defecto se ejecuta después del primer renderizado y después de cada actualización.

### Consejo: Omite efectos para optimizar el rendimiento

-   En algunos casos, sanear o aplicar el efecto después de cada renderizado puede crear problemas de rendimiento.
-   Puedes indicarle a React que omita aplicar un efecto si ciertos valores no han cambiado entre renderizados.
-   Para hacerlo, pasa un array como segundo argumento opcional a useEffect:

```js
useEffect(() => {
    console.log("renderizado");
}, []);
```

¿Qué pasa si aplicamos el siguiente cambio?

```js
useEffect(() => {
    console.log(`contador cambio: ${contador}`);
}, []);
```

:::warning
React Hook useEffect has a missing dependency: 'contador'. Either include it or remove the dependency array react-hooks/exhaustive-deps
:::

```js
useEffect(() => {
    console.log(`contador cambio: ${contador}`);
}, [contador]); // Solo se vuelve a ejecutar si count cambia
```

:::tip
Más adelante conoceremos los [Efectos con saneamiento](https://es.reactjs.org/docs/hooks-effect.html#effects-with-cleanup).
:::

## App.jsx

```jsx
import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarPersonajes from "./components/PintarPersonajes";

const App = () => {
    const [nombre, setNombre] = useState("");

    return (
        <div className="container">
            <h1>APP</h1>
            <Formulario setNombre={setNombre} />
            <button
                className="btn btn-success mt-2"
                onClick={() => setNombre("")}
            >
                Reiniciar
            </button>
            <PintarPersonajes nombre={nombre} />
        </div>
    );
};

export default App;
```

## useFormulario.js

```js
import { useState } from "react";

export const useFormulario = (initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initialState);
    };

    return [inputs, handleChange, reset];
};
```

## Formulario.jsx

```jsx
import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setNombre }) => {
    const [inputs, handleChange, reset] = useFormulario({
        nombre: "",
    });
    const { nombre } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            return Swal.fire({
                title: "Error!",
                text: "Nombre ogligatorio",
                icon: "error",
            });
        }

        setNombre(nombre.trim().toLowerCase());

        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={handleChange}
                className="form-control mb-2"
                name="nombre"
                placeholder="Ingrese Character"
            />
            <button className="btn btn-info" type="submit">
                Buscar
            </button>
        </form>
    );
};

export default Formulario;
```

## PintarPersonajes.jsx

```jsx
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import Personaje from "./Personaje";
import Loading from "./Loading";

const PintarPersonajes = ({ nombre }) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            {personajes.map((item) => (
                <Personaje key={item.id} character={item} />
            ))}
        </div>
    );
};

export default PintarPersonajes;
```

## Personaje.jsx

```jsx
const Personaje = ({ character = "" }) => {
    const { name, image, species } = character;

    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img
                    src={image}
                    alt={`imagen-${name}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div>
        </div>
    );
};

export default Personaje;
```

## Loading.jsx

```jsx
const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
```

## customHook opcional

```js
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = (nombre) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCharacter(nombre);
    }, [nombre]);

    const obtenerCharacter = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `no existe ${nombre}`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setPersonajes([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [personajes, loading];
};
```
