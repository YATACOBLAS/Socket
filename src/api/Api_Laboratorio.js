const apiLaboratorio={};



apiLaboratorio.listarTipoMuestraLab= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from tipoMuestraLab', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

apiLaboratorio.listarMuestraLab = (req, res) => {
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

apiLaboratorio.listarExamHoyLaboratorio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_HOY_EXAMEN_DE_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};

apiLaboratorio.listarExamPendientesLaboratorio = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_EXAMEN_DE_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err) };
            res.json(result);
            return;
        });
    });
};


apiLaboratorio.modificarExamLaboratorio = (req, res) => {
    var iteracion= req.body.examenes.length;
 
 modificarLaboratorio(req.body,iteracion,req,res)
}

modificarLaboratorio=(body,iteracion,peticion,respuesta)=>{
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

apiLaboratorio.modificarUnSoloExamLaboratorio = (req, res) => {
 
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


apiLaboratorio.saveExamLaboratorio = (req, res) => {
        var iteracion= req.body.examenes.length;
        SaveLaboratorio(req.body,iteracion,req,res)
    }

  SaveLaboratorio=(body,iteracion,peticion,respuesta)=>{
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



module.exports=apiLaboratorio;