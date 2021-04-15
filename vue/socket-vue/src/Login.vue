<template>

    <div class=" vh-100  vw-100  d-flex justify-content-center  align-items-center pams-fondo-login" >
      <div class=" d-flex justify-content-center  " >
        <div class=" col-md-8 col-sm-8 col-lg-8 col-xl-8 col-11  row d-flex justify-content-center mb-5 pams-login">
          <form  @submit.prevent="ingresar" class=" row justify-content-center text-center pams-letra " >
              <div class="card-header" > 
                   <h1>Login</h1>
              </div>
              <div class="card-body m-3 login" >             
                <input  v-model="$v.email.$model" :class="{'is-invalid':!$v.email.email}"  class="form-control my-3 " placeholder="Email" type="email" name="" >                                              
                <input placeholder="password"  v-model="password"  class="form-control my-3"  type="password" name="" required >
                <p class="text-danger">{{mensajeError}}</p>
                <button class="btn btn-primary mt-3">INGRESAR</button>
               </div>
          </form>
            <div class="text-center">
                  <p style="color: white;" class="mt-2">¿No estas registrado?
                 <a href="" data-mdb-toggle="modal" data-mdb-target="#exampleModal"  class="text-primary"> 
                      Registrarse </a></p>
            </div>
        <Registro></Registro>
          
        </div>
      </div>
    </div>

</template>
<script>
import Registro from './components/Registro.vue';
import {required, email} from 'vuelidate/lib/validators'
import {mapActions} from 'vuex'
export default {
  name:'Login',
  components:{Registro},
  data(){
    return{
          email:'',
        password:'',
        mensajeError:''
    }
  },
  validations:{
    email:{required,email},
  },
  methods: {
    ...mapActions(['guardarUsuario']),
    ingresar(){
       this.axios.post('/Login',{email:this.email,pass:this.password }).then(res=>{              
                  
              this.guardarUsuario(res.data.token);
                 this.email='';
                    this.password='';
                     this.mensajeError='';
           }).catch(err=>{
             this.email='';
             this.password='';
             this.mensajeError=err.response.data.mensaje;
            })
    }

  },
  
}
</script>
<style scoped>
.pams-fondo{
background-color:#A41212 ;
}
.pams-login{
  /* background-color:#4575BD ; */
   background-color: #1A58B4;
}
.pams-fondo-login{
/* background-image: url('https://i.pinimg.com/564x/5f/7a/db/5f7adb4063b3ad66c3df60250b2ae7e7.jpg') center center ; */
background-color: #0B3D87;

}
.pams-letra{
color:#CEA22E;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.login input[type="text"]:focus:not([readonly]) + label {
  color:#CEA22E;
}
.login input[type="text"]:read-write {

  box-shadow: 0 1px 0 0 #CEA22E !important;
  border-bottom: 1px solid #CEA22E !important;
}

</style>
