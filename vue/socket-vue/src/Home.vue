<template>
      <div>       
                <Navega v-if="estadoActivo && usuario.data.rol === 'admin'" ></Navega>
           <router-view/>
      </div>
 
</template>
<script>
import {mapGetters, mapActions,mapState} from 'vuex'

import Navega from './components/Navegacion'
export default {
name:'HomePrincipal',
components:{
 Navega
  },
  data() {
    return {
      clase:'row',
  
    }
  },
 computed:{
      ...mapGetters(['estadoActivo']),
      ...mapState(['token','usuario'])  },
  methods: {
    ...mapActions(['leerToken'])
  },
  created() {
    this.leerToken();
  }, 
  mounted() {
      window.onpopstate = event => {
      if (
        this.token !=='' &&   this.$route.name=== "login"
      ) {
        if (this.usuario.data.rol === 'new') {
           this.$router.push({ name: 'espera' })
        } else {
         this.$router.push({ name: 'salas' })
        }
        // this.$router.go(0);
      }
    };
  }
}
</script>