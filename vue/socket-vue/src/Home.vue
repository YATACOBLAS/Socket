<template>

       
      <div :class="{'row':estadoActivo}" class="m-0">
        
            <Sidebar class="col-2" v-if="estadoActivo"></Sidebar>
        
        <div class="col-10">
           <Nav v-if="estadoActivo && usuario.data.rol === 'usuario'" name="usuario.data" ></Nav>
        <Navadmin v-if="estadoActivo && usuario.data.rol === 'admin'"> </Navadmin>
           <router-view/>
        </div>
      </div>
        
   
 
</template>
<script>
import Sidebar from './components/SidebarMenu'
import {mapGetters, mapActions,mapState} from 'vuex'
import Nav from './components/Nav'
import Navadmin from './components/NavAdmin'
export default {
name:'HomePrincipal',
components:{
  Nav,Navadmin,Sidebar
  },
  data() {
    return {
      clase:'row'
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
  },
}
</script>