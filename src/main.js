import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './tao-router'

Vue.config.productionTip = false

new Vue({
  router, // 添加到配置项
  render: h => h(App)
}).$mount('#app')
