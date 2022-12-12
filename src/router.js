import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '*',
        component: PageNotFound,
    },

]

export default new VueRouter(
    {
        mode: 'history',
        routes
    }
)