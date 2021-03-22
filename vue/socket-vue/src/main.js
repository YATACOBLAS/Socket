import Vue from 'vue'
import Home from './Home.vue'

import router from './router/index'
import store from './store/index'

// import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(Vuelidate);
Vue.use(VueAxios,axios);
// Vue.use(BootstrapVue)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap-vue/dist/bootstrap-vue.js'

Vue.config.productionTip = false

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
