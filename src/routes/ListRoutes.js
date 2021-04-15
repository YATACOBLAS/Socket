const express =require('express');
const router= express.Router();
const api= require('../api/Api.js');
const multer = require ('multer');

const {verificarAuth,verificarRol}= require('../middleware/autenticacion')
//const  {verificarArchivo} = require("../middleware/Archivo");
router.get('/listarUsuario', api.listarUsuario);
router.get('/listarRol', api.listarRol);
router.get('/listarEmpresa', api.listarEmpresa);
router.get('/obtenerRol/:idusuario', api.listarRoles);
router.post('/saveRoles',[verificarAuth,verificarRol], api.saveRoles);
router.post('/saveUsers',api.saveUsers);
router.post('/Login', api.login);
//rutas de prueba
router.post('/File',(multer().single("file")),api.File);
router.get('/getFile',api.getFile);
module.exports=router;