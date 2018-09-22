import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index'
import Details from '../page/details'
import my from '../page/my'
import OrderForm from '../page/OrderForm'

Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/meishi',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/OrderForm',
      name: 'OrderForm',
      component: OrderForm
    },
  ]
})
