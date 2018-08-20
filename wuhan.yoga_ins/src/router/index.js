import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Memb from '@/components/Memb'
import Info from '@/components/Info'
import Dyna from '@/components/Dyna'
import Cont from '@/components/Cont'
import Regu from '@/components/Regu'
import Rule from '@/components/Rule'
import Appl from '@/components/Appl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/memb',
      name: 'Memb',
      component: Memb
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/dyna',
      name: 'Dyna',
      component: Dyna
    },
    {
      path: '/cont',
      name: 'Cont',
      component: Cont
    },
    {
      path: '/regu',
      name: 'Regu',
      component: Regu
    },
    {
      path: '/rule',
      name: 'Rule',
      component: Rule
    },
    {
      path: '/appl',
      name: 'Appl',
      component: Appl
    }
  ]
})
