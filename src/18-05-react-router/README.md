# React Router v6
En esta sección aprenderemos a trabajar con rutas en nuestra aplicación con React.

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:
1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
6. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
¿Quiéres apoyar los directos?
    - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl)
    - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl)
    - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
:::


## Proyecto Final
- [github](https://github.com/bluuweb/router-v6-react-ejemplo-youtube)
- [preview](https://determined-hoover-0ab8f7.netlify.app/)

## Router v6
- [react router v6](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React.
- React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.

```
npx create-react-app router-tutorial
cd router-tutorial
npm i react-router-dom@6 
npm start
```

## Conectar URL
Lo primero es lo primero, queremos conectar su aplicación a la URL del navegador: importarla ``BrowserRouter`` y renderizarla alrededor de toda su aplicación.

index.js
```jsx
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
```

## Link

Navbar.jsx
```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to="/">
                    Inicio
                </Link>
                <Link className="btn btn-outline-primary" to="/blog">
                    Blog
                </Link>
                <Link className="btn btn-outline-primary" to="/contacto">
                    Contacto
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
```

App.jsx
```jsx
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>App</h1>
            </div>
        </div>
    );
};

export default App;
```

## Agregar Rutas
- src/routes/Blog.jsx
- src/routes/Contacto.jsx
- src/routes/Inicio.jsx

index.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
```

## Rutas anidadas
- Es posible que haya notado al hacer clic en los enlaces que el diseño Appdesaparece.
- Cuando las rutas tienen niños, hace dos cosas:
    - Anida las URL ( "/" + "blog" y "/" + "contacto")
    - Anidará los componentes de la interfaz de usuario para el diseño compartido cuando la ruta secundaria coincida

Paso 1:
```jsx
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="blog" element={<Blog />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
```

Paso 2: App.jsx
```jsx
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default App;
```

## Ruta indice
```jsx{5}
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
```

- Observe que tiene el ``index`` prop en lugar de ``path``.
- Eso es porque la ruta del índice comparte la ruta del padre.
- Las rutas de índice coinciden cuando una ruta principal coincide, pero ninguna de las otras secundarias coincide.
- Las rutas de índice son la ruta secundaria predeterminada para una ruta principal.
- Las rutas de índice se representan cuando el usuario aún no ha hecho clic en uno de los elementos de una lista de navegación.

## Enlaces activos (NavLink)
- [Más info](https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links)

```jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">
                    Inicio
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">
                    Blog
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/contacto">
                    Contacto
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
```

## 404
```jsx
import { Link } from "react-router-dom";

const NoEncontrada = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/" className="btn btn-outline-dark">
                Inicio
            </Link>
        </div>
    );
};

export default NoEncontrada;
```

```jsx{8}
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
```

## Parámetros
- [fetch dev.to](https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6)
- [¿forma correcta?](https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc)
- [npm react fetch hook](https://www.npmjs.com/package/react-fetch-hook)

hooks/useFetch.js
```js
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((e) => setError("Ocurrió un error"))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};
```

Blog.jsx
```jsx
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Blog</h1>
            {data.map((item) => (
                <h4 key={item.id}>
                    <Link to={`/blog/${item.id}`}>
                        {item.id} - {item.title}
                    </Link>
                </h4>
            ))}
        </div>
    );
};

export default Blog;
```

```jsx{7}
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Inicio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<Post />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
```

Post.jsx
```jsx
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
    let params = useParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
        </div>
    );
};

export default Post;
```

## Parámetros de búsqueda
- React Router hace que sea fácil de leer y manipular los parámetros de búsqueda con ``useSearchParams``
- Funciona de manera muy similar, ``React.useState()`` pero almacena y establece el estado en los parámetros de búsqueda de URL en lugar de en la memoria.

Blog.jsx
```jsx
let [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
    // http://localhost:3000/blog?nombre=juan
    console.log(searchParams.get("nombre"));
}, [searchParams]);
```

Blog.jsx
```jsx
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div>
            <h1>Blog</h1>
            <input
                className="form-control mb-2"
                type="text"
                value={searchParams.get("filter") || ""}
                onChange={handleChange}
            />
            {data
                .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((item) => (
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>
                            {item.id} - {item.title}
                        </Link>
                    </h4>
                ))}
        </div>
    );
};

export default Blog;
```

## Netlify + queryParams
- [fuente](https://stackoverflow.com/questions/56468161/netlify-does-not-recognize-the-url-params-when-using-react-router-dom)
- Crear archivo `_redirects` en `public` con:

```
/* /index.html 200
```

```
npm run build
```

Subir a netlify 🎉 [https://www.netlify.com/](https://www.netlify.com/)