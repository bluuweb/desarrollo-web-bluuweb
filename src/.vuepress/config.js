module.exports = {
    title: "Desarrollo Web",
    dest: "docs",
    base: "/desarrollo-web-bluuweb/",
    description: "Desarrollo web con bluuweb",
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
        lastUpdated: false,
        nav: [
            {
                text: "Guía",
                link: "/",
            },
            // { text: 'Guia', link: '/docs/' },
            {
                text: "Youtube",
                link: "https://youtube.com/bluuweb",
            },
            {
                text: "Curso Vue.js",
                link: "http://curso-vue-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso React.js",
                link: "http://curso-react-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso Bootstrap",
                link: "http://curso-bootstrap-4-udemy.bluuweb.cl",
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
            //   '/07-grid-css/',
            //   '/08-formularios/',
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
