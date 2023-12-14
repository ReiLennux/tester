import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import axios from 'axios';  

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: "",
    token: "",  
  },
  getters: {
    isAuthenticated: state => !!state.token,  // Verificar si hay un token (autenticado)
  },
  mutations: {
    login(state, { email, token }) {
      state.email = email;
      state.token = token;  // Almacena el token en el estado
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sesión iniciada",
        showConfirmButton: false,
        timer: 1500
      });
    },
    logout(state) {
      state.email = "";
      state.token = "";  // Limpia el token al cerrar sesión
      localStorage.removeItem('email');
      localStorage.removeItem('token');  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hasta luego",
        showConfirmButton: false,
        timer: 1500
      });
    },
    initializeStore(state) {
      if (localStorage.getItem('email')) {
        state.email = localStorage.getItem('email');
      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token');  // Recupera el token al inicializar
      }
    }
  },
  actions: {
    async fetchToken({ commit }, { email, password }) {
      try {
        const response = await axios.post('https://localhost:5038/api/login', {
          email,
          password,
        });
        const token = response.data.token;
        commit('login', { email, token });
      } catch (error) {
        // erro
        console.error('Error al obtener el token:', error);
      }
    },
    
  },
  modules: {}
})
