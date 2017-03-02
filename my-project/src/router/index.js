import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index'
import two from 'pages/two'
import onec from 'pages/onec'
import elementui from 'pages/elementui'
import form from 'pages/form'
import counter from 'pages/counter'
Vue.use(Router)
const one = resolve => require(['pages/one'], resolve) // 路由懒加载
export default new Router({
	mode: 'history', // HTML5 History 模式
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/elementui',
      name: 'elementui',
      component: elementui
    },
    {
      path: '/one',
      name: 'one',
      component: one,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'onec',
          component: onec
        }
        ]
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})


