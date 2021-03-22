<template>
  <nav class="navbar  navbar-expand-lg navbar-dark  bg-primary px-4 py-0">
    <!-- <a class="navbar-brand ml-3 font-weight-bold " href="#" id="brand_enterprise ">
        <img height="30" alt="Blue logo"> 
    </a> --> 

    <h2 class="text-white mb-0 mx-lg-4">PAMS</h2>
      <div class=" d-flex  flex-row">    
        <!-- <img
          src="https://mdbootstrap.com/img/new/avatars/1.jpg"
          class="rounded-circle"
          height="30"
          alt=""
          loading="lazy"
        /> -->
        <h5 class="text-white mx-1 mb-0 mx-lg-3">John Walcom</h5>
      <a
        class="text-white "
      >
        <i class="fas fa-bell fa-sm"></i>
        <span class="badge rounded-pill badge-notification bg-danger">12</span>
      </a>
      </div>
       <button ref="resorte"
       class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
   <div class="collapse navbar-collapse d-lg-flex justify-content-end "  id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0 font-weight-bold ">
            <li v-for="(item,index) in menu" :key="index" class=" text-center nav-item">
                <router-link  @click.native="Acordion" class="nav-link waves-effect waves-light text-white" :to="item.path">
                <i :class="item.icon"></i>
                    <p class=""> {{item.name}}</p>

                </router-link >
            </li>

       
        </ul>
    </div>
</nav>
</template>
<script>
export default {
    name:'Navegacion',
    data() {
        return {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            txt: '',
             txt2: '',
             menu:[
               {path:'/salas', name:'Salas',icon:'fab fa-buromobelexperte'},
               {path:'/statistics', name:'Estadistica',icon:'fas fa-signal'},
               {path:'/create_pdf', name:'Reporte',icon:'far fa-sticky-note'},
               {path:'/admin', name:'admin',icon:'fas fa-cogs'}
               
             ]
        }
    }, 
    watch: {
    windowHeight(newHeight, oldHeight) {
     this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    },
     windowWidth(newWidth, oldWidth) {
     this.txt2 = `it changed to ${newWidth} from ${oldWidth}`;
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);

    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
    Acordion(){
  
      if(this.windowWidth<992){
            this.$refs.resorte.click()
            
      }
    },
    onResize() {
      this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
    }
  }     
}
</script>