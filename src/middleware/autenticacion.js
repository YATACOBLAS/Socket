const jwt = require('jsonwebtoken');


const verificarAuth= (req,res,next)=>{

let token=req.get('token');

jwt.verify(token,'SECRETO_PAMS_2021_TRAZABILIDAD_SECRETO',(err,decode)=>{

        if(err){
            res.status(401).json({
                mensaje: 'Error de Token',
                err
            });
        }
         req.usuario =decode.data

    next();

})
    
}

const verificarRol=(req,res,next)=>{

    const rol =req.usuario.rol

    if(rol=='admin'){
        next();
    }else{    
            res.status(401).json({
                mensaje: 'Usuario no valido'
            });
     
    }
    
}


module.exports ={verificarAuth,verificarRol};