const api = {};
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { Blob } = require('buffer');
const fs = require('fs');

api.listarEmpresa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empresa', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarUsuario = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vista_usuarios', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};


api.listarRol = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rol', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};
api.listarEmpresa = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from empresa', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarTipoMuestraLab= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from tipoMuestraLab', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarMuestraLab = (req, res) => {
    //no usar parametro id  agergar otro nombre
    var idTipoMuestraLab=req.params.idMuestra;
    req.getConnection((err, conn) => {
        conn.query('select idMuestraLab, descripcion from muestraLab WHERE idTipoMuestraLab = ?',[idTipoMuestraLab], (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarExamHoyLaboratorio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_HOY_EXAMEN_DE_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

api.listarExamPendientesLaboratorio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_EXAMEN_DE_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};


api.listarExamHoyLaboratorio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_HOY_EXAMEN_DE_LABORATORIO_PAMS;', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

api.modificarExamLaboratorio = (req, res) => {
    var iteracion= req.body.examenes.length;
 
 modificarLaboratorio(req.body,iteracion,req,res)
}
function modificarLaboratorio(body,iteracion,peticion,respuesta){
        var dni=body.dni;
        var nombres=body.nombres;
        var apellidos=body.apellidos
        var fechaNacimiento=body.fechaNacimiento;
        var telefono=body.telefono;
        var empresa=body.empresa;
             var stringDoExamen=body.examenes[iteracion-1].doExamen;
        var doExamen=(stringDoExamen=='Modificar'? 1:(stringDoExamen=='Nuevo'? 0 : -1 )) ; 
        var idExamen=body.examenes[iteracion-1].idExamen; 
        var fechaRegistroExamen=body.fechaRegistroExamen; 
        var fechaAtencion=body.examenes[iteracion-1].atendido? fechaRegistroExamen: null; 
        var fechaEntregaResultado=body.examenes[iteracion-1].fechaResultado ===''? null: body.examenes[iteracion-1].fechaResultado; 
        var idMuestraLab=body.examenes[iteracion-1].id;
        var idPaciente=body.examenes[iteracion-1].idPaciente;
        var idUsuario=peticion.usuario.idUsuario;  
         
    peticion.getConnection((err, conn) => {
        conn.query('CALL MODIFICAR_EXAMEN_DE_LABORATORIO_PAMS(?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
                     [dni,nombres, apellidos,fechaNacimiento,telefono,empresa,doExamen,idExamen, 
                     fechaRegistroExamen, fechaAtencion,fechaEntregaResultado,
                     idMuestraLab,idPaciente,idUsuario], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                return;
            } else {
                iteracion--;
                if(iteracion<1){
                respuesta.json({ mensaje: 'Registro Exitoso' });
                return;
                }else{
                    modificarLaboratorio(body,iteracion,peticion,respuesta);
                }
              
            }
        });
    });

}

api.modificarUnSoloExamLaboratorio = (req, res) => {
 
    var idExamen=req.body.idExamen;
    var fechaAtencion=req.body.atendido; 
    var fechaEntregaResultado=req.body.fechaResultado ===''? null: req.body.fechaResultado; 
    var idMuestraLab=req.body.id;
    var idUsuario=req.usuario.idUsuario;  

    req.getConnection((err, conn) => {
        conn.query('call MOD_UN_EXAMEN_DE_LABORATORIO_PAMS(?,?,?,?,?)',
        [idExamen,fechaAtencion,fechaEntregaResultado,idMuestraLab,idUsuario], (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};


api.saveExamLaboratorio = (req, res) => {
        var iteracion= req.body.examenes.length;
        SaveLaboratorio(req.body,iteracion,req,res)
    }
    function SaveLaboratorio(body,iteracion,peticion,respuesta){
        var dni=body.dni;
        var nombres=body.nombres;
        var apellidos=body.apellidos
        var fechaNacimiento=body.fechaNacimiento;
        var telefono=body.telefono;
        var empresa=body.empresa;
        var fechaRegistroExamen=body.fechaRegistroExamen; 
        var fechaAtencion=body.examenes[iteracion-1].atendido? fechaRegistroExamen: null; 
        var fechaEntregaResultado=body.examenes[iteracion-1].fechaResultado ===''? null: body.examenes[iteracion-1].fechaResultado; 
        var idMuestraLab=body.examenes[iteracion-1].id;
        var idUsuario=peticion.usuario.idUsuario;  
        peticion.getConnection((err, conn) => {
            conn.query('CALL INSERTAR_EXAMEN_DE_LABORATORIO_PAMS(?,?,?,?,?,?,?,?,?,?,?) ',
                         [nombres, apellidos,fechaNacimiento,telefono,dni,empresa,fechaRegistroExamen
                            ,fechaAtencion,fechaEntregaResultado,idMuestraLab,idUsuario], (err, result, fields) => {
                if (err) {
                    respuesta.status(400).json(err)
                    return;
                } else {
                    iteracion--;
                    
                    if(iteracion<1){
                    respuesta.json({ mensaje: 'Registro Exitoso' });
                    return;
                    }else{
                        SaveLaboratorio(body,iteracion,peticion,respuesta);
                    }
                  
                }
            });
        });
    
    }




api.listarTipoMuestraPat= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from tipoMuestraPat', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};
api.listarMuestraPat = (req, res) => {
    //no usar parametro id  agergar otro nombre
    var idTipoMuestraPat=req.params.idMuestra;
    req.getConnection((err, conn) => {
        conn.query('select idMuestraPat, descripcion from muestraPat WHERE idTipoMuestraPat = ?',[idTipoMuestraPat], (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};


api.listarExamHoyPatologia = (req, res) => {
    var fechaHoy=req.body.fechaHoy;
    req.getConnection((err, conn) => {
        conn.query('call LISTA_HOY_EXAMEN_DE_PATOLOGIA(?)',[fechaHoy], (err, result,fields) => {
            if (err) { res.json(err) };
            res.json(result[0]);
            return;
        });
    });
};


api.listarExamPendientesPatologia = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTES_EXAMEN_DE_PATOLOGIA', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};



api.listarRoles = (req, res) => {
    var idusuario = req.params.idusuario;
    req.getConnection((err, conn) => {
        conn.query('call SOCKET_OBTENER_USUARIO_ROL(?)', [idusuario], (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

api.saveRoles = (req, res) => {
    var idUsuario = req.body.idusuario;
    var descripcionRol = req.body.rol;
    req.getConnection((err, conn) => {
        conn.query('CALL INSERTAR_ROL(?,?) ', [idUsuario, descripcionRol], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                 return;
            } else {
                res.json({ mensaje: 'Registro Exitoso' });
                return;
            }
        });
    });
}

api.saveMuestra = (req, res) => {

    var descripcion = req.body.descripcion;
    var idTipoMuestraPat=req.body.idTipoMuestraPat;

    req.getConnection((err, conn) => {
        conn.query('call INSERTAR_MUESTRA_PATOLOGIA(?,?)', [idTipoMuestraPat, descripcion], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                return;
            } else {
                res.json({ mensaje: 'Registro Exitoso' });
                return;
            }
        });
    });
}


api.modificarExamPatologia = (req, res) => {
    var iteracion= req.body.examenes.length;

 
 modificarPatologia(req.body,iteracion,req,res)
}
function modificarPatologia(body,iteracion,peticion,respuesta){

        var dni=body.dni;
        var nombres=body.nombres;
        var apellidos=body.apellidos
        var fechaNacimiento=body.fechaNacimiento;
        var telefono=body.telefono;
        var empresa=body.empresa;
             var stringDoExamen=body.examenes[iteracion-1].doExamen;
        var doExamen=(stringDoExamen=='Modificar'? 1:(stringDoExamen=='Nuevo'? 0 : -1 )) ; 
        var idExamen=body.examenes[iteracion-1].idExamen; 
        var fechaRegistroExamen=body.fechaRegistroExamen; 
        var fechaAtencion=body.examenes[iteracion-1].atendido? fechaRegistroExamen: null; 
        var fechaEntregaResultado=body.examenes[iteracion-1].fechaResultado ===''? null: body.examenes[iteracion-1].fechaResultado; 
        var cantidad=body.examenes[iteracion-1].cantidad; 
        var fechaEnvioMuestra=body.examenes[iteracion-1].fechaEnvio ===''? null: body.examenes[iteracion-1].fechaEnvio; 
        var estadoEnvio=body.examenes[iteracion-1].enviado;
        var estadoPago=body.examenes[iteracion-1].pagado;
        var idMuestraPat=body.examenes[iteracion-1].id;
        var idPaciente=body.examenes[iteracion-1].idPaciente;
        var idUsuario=peticion.usuario.idUsuario;  
         
    peticion.getConnection((err, conn) => {
        conn.query('CALL MODIFICAR_PACIENTE_EXAMEN_PATOLOGIA(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
                     [dni,nombres, apellidos,fechaNacimiento,telefono,empresa,doExamen,idExamen, 
                     fechaRegistroExamen, fechaAtencion,fechaEntregaResultado,
                     cantidad,fechaEnvioMuestra,estadoPago,estadoEnvio,idMuestraPat,
                     idPaciente,idUsuario], (err, result, fields) => {

            if (err) {
                respuesta.status(400).json(err)
                return;
            } else {
                iteracion--;
                if(iteracion<1){
                respuesta.json({ mensaje: 'Registro Exitoso' });
                return;
                }else{
                    modificarPatologia(body,iteracion,peticion,respuesta);
                }
              
            }
        });
    });

}



api.modificarUnSoloExamPatologia = (req, res) => {

    var idUsuario=req.usuario.idUsuario;  
    var idExamen=req.body.idExamen; 
    var fechaAtencion=req.body.atendido;
    var fechaEntregaResultado=req.body.fechaResultado==''? null: req.body.fechaResultado; 
    var fechaEnvioMuestra=req.body.fechaEnvio==''? null: req.body.fechaEnvio; 
    var cantidad=req.body.cantidad; 
    var estadoEnvio=req.body.enviado; 
    var estadoPago=req.body.pagado;
     
    req.getConnection((err, conn) => {
                conn.query('CALL MOD_UN_EXAMEN_DE_PATOLOGIA_PAMS(?,?,?,?,?,?,?,?) ',
                            [idExamen, fechaAtencion,fechaEntregaResultado,
                            cantidad,fechaEnvioMuestra,estadoPago,estadoEnvio,idUsuario], (err, result, fields) => {

                    if (err) {
                        res.status(400).json(err)
                        return;
                    } else {
                      
                        res.json({ mensaje: 'Registro Exitoso' });
                        return;
                    
                    }
                });
            });

};



api.saveExamPatologia = (req, res) => {

        var iteracion= req.body.examenes.length;
        SavePatologia(req.body,iteracion,req,res)
    }
    function SavePatologia(body,iteracion,peticion,respuesta){
        var dni=body.dni;
        var nombres=body.nombres;
        var apellidos=body.apellidos
        var fechaNacimiento=body.fechaNacimiento;
        var telefono=body.telefono;
        var empresa=body.empresa;
        var fechaRegistroExamen=body.fechaRegistroExamen; 
        var fechaAtencion=body.examenes[iteracion-1].atendido? fechaRegistroExamen: null; 
        var fechaEntregaResultado=body.examenes[iteracion-1].fechaResultado ===''? null: body.examenes[iteracion-1].fechaResultado; 
        var cantidad=body.examenes[iteracion-1].cantidad; 
        var fechaEnvioMuestra=body.examenes[iteracion-1].fechaEnvioMuestra ===''? null: body.examenes[iteracion-1].fechaEnvioMuestra; 
        var estadoEnvio=body.examenes[iteracion-1].enviado;
        var estadoPago=body.examenes[iteracion-1].pagado;
        var idMuestraPat=body.examenes[iteracion-1].id;
        var idUsuario=peticion.usuario.idUsuario;  
    
        peticion.getConnection((err, conn) => {
            conn.query('CALL INSERTAR_EXAMEN_DE_PATOLOGIA(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
                         [nombres, apellidos,fechaNacimiento,telefono,dni,empresa,fechaRegistroExamen
                            ,fechaAtencion,fechaEntregaResultado,cantidad,fechaEnvioMuestra,estadoEnvio,estadoPago,idMuestraPat,idUsuario], (err, result, fields) => {
    
                if (err) {
                    // console.log(err)
                    respuesta.status(400).json(err)
                    return;
                } else {
                    iteracion--;
                    if(iteracion<1){
                    respuesta.json({ mensaje: 'Registro Exitoso' });
                    return;
                    }else{
                        SavePatologia(body,iteracion,peticion,respuesta);
                    }
                  
                }
            });
        });
    
    }



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
            console.log('Conexion');
            return;
        }
        conn.query('CALL INSERTAR_USUARIO(?,?,?)', [user, email, pass], (err, result) => {
            if (err) {
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            } else {
                if (result[0][0].total) {
                    var total = result[0][0].total;
                    //var io=req.app.get('socket.io');
                    //io.sockets.emit('notificacion:regUsuario',result);
                    total > 0 ? res.json({ mensaje: 'Registro Exitoso' }) : res.status(500).json({ mensaje: 'No se registro' });
                }
                return;
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
            return;
        }

        conn.query('call LOGIN(?)', [email], (err, result) => {
            if (err) {
                
                res.status(500).json({
                    mensaje: 'Ocurrio un error',
                    err
                });
                return;
            }
            else if (!result[0].length) {
                res.status(400).json({
                    mensaje: 'Usuario no valido'
                });
                return;
            } else {

                var dato = result[0][0];
                var password = dato.pass;

                if (!bcrypt.compareSync(pass, password)) {
                    
                    res.status(500).json({
                        mensaje: 'Error en sus credenciales',
                        err
                    });
                    return;

                } else {
                    var usuario = {
                        nombre: dato.descripcion,
                        email: dato.email,
                        rol: dato.rol,
                        idUsuario:dato.idUsuario
                    }
                    //generando un token
                    let token = jwt.sign({ data: usuario }, 'SECRETO_PAMS_2021_TRAZABILIDAD_SECRETO', { expiresIn: 60 * 60 * 24 * 30 })
                    //responder con las validaciones echas anteriormente

                    res.json({
                        usuario,
                        token: token
                    });
                    return;
                }
            }
        });
    })
};

//PDF CHINCHA
api.saveResultadoPDF = (req, res) => {    
    // console.log("descripcion: ",req.file);
    // console.log("buffer:", req.file.buffer);
    // console.log("buffer-Length:", (req.file.buffer).length);
    var idExamen=req.body.idExamen;
    var fechaInforme=req.body.fechaInforme; 
    var horaInforme=req.body.horaInforme; 
    var descripcion = req.body.descripcion;
    var nivelUrgencia=req.body.nivelUrgencia;
    var pdf=req.file.buffer;
    var namepdf=req.file.originalname;
    var idUsuario=req.usuario.idUsuario;  
    req.getConnection((err, conn) => {
        conn.query('CALL INSERTAR_RESULTADO_EXAMEN_PATOLOGIA(?,?,?,?,?,?,?,?)',
        [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,namepdf,idExamen,idUsuario], (err, result) => {
            if (err) { res.status(400).json(err)
                return;
            };
            res.json(result);
            return;
        });
    });
};

api.listarExamPendientesLabLima = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_DE_RESULTADO_PATOLOGIA_PAMS', (err, result) => {
            if (err) {
             res.status(400).json(err)
             return;
            };
            res.json(result);
            return;
        });
    });
};

api.listarExamPendientesLabChincha = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_DE_RESULTADO_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err)   
                return;};
            res.json(result);
            return;
        });
    });
};

