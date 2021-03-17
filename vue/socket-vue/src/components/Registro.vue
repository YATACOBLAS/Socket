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
     <form action="" class="card   pams-letra pams-fondo" >
              <div class="card-header" > 
                   <h1>Login</h1>
              </div>
              <div class="card-body m-3" >
            <div class="row mb-4">
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
              </div>
                  <label for="" >Usuario (Nombre y Apellido):</label>            
                  <input  v-model="$v.usuario.$model" :class="{ 'is-valid':(!$v.usuario.$error && usuario.length>0), 'is-invalid':!$v.usuario.minLength}" class="form-control" placeholder="Usuario" type="text" name="" >
                   <p class="text-danger" v-if="!$v.usuario.minLength">min 8 caracteres</p>
                  <label for="" >Email:</label>   
                <input  v-model="$v.email.$model" :class="{'is-valid':(!$v.email.$error && email.length>0) ,'is-invalid':!$v.email.email}" class="form-control  " placeholder="Email" type="email" name="" >              
                <label for="">Password</label>                    
                <input placeholder="password"  v-model="$v.password.$model" :class="{'is-valid':($v.repeatPassword.sameAsPassword && repeatPassword.length>0), 'is-invalid':!$v.password.minLength}" class="form-control"  type="password" name="" >
                  <p class="text-danger" v-if="!$v.password.minLength">min 8 caracteres</p>
                  <label for="">Repeat password</label>
                <input placeholder="repeat password"  v-model="$v.repeatPassword.$model" :class="{'is-valid':($v.repeatPassword.sameAsPassword && repeatPassword.length>0),'is-invalid':(!$v.repeatPassword.sameAsPassword && repeatPassword.length>0)}" class="form-control"  type="password" name="" >
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
        repeatPassword:''
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

  }
  

}
</script>
<style scoped>
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
