import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.min.mjs'
import 'element-plus/dist/index.css'

import './callcard_old/assets/css/customElementPlus.css';
import './callcard_old/assets/css/main.css';

import router from './router.js'
createApp(App)
    .use(router)
    .use(createPinia())
    .use(ElementPlus, {locale: ru})
    .mount('#app')
