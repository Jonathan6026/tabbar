import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// require('./assets/css/base.css')
