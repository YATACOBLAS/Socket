const express= require('express');
const path= require('path');
const mysql =require('mysql');
const cors =require('cors');
const myConnection = require('express-myconnection')

const app = express();
//url de la base de datos
// mysql://:8253dddd@/?reconnect=true
//settings
app.set('port', process.env.PORT || 8080);

app.use (myConnection(mysql,{
    host:'us-cdbr-east-03.cleardb.com',
    user:'b22b2cd12e8323',
    password:'8253dddd',
    database:'heroku_7cde431e4aab46a'    
},'single'));
 

app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
//static files
app.use(express.static(path.join(__dirname +'/public')));


//RUTAS
app.get('/',)



const server= app.listen(app.get('port'),()=>{
   console.log('listening port 3000'); 
});

//WebSocket
const SocketIO= require('socket.io');

const io =SocketIO(server);

io.on('connection',(socket)=>{

    console.log('new Connection');
    
    socket.broadcast.emit('notificacion:estado','fulano esta conectado');
   
    socket.on('mensaje',(data)=>{
        //io => es la coneccion de todo , entrera la 
        //sockets, es decir todos los que estan conectados    
        io.sockets.emit('notificacion:mensaje',data);
    })
    socket.on('typing',(data)=>{
        //io => es la coneccion de todo , entrera la 
        //sockets, es decir todos los que estan conectados    
        socket.broadcast.emit('notificacion:typing',data);
    })
});
io.on('disconnect',(socket)=>{
    socket.broadcast.emit('notificacion:no_estado','fulano se desconectó');
})