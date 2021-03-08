const express= require('express');
const app = express();
const path= require('path');


//settings
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname +'/public')));

const server= app.listen(app.get('port'),()=>{
   console.log('listening port 3000'); 
});

//WebSocket
const SocketIO= require('socket.io');

const io =SocketIO(server);

io.on('connection',(socket)=>{
    console.log('new Connection');
    socket.on('mensaje',(data)=>{
        //io => es la coneccion de todo , entrera la 
        //sockets, es decir todos los que estan conectados    
        io.sockets.emit('notificacion',data);
    })
});
