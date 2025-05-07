import { createWebHistory, createRouter } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import("../views/Home/index.vue"),
        children: []
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("../views/Home/index.vue"),
        children: []
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router