api.listaCompletaDePendientesAdmision = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query(`SELECT * from LISTA_COMPLETA_DE_RESULTADOS_PENDIENTES_PARA_ADMISION`, 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarAdmisionExamLaboratorio = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query("select * from LISTA_PENDIENTE_PARA_ADMISION_DE_RESULTADO_LABORATORIO  l Left Join resultadoExamen res "+
        "on res.idExamen=l.idExamen where res.visibilidad = true or res.visibilidad is null ;", 
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarAdmisionExamPatologia = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query("select * from LISTA_PENDIENTE_PARA_ADMISION_DE_RESULTADO_PATOLOGIA  l "+
        "Left Join resultadoExamen res on res.idExamen=l.idExamen where res.visibilidad = true or res.visibilidad is null ",
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
            return;
        });
    });
};

api.listarResultados = (req, res) => { 
        req.getConnection((err, conn) => {
            conn.query("SELECT * FROM LISTAR_RESULTADO_EXAMENES_VISIBLES",
            (err, result) => {
                if (err) { res.status(400).json(err) 
                    return;};
                res.json(result);
                return;
            });
        });
};

api.cambiarVisibilidadResultado = (req, res) => { 
    var idExamen=req.body.idExamen;
    req.getConnection((err, conn) => {
        conn.query("update resultadoExamen set visibilidad=false where idExamen=?",[idExamen],
         (err, result) => {
            if (err) { res.status(400).json(err)
                return; };
            res.json(result);
          return;
         });
    });
};

api.getFile = (req, res) => {
    
    var idResultado=req.body.id;

    req.getConnection((err, conn) => {
        conn.query('select pdf , namepdf from resultadoExamen where idResultado = ?',[idResultado], (err, result) => {
            if (err){
                res.status(500).json({ mensaje: 'Error en consulta'})
                return;
            }
            else{
                res.json(result[0]);
                return;
            }
            
        })
    })

}

module.exports = api;
//esto me servira para registrar lso examenes
