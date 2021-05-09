import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from '../views/dictionary/employee/DataTable.vue';
import Customer from '../views/dictionary/customer/CustomerList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/report',
        name: 'Report',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Report.vue')
    }, {
        path: '/shop',
        name: 'Shop',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Shop.vue')
    }, {
        path: '/system',
        name: 'System',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/System.vue')
    },
    {
        path: '/dictionary/customer',
        name: 'Customer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Customer
    },
    {
        path: '/dictionary/employee',
        name: 'Employee',
        alias: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Employee
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router