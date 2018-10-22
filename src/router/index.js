import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/store'

Vue.use(Router)
// 路由懒加载
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/menu'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/pages/home'], resolve),
      children: [{
        path: 'menu',
        components: { // 命名视图
          header: resolve => require(['@/components/header'], resolve),
          menu: resolve => require(['@/components/menu'], resolve),
          content: resolve => require(['@/components/content'], resolve)
        },
        children: [
          {
            path: 'list/:index',
            name: 'list',
            component: resolve => require(['@/components/list'], resolve)
          },
          {
            path: 'list/:index/detail/:detailIndex',
            name: 'detail',
            component: resolve => require(['@/components/detail'], resolve)
          }
        ]
      }]
    },
    {
      path: '/detailNoMenu',
      name: 'detailNoMenu',
      component: resolve => require(['@/components/detail'], resolve)
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/pages/map'], resolve)
    },
    {
      path: '/test/:id',
      name: 'test',
      component: resolve => require(['@/pages/test'], resolve)
    },
    {
      path: '/test_vuex',
      name: 'test_vuex',
      component: resolve => require(['@/pages/test_vuex'], resolve)
    },
    {
      path: '/test_tree',
      name: 'test_tree',
      component: resolve => require(['@/pages/test_tree'], resolve)
    },
    {
      path: '/test_slot',
      name: 'test_slot',
      component: resolve => require(['@/pages/test_slot'], resolve)
    },
    {
      path: '/test_select',
      name: 'test_select',
      component: resolve => require(['@/pages/test_select'], resolve)
    },
    {
      path: '/test_demo',
      name: 'test_demo',
      component: resolve => require(['@/pages/test_demo'], resolve)
    },
    {
      path: '/hello',
      name: 'test_demo',
      component: resolve => require(['@/pages/HelloWorld'], resolve)
    },
    {
      path: '/projectList',
      name: 'projectList',
      component: resolve => require(['@/pages/projectList'], resolve)
    }
    // {
    //   path: '/ProjectList',
    //   name: 'ProjectList',
    //   component: resolve => require(['@/pages/HelloWorld'], resolve)
    // }
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(store)
  next()
})
export default router
