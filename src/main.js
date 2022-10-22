import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import Home from './components/Home.vue'
import About from './components/About.vue'
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

const i18n = createI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages,
})

const routes = [
    {
        path: '/:locale',
        template: '<router-view></router-view>',
        children: [
            { path: '/home', component: Home },
            { path: '/about', component: About },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
