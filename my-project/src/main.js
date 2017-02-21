// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'pages/App'
import router from 'router'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

new Vue({
      el: '#app',
      render: h => h(App),
    router:router
})