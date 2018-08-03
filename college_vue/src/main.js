import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

import home from './component/home.vue'
import intro from './component/intro.vue'
import service from './component/service.vue'
import plat from './component/plat.vue'
import clg from './component/clg.vue'
import act from './component/act.vue'
import zpyc from './component/zpyc.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{
      path: '/',
      redirect: 'home',
      meta: {
      	title: '首页'
      }
    },
    {
      path: '/home',
      component: home,
      meta: {
      	title: '首页'
      }
    },
    {
      path: '/intro',
      component: intro,
      meta: {
      	title: '公司介绍'
      }
    },
    {
      path: '/service',
      component: service,
      meta: {
      	title: '产品服务'
      }
    },
    {
      path: '/plat',
      component: plat,
      meta: {
      	title: '平台合作'
      }
    },
    {
      path: '/clg',
      component: clg,
      meta: {
      	title: '瑜伽大学'
      }
    },
    {
      path: '/act',
      component: act,
      meta: {
      	title: '活动花絮'
      }
    },
    {
      path: '/zpyc',
      component: zpyc,
      meta: {
      	title: '诚聘英才'
      }
    }
  ]
})

router.beforeEach((to,form,next) =>{
		if(to.meta.title){
			document.title = to.meta.title
		}
		next(); 
	}
)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
