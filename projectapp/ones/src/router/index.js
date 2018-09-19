import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index'
import Details from '../page/details'

Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/meishi',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
