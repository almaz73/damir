import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {path:'/',component:()=>import( '@/kt/KT.vue')},
    {path:'/custom-elementplus',component:()=>import( '@/custom/CustomElementPlus.vue')},
    {path:'/old',component:()=>import( '@/callcard_old/CallCard_old.vue')},
    {path:'/login',component:()=>import('@/components/Password.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
