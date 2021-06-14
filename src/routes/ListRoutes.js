const express =require('express');
const router= express.Router();
const api= require('../api/Api.js');
const multer = require('multer');

const {verificarAuth,verificarRolAdmin,verificarRolPatologia,verificarRolLaboratorioPams,
    verificarRolLaboratorioTercerizado,verificarRolAdmision}= require('../middleware/autenticacion')

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
router.post('/listarExamHoyPatologia',[verificarAuth,verificarRolPatologia], api.listarExamHoyPatologia);
                    
router.get('/listarExamPendientesPatologia', api.listarExamPendientesPatologia);
router.post('/saveExamPatologia',[verificarAuth,verificarRolPatologia], api.saveExamPatologia);
router.post('/modificarExamPatologia',[verificarAuth,verificarRolPatologia], api.modificarExamPatologia);
router.post('/modificarUnSoloExamPatologia',[verificarAuth,verificarRolPatologia], api.modificarUnSoloExamPatologia);

//LaboratorioClinicoPams
router.get('/listarTipoMuestraLab', api.listarTipoMuestraLab);
router.get('/listarMuestraLab/:idMuestra', api.listarMuestraLab);
router.get('/listarExamHoyLaboratorio', api.listarExamHoyLaboratorio);

router.get('/listarExamPendientesLaboratorio', api.listarExamPendientesLaboratorio);
router.post('/saveExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], api.saveExamLaboratorio);
router.post('/modificarExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], api.modificarExamLaboratorio);
router.post('/modificarUnSoloExamLaboratorio',[verificarAuth,verificarRolLaboratorioPams], api.modificarUnSoloExamLaboratorio);
//LaboratorioTercerizado
router.post('/saveResultadoPDF',[verificarAuth,verificarRolLaboratorioTercerizado],(multer().single("file")), api.saveResultadoPDF);
//LaboratorioTercerizadoChincha
router.get('/listarExamPendientesLabLima',[verificarAuth,verificarRolLaboratorioTercerizado], api.listarExamPendientesLabLima);
//LaboratorioTercerizadoLima
router.get('/listarExamPendientesLabChincha',[verificarAuth,verificarRolLaboratorioTercerizado], api.listarExamPendientesLabChincha);

//Imagenes

//Admision
router.get('/listaCompletaDePendientesAdmision',[verificarAuth,verificarRolAdmision], api.listaCompletaDePendientesAdmision);
router.get('/listarAdmisionExamLaboratorio',[verificarAuth,verificarRolAdmision], api.listarAdmisionExamLaboratorio);
router.get('/listarAdmisionExamPatologia',[verificarAuth,verificarRolAdmision], api.listarAdmisionExamPatologia);
router.get('/listarResultados',[verificarAuth,verificarRolAdmision], api.listarResultados);
router.post('/cambiarVisibilidadResultado',[verificarAuth,verificarRolAdmision], api.cambiarVisibilidadResultado);

//rutas de prueba
router.post('/getFile',api.getFile);
module.exports=router;