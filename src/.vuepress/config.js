module.exports = {
    title: "HTML, CSS y Bootstrap 5 (bluuweb)",
    dest: "docs",
    base: "/desarrollo-web-bluuweb/",
    description:
        "Curso de HTML, CSS y Bootstrap 5, Docente: Ignacio Gutiérrez (bluuweb), plataforma: Udemy",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    themeConfig: {
        editLinks: false,
        editLinkText: "",
        lastUpdated: "Last Updated",
        smoothScroll: true,
        nav: [
            // {
            //     text: "Guía",
            //     link: "/",
            // },
            // { text: 'Guia', link: '/docs/' },
            {
                text: "Youtube",
                link: "https://youtube.com/bluuweb",
            },
            {
                text: "Twitch",
                link: "https://www.twitch.tv/bluuweb",
            },
            {
                text: "Ver curso en Udemy",
                link: "https://curso-bootstrap-5-udemy.bluuweb.cl",
            },
            {
                text: "Curso Vue.js",
                link: "https://curso-vue-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso React.js",
                link: "https://curso-react-js-udemy.bluuweb.cl",
            },
        ],
        sidebar: [
            "/",
            "/01-html/",
            "/02-html-intermedio/",
            "/03-css/",
            "/04-css-intermedio/",
            "/05-flexbox/",
            "/06-flexbox-practica/",
            "/07-00-terminal/",
            "/07-01-git/",
            "/07-02-github/",
            "/07-b-fundamentos/",
            "/08-b-componentes/",
            // "/09-b-accordion/",
            "/10-b-scroll/",
            "/11-b-form/",
            "/12-b-sass/",
            "/14-b-range/",
            "/13-b-chat/",
            "/15-b-php/",
            // "/16-b-parsel/",
            "/17-b-offcanvas/",
            "/11-01-psint/",
            "/11-02-js-basico/",
            "/11-03-js/",
            "/11-04-js/",
            "/11-05-js-dom/",
            "/11-06-js-paradigma/",
            "/11-07-js-delegacion/",
            "/11-08-js-form/",
            "/11-09-js-promesas/",
            "/11-10-js-fetch/",
            "/11-11-js-poo/",
            "/11-12-js-modulos/",
            // "/11-13-js-closures/",
            "/18-01-react/",
            "/18-02-react-formularios/",
            "/18-03-react-todo/",
            "/18-04-react-api/",
            "/18-05-react-router/",
            "/18-06-react-context/",
            "/19-01-sql/",
            "/19-02-sql/",
            "/19-03-sql/",
            "/19-04-sql/",
            "/20-01-node/",
            "/20-02-express/",
            "/21-03-api-rest/",
            "/21-04-mevn/",
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

{
    /* <img :src="$withBase('/img/beautify.PNG')" alt="foo"></img> */
}

{
    /* 
    <div class="text-center">
        <img :src="$withBase('/img/git-vscode.JPG')" alt="icono visual studio code git" width="500px">
    </div> 
*/
}
