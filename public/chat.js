const Socket=io();

const mensaje=document.getElementById('message');
const accion=document.getElementById('action');
const nombre=document.getElementById('name');
//const estado=document.getElementById('estado');
const caja  =document.getElementById('caja');
const boton= document.getElementById('btn');
boton.addEventListener('click',function(){
    Socket.emit('mensaje',{
        mensaje: mensaje.value,
        usuario:nombre.value})
   
});
mensaje.addEventListener('keypress',function(){
    Socket.emit('typing',nombre.value)
})
Socket.on('notificacion:mensaje',function(data){
    caja.innerHTML+=`<p><strong>${data.usuario}:</strong> ${data.mensaje}</p>`;
    mensaje.value='';
    accion.innerHTML='';
});
Socket.on('notificacion:typing',function(data){
    accion.innerHTML=`<p>${data} esta escribiendo....</p>`;
   
});
Socket.on('notificacion:estado',function(data){
    lista.innerHTML+=`<p>${data}</p>`;
  
});
Socket.on('notificacion:no_estado',function(data){
    lista.innerHTML+=`<p>${data}</p>`;
  
});