import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/page1',
      component: resolve => require(['../components/common/master.vue'], resolve),
      children: [
        {
          path: '/page1',
          component: resolve => require(['../components/page/page1.vue'], resolve)
        },{
          path: '/page2',
          component: resolve => require(['../components/page/page2.vue'], resolve)
        },{
          path: '/page3',
          component: resolve => require(['../components/page/page3.vue'], resolve)
        },{
          path: '/page4',
          component: resolve => require(['../components/page/page4.vue'], resolve)
        },{
          path: '/page5',
          component: resolve => require(['../components/page/page5.vue'], resolve)
        },{
          path: '/page6',
          component: resolve => require(['../components/page/page6.vue'], resolve)
        },{
          path: '/page7',
          component: resolve => require(['../components/page/page7.vue'], resolve)
        }
      ]
    },{
      path: '/login',
      component: resolve => require(['../components/page/login.vue'], resolve)
    },
  ]
})
