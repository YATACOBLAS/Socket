<template>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      

     <form    @submit.prevent="Registrar" class="card   pams-letra pams-registro" >
               <div class="modal-header border-0" > 
                <h1  class="text-center" >Registro</h1>
                   <button
                  type="button"
                  class="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body m-3" >
            <!-- <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div> -->
                  <label for="" >Usuario (Nombre y Apellido):</label>            
                  <input  v-model="$v.usuario.$model" :class="{ 'is-valid':(!$v.usuario.$error && usuario.length>0), 'is-invalid':!$v.usuario.minLength}" class="form-control" placeholder="Usuario" type="text" name="" required>
                   <p class="text-danger" v-if="!$v.usuario.minLength">min 8 caracteres</p>
                  <label for="" >Email:</label>   
                <input  v-model="$v.email.$model" :class="{'is-valid':(!$v.email.$error && email.length>0) ,'is-invalid':!$v.email.email}" class="form-control  " placeholder="Email" type="email" required >              
                <label for="">Password</label>                    
                <input placeholder="password"  v-model="$v.password.$model" :class="{'is-valid':($v.repeatPassword.sameAsPassword && repeatPassword.length>0), 'is-invalid':!$v.password.minLength}" class="form-control"  type="password" name="" >
                  <p class="text-danger" v-if="!$v.password.minLength">min 8 caracteres</p>
                  <label for="">Repeat password</label>
                <input placeholder="repeat password"  v-model="$v.repeatPassword.$model" :class="{'is-valid':($v.repeatPassword.sameAsPassword && repeatPassword.length>0),'is-invalid':(!$v.repeatPassword.sameAsPassword && repeatPassword.length>0)}" class="form-control"  type="password" name="" >
                <p class="text-danger my-1" v-if="msgpass" >Clave Incorrecta</p>
                <div class="d-flex justify-content-center">
                        <button v-if="!validoRegistro" class="btn btn-primary mt-3 " :disabled="btnReg" >Registrarse</button>
                      
                </div>
                <div  v-if="validoRegistro" class="card bg-success text-white text-center py-1 my-1 ">Registro Exitoso</div>
             </div>
          </form>
    </div>
  </div>
</div>
</template>
<script>
import {required, email, sameAs, minLength} from 'vuelidate/lib/validators'


export default {
    name:'Registro',

     data(){
    return{
        usuario:'',
        email:'',
        password:'',
        repeatPassword:'',
        btnReg:false,
        msgpass:false,
        validoRegistro:false
    }
  },
  validations:{
    usuario:{
    required, 
    minLength:minLength(6)
    },
    email:{required,email},
    password:{
      required,
      minLength:minLength(8)
    },
    repeatPassword:{
      sameAsPassword:sameAs('password')
    }

  },

  methods: {
    Registrar(){

    if(this.$v.repeatPassword.sameAsPassword){
      this.msgpass=false
      this.axios.post('/saveUsers',{
        usuario:this.usuario.trim(),
        email:this.email,
        password:this.password
      })
       .then(res=>{
               this.validoRegistro=true;
               setTimeout(()=>{this.validoRegistro=false },3000)
               this.usuario='';
               this.email='';
                this.password='';
                this.repeatPassword='';
              })
              .catch(err=>{
                console.log(err.response.data.mensaje)
              })
    }
    else{
      this.msgpass=true;
    }
      
    }
    
  },
  

}
</script>
<style scoped>
.pams-registro{
  /* background-color:#4575BD ; */
   background-color: #1A58B4;
}
.pams-fondo{
background-color:#A41212 ;
}
.pams-fondo-ligth{
  background-color: #B9A6A6;
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
</style>
