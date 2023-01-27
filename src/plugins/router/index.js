import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path:'/',component:()=>import( '@/callcard/CallCard.vue')},
    {path:'/callcard',component:()=>import( '@/callcard/CallCard.vue')},
    {path:'/help',component:()=>import('@/components/HelpForDeveloper.vue')},
    {path:'/shell',component:()=>import('@/components/Shell.vue')},
    {path:'/login',component:()=>import('@/components/Password.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
