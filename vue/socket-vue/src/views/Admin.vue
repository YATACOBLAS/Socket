<template>
  <div class=" container">
    <div class="row">
      <div class="col-md-10 text-center my-2"><h1>Aministrador</h1></div>
    </div>
    <div class="row">
       <form v-on:submit.prevent class="col-md-4" >
        <h2 class="my-3">Roles</h2>
          <div class="card" v-for="(item, index) in box" :key="index"  >
        <div :class="{'admin':(rol==item && item=='admin'),'new':(rol==item && item=='new'),'user':(rol==item && item=='user')}"
          class="btn-group-vertical p-3 my-1"
          role="group"
          aria-label="Vertical button group"
        >
          <div  class="form-check " >
            <input
              v-model="rol"
              class="form-check-input"
              type="radio"
              :value="item"
              id="flexCheckDefault" 
            />
            <label class="form-check-label" for="flexCheckDefault">
              {{ item }}
            </label>
          </div>
         </div>
     
         
        </div>
         <button @click="Guardar" class="btn btn-primary my-2">Guardar</button>
      </form>
      <div class="col-md-8 px-0">
        <table class="table  " >
          <thead>
            <tr>
              <th >
                <h2>Usuarios</h2>
              </th>
            </tr>
          </thead>
          <tbody class=" ">
            <tr v-for="(item, index) in usuarios" :key="index" >
              <td class="d-grid" >
                <button :disabled="valorDesactivar"
                  @click="listarRoles(item.idusuario)"
                  type="button"
                  class="btn d-flex justify-content-between align-items-center"
                >
                <strong> {{ item.descripcion }}</strong>    <p>  {{ item.email }}</p>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>   
    </div>
  </div>
</template>
<script>
//el dominio se usa cuando estoy usando dos servicios diferentes para servidor y cliente
//si son el mismo dominio , solo iria io();
//https://socket.io/docs/v3/client-initialization/
//Y esta es la configuracion del cors por si ocurre politicas de Cors
//https://socket.io/docs/v3/handling-cors/


//para que no saturen el servidor
//https://stackoverflow.com/questions/18348554/how-to-handle-when-unknown-socket-io-event/28104984

import {io} from 'socket.io-client'
var socket=io("http://localhost:3000",{
  withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
     }
  });

import { mapState } from "vuex";
export default {
  name: "PanelAdmin",
  data() {
    return {
      valorDesactivar:false,
      usuarios: [],
      rol: "",
      usuario: 0,
      box: ["admin", "user", "new"],
    };
  },
  created() {
    this.listarUsuario();
    this.getRealtimeData();
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    listarUsuario() {
      this.axios
        .get("/listarUsuario")
        .then((res) => {
          this.usuarios = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    listarRoles(id) {
      this.rol = "";
      this.usuario = id;
      this.valorDesactivar=true;
      this.axios
        .get(`/listarRoles/${id}`)
        .then((res) => {
          this.rol = res.data[0][0].descripcion;
          // res.data[0].forEach((rol) => {
          //   this.roles.push(rol.descripcion);
          // });
          this.valorDesactivar=false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Guardar() {
      var datos = {
        idusuario: this.usuario,
        roles: [],
      };
      var headers = {
        "Content-Type": "application/json",
        token: this.token,
      };

      for (let i = 0; i < this.box.length; i++) {
        var count = 0;

        if (this.box[i] == this.rol) {
          datos.roles.push({ rol: this.rol, privilegio: "1" });
          count++;
        }

        if (count == 0) {
          datos.roles.push({ rol: this.box[i], privilegio: "0" });
        }
      }

      this.axios
        .post("/saveRoles", datos, {
          headers: headers,
        })
        .then((res) => {
          this.listarUsuario();
        })
        .catch((err) => {
          console.log(err);
        });
    },
     getRealtimeData() {
      socket.on("notificacion:estado", fetchedData => {
       console.log(fetchedData);
      })
       socket.on("notificacion:regUsuario", fetchedData => {
       console.log(fetchedData[0][0]);
      this.usuarios.unshift(fetchedData[0][0]);
      })
    }

  },
};
</script>
<style lscoped>
  
  .admin{
    background-color:#c61118;
    color:white;
  }
  .user{
    background-color:#00B74A;
    color:white;
  }
  .new{ background-color:#4c75a3;
  color:white;
  }
  .table-body{
    max-height: 30px  !important;
    overflow: auto;
  }

</style>