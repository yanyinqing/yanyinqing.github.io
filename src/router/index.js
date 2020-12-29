import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/Bro/First'
import Loading from '@/components/Loading'
import Zhuce from '@/components/Zhuce'
import Details from '@/components/Details'
import Class from '@/components/Class'
import Allclass from '@/components/Allclass'
import Buycar from '@/components/Buycar'
// import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/First'
    },
    {
      path: '/First',
      component: First
    },
    {
      path: '/',
      redirect: '/Loading'
    },
    {
      path: '/Loading',
      component: Loading
    },
    {
      path: '/',
      redirect: '/Zhuce'
    },
    {
      path: '/Zhuce',
      component: Zhuce
    },
    {
      path: '/',
      redirect: '/Details'
    },
    {
      path: '/Details',
      component: Details
    },
    {
      path: '/',
      redirect: '/Class'
    },
    {
      path: '/Class',
      component: Class
    },
    {
      path: '/',
      redirect: '/Allclass'
    },
    {
      path: '/Allclass',
      component: Allclass
    },
    {
      path: '/',
      redirect: '/Buycar'
    },
    {
      path: '/Buycar',
      component: Buycar
    }
  ]
})
