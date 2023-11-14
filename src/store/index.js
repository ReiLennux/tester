import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: ""
  },
  getters: {
  },
  mutations: {

    login(state, email) {
      state.email = email
      localStorage.setItem('email', email);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sesión iniciada",
        showConfirmButton: false,
        timer: 1500
      });
    },
    logout(state) {
      state.email =""
      localStorage.removeItem('email')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hasta luego",
        showConfirmButton: false,
        timer: 1500
      });
    },
    initializeStore(state) {
      if(localStorage.getItem('email')){
        state.email = localStorage.getItem('email')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

