<template>
  <div class="vh-100 sidebar-menu pams-fondo">
    <div class="text-center"><h1>Blue</h1></div>
    <div class="">
      <div class="row my-1">
        <button class="btn">
          <router-link to="/salas" style="color: white"> MENU 1 </router-link>
        </button>
      </div>
      <div class="row">
        <button class="btn">
          <router-link to="/salas" style="color: white"> MENU 1 </router-link>
        </button>
      </div>
      <div class="row">
        <button class="btn">
          <router-link to="/salas" style="color: white"> MENU 1 </router-link>
        </button>
      </div>
      <div class="row">
        <button class="btn">
          <router-link to="/salas" style="color: white"> MENU 1 </router-link>
        </button>
      </div>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-mdb-toggle="dropdown"
          aria-expanded="true"  >
          Action
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
       <div class="row">  <button class="btn "><router-link to="/salas" style="color:white"> MENU 1 </router-link> </button>   </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebarMenu",
};
</script>
<style scoped>
.sidebar {
  min-height: 100vh;
  padding: 0.875rem 1.25rem;
}

.pams-fondo {
  background-color: #a41212;
  text-decoration: none;
  color: wheat;
}
</style>