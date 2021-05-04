(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Patologia"],{"15a7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:!0}},[a("div",{staticClass:"text-center"},[a("h2",[e._v("Examenes de Patología con Info Pendiente")]),a("h3",[e._v("Fecha:15/04/2021")])]),a("v-form",[a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"6",md:"4 mb-2"}},[1==e.ambienteDeModificacion?a("v-card",{staticClass:"pt-3 mx-1 px-1 red lighten-3",attrs:{outlined:""}},[a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:e.examenesPat.muestra,value:e.examenesPat.id,color:"red darken-4"},model:{value:e.examenesRealizadosPat,callback:function(t){e.examenesRealizadosPat=t},expression:"examenesRealizadosPat"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"5"}},[a("v-text-field",{staticClass:"ma-0 pa-0",attrs:{type:"number",color:"red darken-4",label:"Cantidad",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.examenesPat.cantidad,callback:function(t){e.$set(e.examenesPat,"cantidad",t)},expression:"examenesPat.cantidad"}})],1)],1),e.verificarExamenRealizado(e.examenesPat.id)?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Enviado?",color:"red darken-4",value:!e.enviado,"hide-details":""},model:{value:e.examenesPat.enviado,callback:function(t){e.$set(e.examenesPat,"enviado",t)},expression:"examenesPat.enviado"}}),a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Pagado?",color:"red darken-4",value:!e.pagado,"hide-details":""},model:{value:e.examenesPat.pagado,callback:function(t){e.$set(e.examenesPat,"pagado",t)},expression:"examenesPat.pagado"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"date",color:"red darken-4",label:"Entrega del Resultado",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.examenesPat.fechaResultado,callback:function(t){e.$set(e.examenesPat,"fechaResultado",t)},expression:"examenesPat.fechaResultado"}})],1)],1):e._e()],1):e._e()],1)],1),1==e.ambienteDeModificacion?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"11",md:"4"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",color:"red darken-4"},on:{click:function(t){return e.Modificar(e.examenesPat)}}},[e._v("Modificar")])],1),a("v-col",{attrs:{cols:"11",md:"4"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:""},on:{click:function(t){e.ambienteDeModificacion=!1}}},[e._v("Cancelar")])],1)],1):e._e(),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[""!==e.mensajeError?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.mensajeError))]):e._e(),e.modificacionHecha?a("v-alert",{staticClass:"text-center",attrs:{dense:"",type:"success"}},[e._v(" Registro Exitoso")]):e._e()],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto"},[a("tabla-pendiente",{ref:"tabla",on:{DatosParaModificarExamenesPendiente:e.LlenaDatosParaModificacion}})],1)],1)],1)},n=[],i=a("5530"),o=(a("caad"),a("2532"),a("2f62")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-simple-table",{staticClass:"my-2",attrs:{dark:"",dense:"","fixed-header":"",height:"450px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text",staticStyle:{"border-top-left-radius":"5px","border-bottom-left-radius":"5px"}},[e._v(" * ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Dni ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Paciente ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Examen ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Telefono ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Pagado ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Registrado ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Enviado ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" FechaAtencion ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" FechaResultado ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"})])]),a("tbody",e._l(e.PatologiaData,(function(t,s){return a("tr",{key:s},[a("td",{staticClass:"text-center"},[e._v(e._s(s+1))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.dni))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.nombres)+" "+e._s(t.apellidos))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.examen))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.telefono))]),a("td",{staticClass:"text-center",class:{red:0==t.estadoPago}},[e._v(e._s(0==t.estadoPago?"NO":"SI"))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaRegistroExamen}},[e._v(e._s(e.convertidorFecha(t.fechaRegistroExamen)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaEnvioMuestra}},[e._v(e._s(e.convertidorFecha(t.fechaEnvioMuestra)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaAtencion}},[e._v(e._s(e.convertidorFecha(t.fechaAtencion)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaEntregaResultado}},[e._v(e._s(e.convertidorFecha(t.fechaEntregaResultado)))]),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return e.editarDataPat(t)}}},[a("v-icon",[e._v("edit")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return e.ShowDialogDeletePat(t.examenes,t.nombres+" "+t.apellidos,t.id)}}},[a("v-icon",[e._v("delete")])],1)],1)])})),0)]},proxy:!0}])}),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogDeleteExamPat,callback:function(t){e.dialogDeleteExamPat=t},expression:"dialogDeleteExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.dataDialogDeletePat.message)+" "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.examen)+" ")])]),a("div",{staticClass:"font-weight-bold"},[e._v(" de "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.nombre)+" ")])])]),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-space-between":!0}},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red darken-4"},on:{click:function(t){return e.Eliminar(e.dataDialogDeletePat.id)}}},[e._v("Si")]),a("v-btn",{attrs:{rounded:"",dark:""},on:{click:e.NotShowDialogDeletePat}},[e._v("No")])],1)],1)],1)],1)],1)},r=[],d={name:"TablaPatologiaPendiente",data:function(){return{dialogDetalleExamPat:!1,dialogDeleteExamPat:!1,dataDialogDeletePat:{message:"Eliminar",id:null,examen:null,nombre:null},dataDialogDetallePat:{nombre:"",data:[]},PatologiaData:[],dataDetalleExam:[]}},mounted:function(){this.ListarMuestras()},methods:{convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var n=t.getDate();return n=n<10?"0"+n:n,n+"/"+s+"/"+a},ShowDialogDeletePat:function(e,t,a){this.dataDialogDeletePat.examen=e,this.dataDialogDeletePat.nombre=t,this.dataDialogDeletePat.id=a,this.dialogDeleteExamPat=!0},NotShowDialogDeletePat:function(){this.dialogDeleteExamPat=!1,this.dataDialogDeletePat.data=null,this.dataDialogDeletePat.id=null},Eliminar:function(e){console.log("Eliminando.."+e),this.dialogLaboratorio=!1},editarDataPat:function(e){this.$emit("DatosParaModificarExamenesPendiente",e)},ListarMuestras:function(){var e=this;this.PatologiaData=[],this.dataDetalleExam=[],this.axios.get("/listarExamPendientesPatologia").then((function(t){console.log(t.data),e.PatologiaData=t.data})).catch((function(e){console.log(e)}))}}},c=d,u=a("2877"),m=a("6544"),h=a.n(m),f=a("8336"),x=a("b0af"),v=a("169a"),g=a("132d"),p=a("a722"),b=a("5d23"),P=a("1f4f"),D=Object(u["a"])(c,l,r,!1,null,null,null),k=D.exports;h()(D,{VBtn:f["a"],VCard:x["a"],VDialog:v["a"],VIcon:g["a"],VLayout:p["a"],VListItemContent:b["a"],VSimpleTable:P["a"]});var _={name:"PatologiaPendiente",components:{TablaPendiente:k},data:function(){return{mensajeError:"",modificacionHecha:!1,ambienteDeModificacion:!1,examen:"",examenesRealizadosPat:[],enviado:!0,pagado:!0,dataTipoMuestraPat:[],dataMuestraPat:[],examenesPat:[]}},computed:Object(i["a"])({},Object(o["d"])(["token"])),methods:{FechaActual:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var s=e.getDate();return s=s<10?"0"+s:s,t+"-"+a+"-"+s},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var n=t.getDate();return n=n<10?"0"+n:n,a+"-"+s+"-"+n},eliminarExamen:function(e){},LlenaDatosParaModificacion:function(e){this.ambienteDeModificacion=!0,this.examenesRealizadosPat=[],null!=e.fechaAtencion&&(this.examenesRealizadosPat[0]=e.idMuestraPat),this.examenesPat={idExamen:e.idExamen,id:e.idMuestraPat,muestra:e.examen,atendido:null!=e.fechaAtencion,cantidad:e.cantidad,pagado:0!=e.estadoPago,enviado:null!=e.fechaEnvioMuestra,fechaResultado:null==e.fechaEntregaResultado?"":this.convertidorFecha(e.fechaEntregaResultado)}},verificarExamenRealizado:function(e){var t=this.examenesRealizadosPat.includes(e);return t?this.examenesPat.atendido=!0:(this.examenesPat.atendido=!1,this.examenesPat.fechaResultado="",this.examenesPat.pagado=!1,this.examenesPat.enviado=!1),t},Modificar:function(e){var t=this,a={"Content-Type":"application/json",token:this.token};this.axios.post("/modificarUnSoloExamPatologia",{idExamen:e.idExamen,muestra:e.examen,atendido:e.atendido?this.FechaActual():null,cantidad:e.cantidad,pagado:0!=e.pagado,enviado:e.enviado?this.FechaActual():null,fechaResultado:e.fechaResultado},{headers:a}).then((function(e){t.modificacionHecha=!0,t.$refs.tabla.ListarMuestras(),t.ambienteDeModificacion=!1,t.examenesPat={},t.examenesRealizadosPat=[],setTimeout((function(){t.modificacionHecha=!1}),2e3)})).catch((function(e){t.mensajeError=e,setTimeout((function(){t.mensajeError=""}),2e3),console.log(e)}))}}},E=_,C=(a("9321"),a("0798")),M=a("ac7c"),w=a("62ad"),R=a("a523"),y=a("4bd4"),T=a("0fd9"),V=a("b73d"),F=a("8654"),j=Object(u["a"])(E,s,n,!1,null,"b887bbfe",null);t["default"]=j.exports;h()(j,{VAlert:C["a"],VBtn:f["a"],VCard:x["a"],VCheckbox:M["a"],VCol:w["a"],VContainer:R["a"],VForm:y["a"],VRow:T["a"],VSwitch:V["a"],VTextField:F["a"]})},9321:function(e,t,a){"use strict";a("a577")},"96a4":function(e,t,a){},a577:function(e,t,a){},bd49:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:!0}},[a("div",{staticClass:"text-center"},[a("h2",[e._v("Fecha de Registro Patología")]),a("h3",[e._v("Fecha:15/04/2021")])]),a("v-form",{ref:"formularioPatologia",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.Guardar(t)}}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{autofocus:!0,rules:e.dniRules,type:"number",color:"red darken-4",label:"DNI",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.dni,callback:function(t){e.dni=t},expression:"dni"}}),a("v-text-field",{attrs:{rules:e.requeridoRules,color:"red darken-4",label:"Nombres",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.nombres,callback:function(t){e.nombres=t},expression:"nombres"}}),a("v-text-field",{attrs:{rules:e.requeridoRules,color:"red darken-4",label:"Apellidos",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{rules:e.requeridoRules,type:"date",color:"red darken-4",label:"Fecha Nacimiento",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.fechaNacimiento,callback:function(t){e.fechaNacimiento=t},expression:"fechaNacimiento"}}),a("v-text-field",{attrs:{rules:e.telefonoRules,type:"number",color:"red darken-4",label:"Teléfono",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.telefono,callback:function(t){e.telefono=t},expression:"telefono"}}),a("v-select",{staticClass:"red--text text-lighten-4",attrs:{items:e.itemsEmpresa,"item-text":"descripcion","item-value":"descripcion","item-color":"red darken-4",label:"Empresa",color:"red darken-4","background-color":"red lighten-4",dense:"",outlined:""},model:{value:e.empresa,callback:function(t){e.empresa=t},expression:"empresa"}}),"OTROS"===e.empresa?a("v-text-field",{attrs:{rules:e.empresaRules,autofocus:!0,type:"text",color:"red darken-4",label:"Nueva Empresa",dense:"","background-color":"red lighten-4"},model:{value:e.nuevaEmpresa,callback:function(t){e.nuevaEmpresa=t},expression:"nuevaEmpresa"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{staticClass:"red--text text-lighten-4",attrs:{items:e.dataTipoMuestraPat,"item-color":"red darken-4",label:"Tipo de Muestra",color:"red darken-4","background-color":"red lighten-4","item-text":"descripcion","item-value":"idTipoMuestraPat",dense:"",outlined:""},model:{value:e.dataTipoMuestraPatSelected,callback:function(t){e.dataTipoMuestraPatSelected=t},expression:"dataTipoMuestraPatSelected"}}),e.dataMuestraPat.length>0&&0==e.dialogInsertarMuestra?a("div",{staticClass:"d-flex flex-row "},[a("v-autocomplete",{attrs:{dense:"",items:e.dataMuestraPat,outlined:"",chips:"","deletable-chips":"",color:"red darken-4",label:"descripcion","item-text":"descripcion","item-value":"idMuestraPat","background-color":"red lighten-4"},model:{value:e.examen,callback:function(t){e.examen=t},expression:"examen"}}),a("v-btn",{staticClass:"red darken-4 flex-row mx-2",attrs:{disabled:""===e.examen,icon:"",color:"white"},on:{click:function(t){return e.agregarExamen(e.examen)}}},[a("v-icon",[e._v("add")])],1)],1):e._e(),a("div",[a("v-btn",{attrs:{dark:"",color:"red darken-4"},on:{click:function(t){e.dialogInsertarMuestra=!0}}},[e._v("Nuevo")])],1)],1)],1),a("h5",[e._v("Examenes Realizados")]),a("p",{staticClass:"font-weight-bold red--text"},[e._v(e._s(e.mensajeExamen)+" ")]),a("v-row",{staticClass:"ma-0 pa-0"},e._l(e.examenesPat,(function(t,s){return a("v-col",{key:s,staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"6",md:"4 mb-2"}},[a("v-card",{staticClass:"pt-3 mx-1 px-1 red lighten-3",attrs:{outlined:""}},[a("v-btn",{staticClass:"float-right red",attrs:{"x-small":!0,color:"white",icon:""},on:{click:function(a){return e.eliminarExamen(t.id)}}},[a("v-icon",[e._v("close")])],1),a("v-row",{staticClass:"ma-0 pa-0"},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-switch",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:t.muestra,value:t.id,color:"red darken-4"},model:{value:e.examenesRealizadosPat,callback:function(t){e.examenesRealizadosPat=t},expression:"examenesRealizadosPat"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"5"}},[a("v-text-field",{staticClass:"ma-0 pa-0",attrs:{type:"number",color:"red darken-4",label:"Cantidad",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.examenesPat[s].cantidad,callback:function(t){e.$set(e.examenesPat[s],"cantidad",t)},expression:"examenesPat[index].cantidad"}})],1)],1),e.verificarExamenRealizado(t.id,s)?a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Enviado?",color:"red darken-4",value:!e.enviado,"hide-details":""},model:{value:e.examenesPat[s].enviado,callback:function(t){e.$set(e.examenesPat[s],"enviado",t)},expression:"examenesPat[index].enviado"}}),a("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{dense:"",label:"¿Pagado?",color:"red darken-4",value:!e.pagado,"hide-details":""},model:{value:e.examenesPat[s].pagado,callback:function(t){e.$set(e.examenesPat[s],"pagado",t)},expression:"examenesPat[index].pagado"}})],1),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"date",color:"red darken-4",label:"Entrega del Resultado",dense:"",outlined:"","background-color":"red lighten-4"},model:{value:e.examenesPat[s].fechaResultado,callback:function(t){e.$set(e.examenesPat[s],"fechaResultado",t)},expression:"examenesPat[index].fechaResultado"}})],1)],1):e._e()],1)],1)})),1),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[0==e.ambienteDeModificacion?a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",color:"red darken-4",type:"submit"}},[e._v("Guardar")])],1):e._e(),1==e.ambienteDeModificacion?a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",color:"red darken-4"},on:{click:function(t){return e.Modificar()}}},[e._v("Modificar")])],1):e._e()],1),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[""!==e.mensajeError?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.mensajeError))]):e._e()],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[a("Tabla",{ref:"tabla",on:{fillDataModificarPat:e.fillDataToMod}})],1)],1),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogInsertarMuestra,callback:function(t){e.dialogInsertarMuestra=t},expression:"dialogInsertarMuestra"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" NuevaMuestra ")])]),a("div",{staticClass:"px-2"},[a("v-text-field",{attrs:{autofocus:!0,type:"text",color:"red darken-4",label:"Nueva Muestra",dense:"","background-color":"red lighten-4"},model:{value:e.nuevaMuestra,callback:function(t){e.nuevaMuestra=t},expression:"nuevaMuestra"}})],1),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-center":!0}},[a("v-btn",{staticClass:"red darken-4 ",attrs:{disabled:""===e.nuevaMuestra,dark:""},on:{click:function(t){return e.addNuevaMuestra(e.nuevaMuestra)}}},[e._v("Guardar")])],1)],1),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-center":!0}},[a("v-btn",{attrs:{dark:""},on:{click:function(){e.dialogInsertarMuestra=!1,e.nuevaMuestra=""}}},[e._v("Cerrar")])],1)],1)],1)],1)],1)},n=[],i=a("2909"),o=a("5530"),l=(a("498a"),a("caad"),a("2532"),a("4de4"),a("99af"),a("2f62")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-simple-table",{staticClass:"my-2",attrs:{dark:"",dense:"","fixed-header":"","max-height":"10vh"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text",staticStyle:{"border-top-left-radius":"5px","border-bottom-left-radius":"5px"}},[e._v(" * ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Empresa ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Dni ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Paciente ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Examen(Cant.) ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" FechNac ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[e._v(" Telefono ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"})])]),a("tbody",e._l(e.PatologiaData,(function(t,s){return a("tr",{key:s},[a("td",{staticClass:"text-center"},[e._v(e._s(s+1))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.empresa))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.dni))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.nombres)+" "+e._s(t.apellidos))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.examenes))]),a("td",{staticClass:"text-center"},[e._v(e._s(e.convertidorFecha(t.fechNac)))]),a("td",{staticClass:"text-center"},[e._v(e._s(t.telefono))]),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return e.toDataDialog(t.detalleExamen,t.nombres+" "+t.apellidos)}}},[a("v-icon",[e._v("view_list")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return e.editarDataPat(t)}}},[a("v-icon",[e._v("edit")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return e.ShowDialogDeletePat(t.examenes,t.nombres+" "+t.apellidos,t.id)}}},[a("v-icon",[e._v("delete")])],1)],1)])})),0)]},proxy:!0}])}),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialogDeleteExamPat,callback:function(t){e.dialogDeleteExamPat=t},expression:"dialogDeleteExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.dataDialogDeletePat.message)+" "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.examen)+" ")])]),a("div",{staticClass:"font-weight-bold"},[e._v(" de "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[e._v(" "+e._s(e.dataDialogDeletePat.nombre)+" ")])])]),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-space-between":!0}},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red darken-4"},on:{click:function(t){return e.Eliminar(e.dataDialogDeletePat.id)}}},[e._v("Si")]),a("v-btn",{attrs:{rounded:"",dark:""},on:{click:e.NotShowDialogDeletePat}},[e._v("No")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"350",persistent:""},model:{value:e.dialogDetalleExamPat,callback:function(t){e.dialogDetalleExamPat=t},expression:"dialogDetalleExamPat"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.dataDialogDetallePat.nombre)+" ")])]),a("v-simple-table",{attrs:{dark:"",dense:"","fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[e._v(" Examen ")]),a("th",[e._v(" Cant. ")]),a("th",[e._v(" Registrado ")]),a("th",[e._v(" Atendido ")]),a("th",[e._v(" Pagado ")]),a("th",[e._v(" Enviado ")]),a("th",[e._v(" Resultado ")])])]),a("tbody",e._l(e.dataDialogDetallePat.data,(function(t,s){return a("tr",{key:s},[a("td",{staticClass:" text-center"},[e._v(e._s(t.examen))]),a("td",{staticClass:" text-center"},[e._v(e._s(t.cantidad))]),a("td",{staticClass:" text-center",class:{red:null==t.fechaRegistroExamen}},[e._v(e._s(e.convertidorFecha(t.fechaRegistroExamen)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaAtencion}},[e._v(e._s(e.convertidorFecha(t.fechaAtencion)))]),a("td",{staticClass:"text-center",class:{red:0==t.estadoPago}},[e._v(e._s(0==t.estadoPago?"No":"Si"))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaEnvioMuestra}},[e._v(e._s(e.convertidorFecha(t.fechaEnvioMuestra)))]),a("td",{staticClass:"text-center",class:{red:null==t.fechaEntregaResultado}},[e._v(e._s(e.convertidorFecha(t.fechaEntregaResultado)))])])})),0)]},proxy:!0}])}),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-center":!0}},[a("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(t){e.dialogDetalleExamPat=!1}}},[e._v("Cerrar")])],1)],1)],1)],1)],1)},d=[],c={name:"TablaPatologia",data:function(){return{dialogDetalleExamPat:!1,dialogDeleteExamPat:!1,dataDialogDeletePat:{message:"Eliminar",id:null,examen:null,nombre:null},dataDialogDetallePat:{nombre:"",data:[]},PatologiaData:[],dataDetalleExam:[]}},mounted:function(){this.ListarMuestras()},methods:{toDataDialog:function(e,t){this.dataDialogDetallePat.data=e,this.dataDialogDetallePat.nombre=t,this.dialogDetalleExamPat=!0},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var n=t.getDate();return n=n<10?"0"+n:n,n+"/"+s+"/"+a},ShowDialogDeletePat:function(e,t,a){this.dataDialogDeletePat.examen=e,this.dataDialogDeletePat.nombre=t,this.dataDialogDeletePat.id=a,this.dialogDeleteExamPat=!0},NotShowDialogDeletePat:function(){this.dialogDeleteExamPat=!1,this.dataDialogDeletePat.data=null,this.dataDialogDeletePat.id=null},Eliminar:function(e){console.log("Eliminando.."+e),this.dialogLaboratorio=!1},editarDataPat:function(e){this.$emit("fillDataModificarPat",e)},ListarMuestras:function(){var e=this;this.PatologiaData=[],this.dataDetalleExam=[],this.dataDialogDetallePat={nombre:"",data:[]},this.axios.get("/listarExamHoyPatologia").then((function(t){for(var a="",s="",n=[],i=t.data,o=0;o<t.data.length;o++){s=i[0].dni;var l=i.filter((function(e){if(e.dni!=s)return e}));i=i.filter((function(e){if(e.dni==s)return e}));for(var r=0;r<i.length;r++)n.push(i[r]),a=0!=r?a+", "+i[r].examen+"("+i[r].cantidad+")":i[r].examen+"("+i[r].cantidad+")";if(e.dataDetalleExam.push({id:i[0].idPaciente,idExamen:i[0].idExamen,empresa:i[0].empresa,dni:s,nombres:i[0].nombres,apellidos:i[0].apellidos,fechNac:i[0].fechaNacimiento,telefono:i[0].telefono,examenes:a,detalleExamen:n,idTipoMuestraPat:i[0].idTipoMuestraPat,idMuestraPat:i[0].idMuestraPat}),i=l,a="",s="",n=[],0==i.length)break}e.PatologiaData=e.dataDetalleExam})).catch((function(e){console.log(e)}))}}},u=c,m=a("2877"),h=a("6544"),f=a.n(h),x=a("8336"),v=a("b0af"),g=a("169a"),p=a("132d"),b=a("a722"),P=a("5d23"),D=a("1f4f"),k=Object(m["a"])(u,r,d,!1,null,null,null),_=k.exports;f()(k,{VBtn:x["a"],VCard:v["a"],VDialog:g["a"],VIcon:p["a"],VLayout:b["a"],VListItemContent:P["a"],VSimpleTable:D["a"]});var E={name:"Patologia",components:{Tabla:_},data:function(){return{mensajeError:"",dialogInsertarMuestra:!1,nuevaTipoMuestra:!1,nuevaMuestra:"",ambienteDeModificacion:!1,dniRules:[function(e){return!!e&&8==e.length||"8 Numeros"}],requeridoRules:[function(e){return!!e||"es requerido"}],empresaRules:[function(e){return!!e||"es requerido"}],telefonoRules:[function(e){return!!e&&e.length>8||"min 9 numeros"}],examen:"",dataTempToDeleteAboutModify:[],examenesRealizadosPat:[],enviado:!0,pagado:!0,dataTipoMuestraPat:[],dataTipoMuestraPatSelected:0,dataMuestraPat:[],itemsEmpresa:[],examenesPat:[],dni:"",nombres:"",apellidos:"",fechaNacimiento:"",telefono:"",empresa:"",nuevaEmpresa:""}},mounted:function(){this.getTipoMuestraPat(),this.listarEmpresa()},computed:Object(o["a"])({mensajeExamen:function(){return!this.examenesPat.length>0?"Se require seleccionar Examenes":""}},Object(l["d"])(["token"])),watch:{dataTipoMuestraPatSelected:function(e){e>0&&this.getMuestraPat(e)}},methods:{addNuevaMuestra:function(e){var t=this;this.axios.post("/saveMuestra",{descripcion:e}).then((function(e){t.nuevaMuestra="",t.getTipoMuestraPat(),t.dialogInsertarMuestra=!1})).catch((function(e){return console.log(e)}))},listarEmpresa:function(){var e=this;this.axios.get("/listarEmpresa").then((function(t){t.data.push({idEmpresa:0,descripcion:"OTROS"}),e.itemsEmpresa=t.data})).catch((function(e){return console.log(e)}))},getTipoMuestraPat:function(){var e=this;this.axios.get("/listarTipoMuestraPat").then((function(t){e.dataTipoMuestraPat=t.data})).catch((function(e){console.log(e)}))},getMuestraPat:function(e){var t=this;this.axios.get("/listarMuestraPat/".concat(e)).then((function(e){t.dataMuestraPat=e.data})).catch((function(e){console.log(e)}))},FechaActual:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var s=e.getDate();return s=s<10?"0"+s:s,t+"-"+a+"-"+s},convertidorFecha:function(e){if(null==e)return"Sin Data";var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var n=t.getDate();return n=n<10?"0"+n:n,a+"-"+s+"-"+n},Guardar:function(){var e=this,t={"Content-Type":"application/json",token:this.token},a=this.examenesPat.length>0,s=this.$refs.formularioPatologia.validate();a&&s&&this.axios.post("/saveExamPatologia",{dni:this.dni,nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),fechaNacimiento:this.fechaNacimiento,telefono:this.telefono,empresa:""===this.nuevaEmpresa?this.empresa:this.nuevaEmpresa,fechaRegistroExamen:this.FechaActual(),examenes:this.examenesPat},{headers:t}).then((function(t){e.dni="",e.nombres="",e.apellidos="",e.fechaNacimiento="",e.telefono="",e.empresa="",e.examenesPat=[],e.examenesRealizadosPat=[],e.$refs.tabla.ListarMuestras()})).catch((function(t){t.response.data.sqlMessage?e.mensajeError=t.response.data.sqlMessage:e.mensajeError=t,setTimeout((function(){e.mensajeError=""}),2e3)}))},verificarExamenRealizado:function(e,t){var a=this.examenesRealizadosPat.includes(e);return a?this.examenesPat[t].atendido=!0:(this.examenesPat[t].atendido=!1,this.examenesPat[t].pagado=!1,this.examenesPat[t].enviado=!1,this.examenesPat[t].fechaResultado=""),a},agregarExamen:function(e){var t=this;if(null!==e){var a={};this.ambienteDeModificacion?this.dataMuestraPat.filter((function(s){s.idMuestraPat===e&&(a={doExamen:"Nuevo",idPaciente:t.examenesPat[0].idPaciente,idExamen:0,id:s.idMuestraPat,muestra:s.descripcion,atendido:!1,cantidad:1,pagado:!1,enviado:!1,fechaResultado:""})})):this.dataMuestraPat.filter((function(t){t.idMuestraPat===e&&(a={id:t.idMuestraPat,muestra:t.descripcion,atendido:!1,cantidad:1,pagado:!1,enviado:!1,fechaResultado:""})}));var s=!1;this.examenesPat.filter((function(e){e.id===a.id&&(s=!0)})),s||this.examenesPat.push(a),this.examen=""}},eliminarExamen:function(e){var t=this;this.ambienteDeModificacion&&(this.examenesPat=this.examenesPat.filter((function(a){return a.id==e&&"Modificar"==a.doExamen&&(a.doExamen="Eliminar",t.dataTempToDeleteAboutModify.push(a)),a}))),this.examenesPat=this.examenesPat.filter((function(t){if(t.id!==e)return t})),this.examenesRealizadosPat=this.examenesRealizadosPat.filter((function(t){if(t!==e)return t}))},fillDataToMod:function(e){this.dataTempToDeleteAboutModify=[],this.ambienteDeModificacion=!0,this.examenesPat=[],this.examenesRealizadosPat=[],this.dni=e.dni,this.nombres=e.nombres,this.apellidos=e.apellidos,this.fechaNacimiento=this.convertidorFecha(e.fechNac),this.telefono=e.telefono,this.empresa=e.empresa;for(var t=0,a=0;a<e.detalleExamen.length;a++)null!=e.detalleExamen[a].fechaAtencion&&(this.examenesRealizadosPat[t]=e.detalleExamen[a].idMuestraPat,t++),this.examenesPat.push({doExamen:"Modificar",idPaciente:e.detalleExamen[a].idPaciente,idExamen:e.detalleExamen[a].idExamen,id:e.detalleExamen[a].idMuestraPat,muestra:e.detalleExamen[a].examen,atendido:null!=e.detalleExamen[a].fechaAtencion,cantidad:1,pagado:0!=e.detalleExamen[a].estadoPago,enviado:null!=e.detalleExamen[a].fechaEnvioMuestra,fechaResultado:null==e.detalleExamen[a].fechaEntregaResultado?"":this.convertidorFecha(e.detalleExamen[a].fechaEntregaResultado)});t=0},Modificar:function(){var e=this,t={"Content-Type":"application/json",token:this.token},a=this.examenesPat;this.dataTempToDeleteAboutModify.length>0&&(a=[].concat(Object(i["a"])(a),Object(i["a"])(this.dataTempToDeleteAboutModify))),0==a.length&&(a=this.dataTempToDeleteAboutModify);var s=a.length>0,n=this.$refs.formularioPatologia.validate();s&&n&&this.axios.post("/modificarExamPatologia",{dni:this.dni,nombres:this.nombres.trim(),apellidos:this.apellidos.trim(),fechaNacimiento:this.fechaNacimiento,telefono:this.telefono,empresa:""===this.nuevaEmpresa?this.empresa:this.nuevaEmpresa,fechaRegistroExamen:this.FechaActual(),examenes:a},{headers:t}).then((function(t){e.$refs.tabla.ListarMuestras(),e.dni="",e.nombres="",e.apellidos="",e.fechaNacimiento="",e.telefono="",e.empresa="",e.examenesPat=[],e.examenesRealizadosPat=[],e.dataTempToDeleteAboutModify=[]})).catch((function(e){console.log(e.response.data)}))}}},C=E,M=(a("f6e9"),a("0798")),w=a("c6a6"),R=a("ac7c"),y=a("62ad"),T=a("a523"),V=a("4bd4"),F=a("0fd9"),j=a("b974"),N=a("b73d"),S=a("8654"),A=Object(m["a"])(C,s,n,!1,null,"075689a6",null);t["default"]=A.exports;f()(A,{VAlert:M["a"],VAutocomplete:w["a"],VBtn:x["a"],VCard:v["a"],VCheckbox:R["a"],VCol:y["a"],VContainer:T["a"],VDialog:g["a"],VForm:V["a"],VIcon:p["a"],VLayout:b["a"],VListItemContent:P["a"],VRow:F["a"],VSelect:j["a"],VSwitch:N["a"],VTextField:S["a"]})},f6e9:function(e,t,a){"use strict";a("96a4")}}]);
//# sourceMappingURL=Patologia.ce00aa2a.js.map