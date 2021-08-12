const apiLabTercerizado = {};

apiLabTercerizado.listarExamPendientesLabChincha = (req, res) => { 

    req.getConnection((err, conn) => {
        conn.query('select * from LISTA_PENDIENTE_DE_RESULTADO_LABORATORIO_PAMS', (err, result) => {
            if (err) { res.status(400).json(err)   
                return;};
            res.json(result);
            return;
        });
    });

};

apiLabTercerizado.listarExamPendientesLabLima = (req, res) => { 
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



//PDF CHINCHA
apiLabTercerizado.guardarResultadoPDF = (req, res) => {    
     console.log("descripcion: ",req.file);
    // console.log("buffer:", req.file.buffer);
    // console.log("buffer-Length:", (req.file.buffer).length);
    var idExamen=req.body.idExamen;
    var fechaInforme=req.body.fechaInforme; 
    var horaInforme=req.body.horaInforme; 
    var descripcion = req.body.descripcion;
    var nivelUrgencia=req.body.nivelUrgencia;
    var pdf=req.file.buffer;
    var nombrePdf=req.file.originalname;
    var idUsuario=req.usuario.idUsuario;  
    // req.getConnection((err, conn) => {
    //     conn.query('CALL INSERTAR_RESULTADO_EXAMEN_LABORATORIO_Y_PATOLOGIA(?,?,?,?,?,?,?,?)',
    //     [fechaInforme,horaInforme,descripcion,nivelUrgencia,pdf,nombrePdf,idExamen,idUsuario], (err, result) => {
    //         if(err){ 
    //             res.status(400).json(err)
    //             return;
    //         };
    //         res.json(result);
    //         return;
    //     });
    // });
    };



module.exports =apiLabTercerizado;