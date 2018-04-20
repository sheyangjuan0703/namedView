import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import header from '@/components/header'
import menu from '@/components/menu'
import content from '@/components/content'
import list from '@/components/list'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/menu'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: 'menu',
        components: {
          header: header,
          menu: menu,
          content: content
        },
        children: [
          {
            path: 'list/:index',
            name: 'list',
            component: list
          },
          {
            path: 'list/:index/detail/:detailIndex',
            name: 'detail',
            component: detail
          }
        ]
      }]
    },
    {
      path: '/detailNoMenu',
      name: 'detailNoMenu',
      component: detail
    }
  ]
})
