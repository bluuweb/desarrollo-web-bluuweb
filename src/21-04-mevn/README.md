# MEVN

- Node.js
- Express
- MongoDB
- Vue.js/Quasar (próximamente con react)

:::tip
😍😍😍 Más clases en vivo gratis aquí: [twitch.tv/bluuweb](https://www.twitch.tv/bluuweb) 🤙🤙🤙
:::

:::tip ¿Quieres apoyar los directos? 😍
Tienes varias jugosas alternativas:

1. [Suscríbete al canal de Youtube (es gratis) click aquí](https://bit.ly/3kLYAqr)
2. Si estás viendo un video no olvides regalar un 👍 like y comentario 🙏🏼
3. También puedes ser miembro del canal de Youtube [click aquí](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ/join)
4. Puedes adquirir cursos premium en Udemy 👇🏼👇🏼👇🏼
    - [Curso de HTML + CSS + Bootstrap 5 + Git y más UDEMY](http://curso-bootstrap-5-udemy.bluuweb.cl) 
    - [Curso de React + Firebase UDEMY](https://curso-react-js-udemy.bluuweb.cl)
    - [Curso Vue.js + Firebase UDEMY](https://curso-vue-js-udemy.bluuweb.cl)

:::


## API REST
Vamos a descargar el proyecto anterior y realizar las configuraciones correspondientes:

- [proyect code github](https://github.com/bluuweb/api-rest-twitch-2022-mongo-express-node-jwt)
- [doc api postman](https://documenter.getpostman.com/view/6804314/UzBqo4tG)

Agregar `credentials: true` al index.js, para que pueda recibir solicitudes con credenciales desde el frontend.
```js{11}
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
        credentials: true,
    })
);
```

## Quasar
- [Curso Quasar](https://youtu.be/n4sdgDTrqEU)
- [quasar.dev](https://quasar.dev/)

CLI
```sh
$ yarn global add @quasar/cli

# or:
$ npm i -g @quasar/cli
```

New Proyect:
```sh
$ yarn create quasar

# or:
$ npm init quasar
```


## Ejemplo token

boot/axios.js
```js
import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
```

IndexPage.vue
```vue
<template>
  <q-page padding>
    <q-btn @click="access">Acceder</q-btn>
    <q-btn @click="create">Crear</q-btn>
    {{ token }} - {{ expiresIn }}
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { ref } from "vue";

const token = ref("");
const expiresIn = ref("");

const access = () => {
  api
    .post("/auth/login", {
      email: "test@test.com",
      password: "123123",
    })
    .then((res) => {
      console.log(res.data);
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
    })
    .catch((e) => console.log(e));
};

const setTime = () => {
  setTimeout(() => {
    refreshToken();
  }, expiresIn.value * 1000 - 6000);
};

const refreshToken = () => {
  api({
    method: "GET",
    url: "/auth/refresh",
  })
    .then((res) => {
      console.log(res.data);
      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      setTime();
    })
    .catch((e) => console.log(e));
};

refreshToken();

const create = () => {
  api({
    method: "POST",
    url: "/links",
    data: {
      longLink: "https://quasar.dev/start/quasar-cli",
    },
    headers: {
      Authorization: "Bearer " + token.value,
    },
  })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
</script>

```