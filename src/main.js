import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.min.mjs'
import 'element-plus/dist/index.css'

import './assets/css/customElementPlus.css';
import './assets/css/main.css';

import router from './plugins/router'
createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, {locale: ru})
    .mount('#app')
