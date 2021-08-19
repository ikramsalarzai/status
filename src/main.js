import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from './store/store'

Vue.use(VueAxios, axios)
Vue.use(VueRouter);

export const bus=new Vue();

const router = new VueRouter({  
  routes:Routes,
  mode:'history'

})


Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
  router:router,
 }).$mount('#app')
