const apiPatologia ={};



apiPatologia.listarTipoMuestraPat= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from tipoMuestraPat', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};
apiPatologia.listarMuestraPat = (req, res) => {
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

apiPatologia.listarExamHoyPatologia = (req, res) => {
    var fechaHoy=req.body.fechaHoy;
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_HOY_EXAMEN_DE_PATOLOGIA',[fechaHoy], (err, result,fields) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

apiPatologia.listarExamPendientesPatologia = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTES_EXAMEN_DE_PATOLOGIA', (err, result) => {
            if (err) { res.json(err) };
            res.json(result);
            return;
        });
    });
};

apiPatologia.modificarExamPatologia = (req, res) => {
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
        var doExamen=stringDoExamen=='Modificar'? 1:(stringDoExamen=='Nuevo'? 0 : -1 ); 
        var estadoPago=body.examenes[iteracion-1].pagado;
        var idExamen=body.examenes[iteracion-1].idExamen; 
        var fechaRegistroExamen=body.fechaRegistroExamen; 
        var fechaAtencion=body.examenes[iteracion-1].atendido? fechaRegistroExamen: null; 
        var fechaEntregaResultado=estadoPago? (body.examenes[iteracion-1].fechaResultado ===''? null: body.examenes[iteracion-1].fechaResultado):null; 
        var cantidad=body.examenes[iteracion-1].cantidad; 
        var fechaEnvioMuestra=estadoPago? (body.examenes[iteracion-1].fechaEnvio ===''? null: body.examenes[iteracion-1].fechaEnvio):null; 
        var estadoEnvio=estadoPago? body.examenes[iteracion-1].enviado:false;        
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

apiPatologia.modificarUnSoloExamPatologia = (req, res) => {

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

apiPatologia.saveExamPatologia = (req, res) => {

        var iteracion= req.body.examenes.length;
        SavePatologia(req.body,iteracion,req,res)
    }
    SavePatologia=(body,iteracion,peticion,respuesta)=>{
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




module.exports =apiPatologia;