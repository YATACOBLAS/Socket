import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login.vue'
import Salas from '../views/Salas'
import Espera from'../views/Espera'
import Admin from'../views/Admin'

import store from '../store/index'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
    
  },
  {
    path: '/salas',
    name: 'salas',
    component:Salas,
    meta:{requireAuth:true}

  } ,
  {
    path: '/espera',
    name: 'espera',
    component: Espera,
    meta:{requireNew:true,requireAuth:true}
  } , 
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{requireAdmin:true,requireAuth:true}
  } ,
  {
    path:'*',
    name:'notFound',
    component: Salas
 }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
const  protectedRoute= to.matched.some(r =>r.meta.requireAuth);
const  protectedAdmin= to.matched.some(r =>r.meta.requireAdmin);
const  protectedNew= to.matched.some(r =>r.meta.requireNew);

    if(protectedRoute && store.state.token===''){
      router.push({name:'login'});
    }
    // else if(protectedAdmin && store.state.usuario.data.rol!=='admin'){
    //   router.go(0); 
    // } 
    // else if(protectedNew && store.state.usuario.data.rol!=='new'){
    //   router.go(0); 
    // } 
    next()
})

export default router;
