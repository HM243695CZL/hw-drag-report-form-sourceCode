import Vue from 'vue'
import App from './App.vue'
import HwGridLayout from '../src'
import 'normalize.css/normalize.css'
Vue.config.productionTip = false
Vue.use(HwGridLayout)
new Vue({
  render: h => h(App)
}).$mount('#app')
