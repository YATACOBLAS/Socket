const multer = require ('multer');

const verificarArchivo= (req,res,next)=>{
    
    multer().array("images")
    console.log("body: ", req.body);
    console.log("files:", req.files);
    next();

}
module.exports = {verificarArchivo};