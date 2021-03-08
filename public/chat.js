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
    Socket.emit('typing',{usuario:nombre.value})
})
Socket.on('notificacion:mensaje',function(data){
    caja.innerHTML+=`<p><strong>${data.usuario}:</strong> ${data.mensaje}</p>`;
    mensaje.value='';
    mensaje.accion='';
});
Socket.on('notificacion:typing',function(data){
    accion.innerHTML+=`<p>${data.usuario} esta escribiendo....</p>`;
    
});