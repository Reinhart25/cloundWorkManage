import Vue from 'vue'
import App from './App'
import router from './router'
/* 按需引入elementui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入less */
import less from 'less'
/* 项目初始css */
import './assets/css/reset.css'

Vue.use(less)
// elementui全局注册
Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
