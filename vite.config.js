import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 7080,
        proxy: {
            '/ambulance/':  {
                // target: 'http://localhost:58080',
                // target: 'http://192.168.83.53:8080', //  Мари Эл
                target: 'http://192.168.83.53:7080/', // Чувашия
                ws: true,
                changeOrigin: true,
                withCredentials: true,
            },
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    }
})
