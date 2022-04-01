import { createWebHistory, createRouter } from "vue-router"


import Body from './components/Body.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Body',
        path: '/home',
        component: Body
    },
    {
        name: 'Home',
        path: '/home',
        component: Body
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Signup',
        path: '/signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;