import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index'
import mydetail from '../page/mydetails'
import my from '../page/my'

Vue.use(Router);
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
      path: '/mydetail',
      name: 'mydetail',
      component: mydetail
    }
  ]
})
