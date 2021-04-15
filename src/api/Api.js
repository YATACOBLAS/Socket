const api = {};
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { Blob } = require('buffer');
const fs = require('fs');

api.listarUsuario = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vista_usuarios', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.listarRol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rol', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.listarEmpresa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from empresa', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.listarRoles = (req, res) => {
    var idusuario = req.params.idusuario;
    req.getConnection((err, conn) => {
        conn.query('call SOCKET_OBTENER_USUARIO_ROL(?)', [idusuario], (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
        });
    });
};
api.saveRoles = (req, res) => {

    var idUsuario = req.body.idusuario;
    var descripcionRol = req.body.rol;
    req.getConnection((err, conn) => {
        conn.query('CALL SOCKET_INSERTAR_ROL(?,?) ', [idUsuario, descripcionRol], (err, result, fields) => {

            if (err) {
                respuesta.json(err)
            } else {
                res.json({ mensaje: 'Registro Exitoso' });
            }
        });
    });
}


api.saveUsers = (req, res) => {
    var user = req.body.usuario;
    var email = req.body.email;
    var idEmpresa = req.body.idempresa
    var pass = bcrypt.hashSync(req.body.password, saltRounds);
    req.getConnection((err, conn) => {
        if (err) {
            res.status(500).json({
                mensaje: 'Ocurrio un error',
                err
            });
            console.log('Conexion');
        }
        conn.query('CALL SOCKET_REGISTER_USER(?,?,?,?)', [user, email, pass, idEmpresa], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
            } else {
                if (result[0][0].total) {
                    var total = result[0][0].total;
                    //var io=req.app.get('socket.io');
                    //io.sockets.emit('notificacion:regUsuario',result);
                    total > 0 ? res.json({ mensaje: 'Registro Exitoso' }) : res.status(500).json({ mensaje: 'No se registro' });
                }
            }
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

api.File = async (req, res) => {

    console.log("descripcion: ",req.file);
    console.log("buffer:", req.file.buffer);
    console.log("buffer-Length:", (req.file.buffer).length);

    var descripcion = req.body.descripcion;
    var archivo = req.file.buffer;
    req.getConnection((err, conn) => {
        conn.query('CALL SOCKET_INSERTAR_EXAMEN(?,?,?)', ['hola', archivo, 4], (err, result) => {
            if (err) {
                res.status(400).json({
                    mensaje: 'Error al subir Archivo',
                    err
                })
            } else {

                res.status(200).json({ mensaje: 'Realizado' });
            }
        });
    });
};

api.File = async (req, res) => {
    console.log("descripcion: ",req.file.originalname);
    console.log("buffer:", req.file.buffer);
    console.log("buffer-Length:", (req.file.buffer).length);
    // const blob = Blob.prototype.arrayBuffer(req.file.buffer);
    // var blob = await new Blob([new Uint8Array(req.file.buffer)]);
    var descripcion = req.file.originalname;
    var archivo = req.file.buffer;
    req.getConnection((err, conn) => {
        conn.query('CALL SOCKET_INSERTAR_EXAMEN(?,?,?)', [descripcion, archivo, 4], (err, result) => {
            if (err) {
                res.status(400).json({
                    mensaje: 'Error al subir Archivo',
                    err
                })
            } else {
                res.status(200).json({ mensaje: 'Realizado' });
            }
        });
    });
};

api.getFile = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select archivo from examen where idexamen= 4', (err, result) => {
            if (err)
                res.status(500).json({ mensaje: 'Error en consulta'})
            else{
                console.log(result[0].archivo)   
                    // const blob = Blob.prototype.arrayBuffer(result[0].archivo);

                    function _arrayBufferToBase64( buffer ) {
                        var binary = '';
                        var bytes = new Uint8Array( buffer );
                        var len = bytes.byteLength;
                        for (var i = 0; i < len; i++) {
                            binary += String.fromCharCode( bytes[ i ] );
                        }
                        return  binary;
                    }
                   //var base64=_arrayBufferToBase64(result[0].archivo)
                   
                // var blob =  new Blob([new Uint8Array(result[0].archivo)]);
                // console.log(blob)
                console.log();
            }
            res.status(200).json({ data: result[0].archivo });
        })
    })

}



module.exports = api;
//esto me servira para registrar lso examenes
/*

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
*/