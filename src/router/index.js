import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/addList',
            name: 'addList',
            component: () => import('@/components/addList')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/Login')
        },
        {
            path: '/SignUp',
            name: 'signUp',
            component: () => import('@/components/SignUp')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/components/Home')
        }
    ]
})
export default router
