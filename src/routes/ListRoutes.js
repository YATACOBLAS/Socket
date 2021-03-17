const express =require('express');
const router= express.Router();
const api= require('../api/Api.js');

const {verificarAuth,verificarRol}= require('../middleware/autenticacion')

router.get('/listarUsuario', api.listarUsuario);
router.get('/listarRoles/:idusuario', api.listarRoles);
router.post('/saveRoles',[verificarAuth,verificarRol], api.saveRoles);
router.post('/saveUsers',api.saveUsers);
router.post('/Login', api.login);
module.exports=router;