import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $conf from './config/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'

Vue.use(animate);
Vue.use(ElementUI)
Vue.prototype.$conf = $conf
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
