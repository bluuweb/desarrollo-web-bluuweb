# React Context API

En esta sección aprenderemos a trabajar con Context API.

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
   ¿Quiéres apoyar los directos? - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl) - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)
   :::

<iframe width="560" height="315" src="https://www.youtube.com/embed/qOSDmez2aPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Proyecto Final

-   [github](https://github.com/bluuweb/router-v6-react-ejemplo-youtube/tree/01-context)
-   [preview](https://objective-galileo-de78e6.netlify.app/)

:::warning
Es necesario ver la sección anterior donde trabajamos con React Router Dom v6.
:::

## Context API

-   [context](https://es.reactjs.org/docs/context.html)
-   [hook useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
-   Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
-   Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
-   Si trabajas con diferentes vistas estas no estarán anidadas, por ende Context proporciona una solución.

<div class="text-center">
    <img :src="$withBase('/img/context-props.png')" alt="icono visual studio code git">
    <br>
    <a href="https://reactiveprogramming.io/blog/es/react/context" target="_blanck">Fuente</a>
</div>

## Redux vs Context

-   Redux proporciona un conjunto de herramientas completo para administrar el estado:
    -   Viene con un depurador que viaja en el tiempo.
    -   Proporciona una API de middleware que le brinda acceso a herramientas como redux-sagas.
    -   Sus enlaces de React evitan muchos renderizados innecesarios.

Como puede ver, **el contexto no reemplaza a Redux**. El contexto no le permitirá viajar en el tiempo con depuración, middleware configurable.

**Context es una forma de obtener datos de un lugar a otro**. Si desea una herramienta que lo ayude a administrar su estado, Redux es una excelente opción.

Fuentes:

-   [alternativa a redux](https://www.itdo.com/blog/react-context-api-puede-ser-alternativa-a-redux/)
-   [context-api-vs-redux](https://daveceddia.com/context-api-vs-redux/)
-   [when-context-replaces-redux](https://frontarm.com/james-k-nelson/when-context-replaces-redux/)

### Pensemos en el siguiente caso:

routes/Inicio.jsx

```jsx
import { useState } from "react";

const Inicio = () => {
    const [user, setUser] = useState(false);

    return (
        <div>
            <h1>Inicio</h1>
            <h2>{user ? "Conectado" : "Desconectado"}</h2>
            {user ? (
                <button
                    className="btn btn-danger"
                    onClick={() => setUser(false)}
                >
                    Cerrar sesión
                </button>
            ) : (
                <button
                    className="btn btn-primary"
                    onClick={() => setUser(true)}
                >
                    Iniciar sesión
                </button>
            )}
        </div>
    );
};

export default Inicio;
```

### ¿Cómo podríamos pasar al usuario al `components/Navbar.jsx`?

```jsx{3}
<nav className="navbar navbar-dark bg-dark">
    <div className="container">
        <Link to="/">user ?</Link>
        <NavLink className="btn btn-sm btn-outline-primary" to="/">
            Inicio
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-primary" to="/blog">
            Blog
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-primary" to="/contacto">
            Contacto
        </NavLink>
    </div>
</nav>
```

## createContext

-   Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.
-   Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.
-   El componente Provider acepta una prop value que se pasará a los componentes consumidores que son descendientes de este Provider.

context/UserProvider.jsx

```jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(false);

    const signIn = () => {
        setUser(true);
    };

    const signOut = () => {
        setUser(false);
    };

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
```

index.js

```jsx
ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Inicio />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="*" element={<NoEncontrada />} />
                </Route>
            </Routes>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
```

## useContext

Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del `<MyContext.Provider`> ascendentemente más cercano en el árbol al componente que hace la llamada.

routes/Inicio.jsx

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Inicio = () => {
    const { user, signIn, signOut } = useContext(UserContext);

    return (
        <div>
            <h1>Inicio</h1>
            <h2>{user ? "Conectado" : "Desconectado"}</h2>
            {user ? (
                <button className="btn btn-danger" onClick={signOut}>
                    Cerrar sesión
                </button>
            ) : (
                <button className="btn btn-primary" onClick={signIn}>
                    Iniciar sesión
                </button>
            )}
        </div>
    );
};

export default Inicio;
```

components/Navbar.jsx

```jsx
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/">
                    {user ? "Juanito" : "SinConexión"}
                </Link>
```

## Extra Ruta Protegida

-   [auth router v6](https://reactrouter.com/docs/en/v6/examples/auth)

routes/RutaProtegida.jsx

```jsx
const RutaProtegida = () => {
    return (
        <div>
            <h1>Solo usuarios registrados pueden ver esta página</h1>
        </div>
    );
};

export default RutaProtegida;
```

components/RequireAuth.jsx

```jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const RequireAuth = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

export default RequireAuth;
```

index.js

```jsx
ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Inicio />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<Post />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route
                        path="protegida"
                        element={
                            <RequireAuth>
                                <RutaProtegida />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NoEncontrada />} />
                </Route>
            </Routes>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
```

routes/Inicio.jsx

```jsx
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Link } from "react-router-dom";

const Inicio = () => {
    const { user, signIn, signOut } = useContext(UserContext);

    return (
        <div>
            <h1>Inicio</h1>
            <h2>{user ? "Conectado" : "Desconectado"}</h2>
            {user ? (
                <>
                    <button className="btn btn-danger" onClick={signOut}>
                        Cerrar sesión
                    </button>
                    <Link to="/protegida" className="btn btn-warning">
                        Protegida
                    </Link>
                </>
            ) : (
                <button className="btn btn-primary" onClick={signIn}>
                    Iniciar sesión
                </button>
            )}
        </div>
    );
};

export default Inicio;
```
