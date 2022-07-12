export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    'vue/multi-word-component-names': 'off',


    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        function() {
            return {
                script: [
                    // {

                    //     async: true,
                    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8627466046363756",
                    //     crossorigin: "anonymous"
                    // },
                    // 
                    {
                        defer: true,
                        src: 'https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js'
                    },
                    {
                        defer: true,
                        src: 'https://unpkg.com/alpinejs@3.4.2/dist/cdn.min.js'
                    }
                ],
            }
        },

        title: 'mp-rural-dignidad',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Dignidad Capilla Del Monte' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',

            }
        ],

    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/notifycations.js"
    ],

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // '@nuxtjs/google-adsense'

    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        // '@nuxtjs/google-adsense'
        // Simple usage
        // ['@nuxtjs/google-adsense', {
        //     id: 'ca-pub-8627466046363756'
        // }]
    ],

    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',


    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',

    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {


    },
}