const express= require('express');
const path= require('path');
const mysql =require('mysql');
const cors =require('cors');
const myConnection = require('express-myconnection');


//Los atacantes pueden utilizar esta cabecera (que está habilitada de forma predeterminada) 
//para detectar las aplicaciones que ejecutan Express e iniciar ataques con destinos específicos.

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 
  }
const app = express();
//url de la base de datos
// mysql://:8253dddd@/?reconnect=true
//settings
app.set('port', process.env.PORT || 3000);
//probando
// app.use(myConnection(mysql, {
//     host:'us-cdbr-east-03.cleardb.com',
//     user:'b22b2cd12e8323',
//     password:'8253dddd',
//     port:3306 ,
//     database:'heroku_7cde431e4aab46a'
// },'single'));
 

// app.use(myConnection(mysql, {
//     host:'localhost',
//     user:'root',
//     password:'root',
//     port:3306 ,
//     database:'dbpams'
// },'single'));

app.use(myConnection(mysql, {
    host:'104.248.228.173',
    user:'jhon',
    password:'@pams$Server_2021',
    port:3306,
    database:'dbpams'
},'single'));

// app.use(myConnection(mysql, {
//     host:'178.128.68.102',
//     user:'fixblue',
//     password:'$Fixblue_remoto%123',
//     port:3306 ,
//     database:'FIXBLUE'
// },'single'));



// con.connect(function(err){
//     if(err) throw err;
//    console.log('Conected!!');
// })
app.use(cors());
app.use(express.json());

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));



// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
//static files
app.use(express.static(path.join(__dirname +'/../public')));

const server= app.listen(app.get('port'),()=>{
   console.log('listening port 3000'); 
});

//WebSocket
const io= require('socket.io')(server,{
    cors: { 
        origin: "http://localhost:8080" , 
        methods: [ "GET" , "POST" ], 
        allowedHeaders: [ "my-custom-header" ], 
        credentials: true
       } 
});


    io.on('connection',(socket)=>{
    console.log('new Connection');     
  
            io.sockets.emit('notificacion:estado','fulano esta conectado');
  

       
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

app.set('socket.io',io);


// const {IO}=require('./api/Api');
// IO(io);
//RUTAS
app.use('/api/', require('./routes/ListRoutes.js'));
