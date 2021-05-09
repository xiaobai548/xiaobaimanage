import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './mock'

import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/base.css'
import 'assets/css/normalize.css'

import toast from 'components/toast'
import cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(toast)

router.beforeEach((to,from,next)=>{
  if(to.name=="Login")
  next();
  else{
    if(cookie.get('token'))
    {
      store.commit("setToken",cookie.get('token'))
      next()}
    else{
      next('login')
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
