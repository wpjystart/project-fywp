import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index'
import mydetail from '../page/mydetails'
import my from '../page/my'
<<<<<<< HEAD

Vue.use(Router);
=======
import OrderForm from '../page/OrderForm'

Vue.use(Router)
>>>>>>> e907d94d4fd889c574f37da584f3ad19b4711acd
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
<<<<<<< HEAD
      path: '/mydetail',
      name: 'mydetail',
      component: mydetail
    }
=======
      path: '/OrderForm',
      name: 'OrderForm',
      component: OrderForm
    },
>>>>>>> e907d94d4fd889c574f37da584f3ad19b4711acd
  ]
})
