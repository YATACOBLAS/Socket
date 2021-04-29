const express =require('express');
const router= express.Router();
const api= require('../api/Api.js');
const multer = require ('multer');

const {verificarAuth,verificarRolAdmin,verificarRolPatologia,verificarRolLaboratorioPams}= require('../middleware/autenticacion')

router.get('/listarEmpresa', api.listarEmpresa);
//por el momento nadie lo usa se3ra quitado si no tiene uso
router.get('/obtenerRol/:idusuario', api.listarRoles);

router.post('/saveUsers',api.saveUsers);
router.post('/Login', api.login);

//LsitarEmpresa
router.get('/listarEmpresa', api.listarEmpresa);
//Administrador
router.get('/listarUsuario', api.listarUsuario);
router.get('/listarRol', api.listarRol);
router.post('/saveRoles',[verificarAuth,verificarRolAdmin], api.saveRoles);

//MUESTRA
router.post('/saveMuestra', api.saveMuestra);

//Patologia
router.get('/listarTipoMuestraPat', api.listarTipoMuestraPat);
router.get('/listarMuestraPat/:idMuestra', api.listarMuestraPat);
router.get('/listarExamHoyPatologia', api.listarExamHoyPatologia);

router.get('/listarExamPendientesPatologia', api.listarExamPendientesPatologia);
router.post('/saveExamPatologia',[verificarAuth,verificarRolPatologia], api.saveExamPatologia);
router.post('/modificarExamPatologia',[verificarAuth,verificarRolPatologia], api.modificarExamPatologia);

//LaboratorioClinicoPams
router.get('/listarTipoMuestraLab', api.listarTipoMuestraLab);
router.get('/listarMuestraLab/:idMuestra', api.listarMuestraLab);
router.get('/listarExamHoyLaboratorio', api.listarExamHoyLaboratorio);
router.post('/saveExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], api.saveExamLaboratorio);
router.post('/modificarExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], api.modificarExamLaboratorio);
//LaboratorioTercerizadoChincha
//LaboratorioTercerizadoLima
//Imagenes

//rutas de prueba
router.post('/File',(multer().single("file")),api.File);
router.get('/getFile',api.getFile);
module.exports=router;