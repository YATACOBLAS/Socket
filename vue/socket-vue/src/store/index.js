import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    usuario: ''
  },
  mutations: {
    obtenerUsuario(state, payload) {
      state.token = payload;
      if (payload === '') {
        state.usuario = ''
      } else {
        state.usuario = decode(payload)
        console.log(state.usuario.data.rol);     
        if (state.usuario.data.rol === 'new') {
          router.push({ name: 'espera' })
        } else {
          router.push({ name: 'salas' })
        }
      }
    }
  },
  actions: {
    guardarUsuario({ commit }, payload) {
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },

    cerrarSession({ commit }, payload) {
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    },

    leerToken({ commit }, payload) {      
      const token= localStorage.getItem('token');
        if(token){
          commit('obtenerUsuario', token)
        }else{
          commit('obtenerUsuario', '');
        }
    },
    
    redireccionar({},payload){
      
    }

  },
  getters: {
    estadoActivo: state => !!state.token
  },
  modules: {
  }
})
