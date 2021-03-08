const express= require('express');
const app = express();
const path= require('path');
const mysql =require('mysql');
//url de la base de datos
// mysql://:8253dddd@/?reconnect=true
//settings
app.set('port', process.env.PORT || 8080);

const connection= mysql.createConnection({
    host:'us-cdbr-east-03.cleardb.com',
    user:'b22b2cd12e8323',
    password:'8253dddd',
    database:'heroku_7cde431e4aab46a'    
})
 
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
