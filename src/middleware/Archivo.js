const multer = require ('multer');

const verificarArchivo= (req,res,next)=>{
    
    multer().array("files")
    console.log("body: ", req.body);
    console.log("files:", req.files);
    next();

}
module.exports = {verificarArchivo};