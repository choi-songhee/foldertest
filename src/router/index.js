import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import addList from '@/components/addList'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'addList',
            component: addList
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/SignUp',
            name: 'signUp',
            component: SignUp
        }
    ]
})
