const api = {};
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');



api.listarUsuario = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select idusuario,descripcion,email from usuario', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.listarRoles = (req, res) => {
    var idusuario = req.params.idusuario;
    req.getConnection((err, conn) => {
        conn.query('call SOCKET_LISTAR_USUARIO_ROL(?)', [idusuario], (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.saveRoles = (req, res) => {
    var iteracion = req.body.roles.length;
    Roles(req.body, iteracion-1, req, res);
};

function Roles(body, iteracion, peticion, respuesta) {
    peticion.getConnection((error, conn) => {
        if (error) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
        } else {
            var idusuario = body.idusuario;
            var idrol = body.roles[iteracion].rol;
            var privilegio = body.roles[iteracion].privilegio;
            conn.query('CALL SOCKET_INSERTAR_ROL(?,?,?) ', [idusuario, idrol, privilegio], (err, result, fields) => {
                if (err) {
                    respuesta.json(err)
                } else {
                    if (iteracion > 0) {
                        Roles(body, iteracion - 1, peticion, respuesta);
                    }
                }
            });
        }
    });
}

api.saveUsers = (req, res) => {
    var user = req.body.usuario;
    var email = req.body.email;
    var pass = bcrypt.hashSync(req.body.password, saltRounds);
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
        }
        conn.query('CALL SOCKET_REGISTER_USER(?,?,?)', [user, email, pass], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
            }

            var io=req.app.get('socket.io');
            io.sockets.emit('notificacion:regUsuario',result);
            res.json({mensaje:'registrado'});
        });
    })
};

api.login = (req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio en conexión',
            });
        }

        conn.query('call SOCKET_LOGIN_USER(?)', [email], (err, result) => {
          
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
            }
            else if (!result[0].length) {

                res.status(400).json({
                    mensaje: 'Usuario no valido'
                });
            } else {

                var dato = result[0][0];
                var password = dato.pass;

                if (!bcrypt.compareSync(pass, password)) {
                    res.status(500).json({
                        mensaje: 'Error en sus credenciales',
                        err
                    });
                } else {

                    var usuario = {
                        nombre: dato.descripcion,
                        email: dato.email,
                        rol: dato.rol
                    }

                    //generando un token
                    let token = jwt.sign({ data: usuario }, 'SECRETO_PAMS_2021_TRAZABILIDAD_SECRETO', { expiresIn: 60 * 60 * 24 * 30 })
                    //responder con las validaciones echas anteriormente
                    res.json({
                        usuario,
                        token: token
                    });
                }



            }


        });
    })
};


module.exports = api;

// Controller.listar=(req,res)=> {
//     var desde =req.query.desde;
//     var hasta =req.query.hasta;
//     var Descripcion=req.query.descripcion;
//     var estado=req.query.estado;
// console.log(`${'hola mano '- desde - hasta - Descripcion - estado}` )
//    req.getConnection((err, conn) => {
//        conn.query('call SPU_LISTAR_MOVIMIENTO_DESDE_HASTA_DESCRIPCION(?,?,?,?)',[desde,hasta,Descripcion,estado], (err, resultado) => {
//            if (err) { 
//                console.log(err);
//             }else{             

//           res.json(resultado);
//            }

//        });
//    });
