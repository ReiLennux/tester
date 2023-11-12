import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.js'
//import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import { ValidationObserver, ValidationProvider } from "vee-validate";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

// Resto de tu configuración de Vue


import VueSweetalert2 from 'vue-sweetalert2'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueSweetalert2,

  render: h => h(App)
}).$mount('#app')
