(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DiagnosticoChincha"],{1681:function(t,e,n){},"18be":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"text-center"},[n("h1",[t._v("Diagnostico Laboratorio Chincha")])]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4"}},[t._v(" "+t._s(t.cancelarInputResultado)+" "),n("v-form",{ref:"formResultadoChincha",attrs:{"lazy-validation":"",disabled:t.cancelarInputResultado},on:{submit:function(e){return e.preventDefault(),t.Enviar(e)}}},[n("h4",{staticClass:"mb-2 red--text text-lighten-4"},[t._v("Las filas rojas son resultados atrasados pendientes")]),""!==t.pacienteSeleccionado?n("h4",{staticClass:"my-2"},[t._v(t._s(t.pacienteSeleccionado))]):t._e(),[n("v-file-input",{attrs:{label:"Subir Archivo","background-color":"red lighten-4",outlined:"",dense:"",rules:t.archivoRequerido,"show-size":"",counter:"",color:"red darken-4"},model:{value:t.archivo,callback:function(e){t.archivo=e},expression:"archivo"}})],n("v-select",{staticClass:"red--text text-lighten-4",attrs:{items:t.arrayUrgencia,"item-color":"red darken-4",label:"Nivel de Urgencia",color:"red darken-4","background-color":"red lighten-4","item-text":"nombre","item-value":"valor",rules:t.nivelRequerido,dense:"",outlined:""},model:{value:t.nivelUrgencia,callback:function(e){t.nivelUrgencia=e},expression:"nivelUrgencia"}}),n("v-textarea",{attrs:{color:"red darken-4",label:"Descripcion",dense:"",outlined:"","background-color":"red lighten-4","no-resize":!0},model:{value:t.descripcion,callback:function(e){t.descripcion=e},expression:"descripcion"}}),n("div",{staticClass:"d-flex justify-space-between"},[n("v-btn",{attrs:{disabled:t.cancelarInputResultado,type:"submit",dark:"",color:"red darken-4"}},[t._v(" Enviar")]),n("v-btn",{attrs:{disabled:t.cancelarInputResultado,dark:""},on:{click:function(e){return t.cancelar()}}},[t._v(" Cancelar")])],1)],2),t.modificacionHecha?n("v-alert",{staticClass:"mt-4 text-center",attrs:{dense:"",type:"success"}},[t._v(" Registro Exitoso")]):t._e()],1),n("v-col",[n("v-simple-table",{attrs:{dark:"",dense:"","fixed-header":"",height:"450px"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text",staticStyle:{"border-top-left-radius":"5px","border-bottom-left-radius":"5px"}},[t._v(" * ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Dni ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Paciente ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" Examen ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" EnvioMuestra ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"},[t._v(" EntregaResultado ")]),n("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text"})])]),n("tbody",t._l(t.dataTable,(function(e,a){return n("tr",{key:a,class:{red:t.restarFecha(t.convertidorFecha(e.fechaEntregaResultado))<0}},[n("td",{staticClass:"text-center"},[t._v(t._s(a+1))]),n("td",{staticClass:"text-center"},[t._v(t._s(e.dni))]),n("td",{staticClass:"text-center"},[t._v(t._s(e.nombres)+" "+t._s(e.apellidos))]),n("td",{staticClass:"text-center"},[t._v(t._s(e.examen))]),n("td",{staticClass:"text-center"},[t._v(t._s(t.convertidorFecha(e.fechaEnvioMuestra)))]),n("td",{staticClass:"text-center"},[t._v(t._s(t.convertidorFecha(e.fechaEntregaResultado)))]),n("td",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(n){return t.selectExamen(e)}}},[n("v-icon",[t._v("edit")])],1)],1)])})),0)]},proxy:!0}])})],1)],1)],1)},i=[],r=n("5530"),s=(n("b0c0"),n("d81d"),n("2f62")),o={name:"DiagnosticoChincha",data:function(){return{cancelarInputResultado:!0,modificacionHecha:!1,pacienteSeleccionado:"",mensajeError:"",descripcion:"",archivo:null,nivelUrgencia:"",nivelRequerido:[function(t){return!!t||"Se requiere Nivel"}],archivoRequerido:[function(t){return!!t&&t.size>0||"Se requiere Archivo"}],arrayUrgencia:[{nombre:"Normal",valor:"N"},{nombre:"Media",valor:"M"},{nombre:"Alta",valor:"A"}],dataTable:[],idExamen:""}},mounted:function(){this.listarExamenes()},computed:Object(r["a"])({},Object(s["d"])(["token"])),methods:{Enviar:function(){var t=this,e=this.$refs.formResultadoChincha.validate();if(e){var n=new FormData,a=this.archivo;n.append("file",a,a.name),n.append("idExamen",this.idExamen),n.append("fechaInforme",this.FechaActual()),n.append("horaInforme",this.HoraActual()),n.append("descripcion",this.descripcion),n.append("nivelUrgencia",this.nivelUrgencia);var i={"Content-Type":"application/json",token:this.token};this.axios.post("/saveResultadoPDF",n,{headers:i}).then((function(e){t.descripcion="",t.archivo=null,t.nivelUrgencia="",t.modificacionHecha=!0,t.cancelarInputResultado=!0,setTimeout((function(){t.modificacionHecha=!1}),2e3),t.pacienteSeleccionado="",t.dataTable=[],t.listarExamenes()})).catch((function(e){t.mensajeError=e,setTimeout((function(){t.mensajeError=""}),2e3),console.log(e)}))}},FechaActual:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var a=t.getDate();return a=a<10?"0"+a:a,e+"-"+n+"-"+a},HoraActual:function(){var t=new Date,e=t.getHours(),n=t.getMinutes(),a=t.getSeconds();return e+":"+n+":"+a},convertidorFecha:function(t){if(null==t)return"Sin Data";var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var i=e.getDate();return i=i<10?"0"+i:i,n+"/"+a+"/"+i},restarFecha:function(t){var e=new Date(t),n=new Date,a=e.getTime()-n.getTime();return Math.round(a/864e5)},listarExamenes:function(){var t=this,e={"Content-Type":"application/json",token:this.token};this.axios.get("/listarExamPendientesLabChincha",{headers:e}).then((function(e){t.dataTable=e.data,t.dataTable.map((function(e){return e.retraso=t.restarFecha(t.convertidorFecha(e.fechaEntregaResultado)),e})),t.dataTable.sort((function(t,e){return t.retraso>e.retraso?1:t.retraso<e.retraso?-1:0}))})).catch((function(t){return console.log(t)}))},selectExamen:function(t){this.pacienteSeleccionado=t.nombres+" "+t.apellidos+"("+t.examen+")",this.idExamen=t.idExamen,this.cancelarInputResultado=!1},cancelar:function(){this.cancelarInputResultado=!0,this.pacienteSeleccionado="",this.idExamen="",this.descripcion="",this.archivo=[],this.nivelUrgencia=""}}},c=o,l=n("2877"),u=n("6544"),h=n.n(u),d=n("0798"),p=n("8336"),f=n("62ad"),v=n("a523"),g=n("23a7"),m=n("4bd4"),b=n("132d"),x=n("0fd9"),y=n("b974"),w=n("1f4f"),S=n("a844"),C=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=C.exports;h()(C,{VAlert:d["a"],VBtn:p["a"],VCol:f["a"],VContainer:v["a"],VFileInput:g["a"],VForm:m["a"],VIcon:b["a"],VRow:x["a"],VSelect:y["a"],VSimpleTable:w["a"],VTextarea:S["a"]})},"23a7":function(t,e,n){"use strict";var a=n("2909"),i=n("5530"),r=n("53ca"),s=(n("a9e3"),n("caad"),n("13d5"),n("d81d"),n("b0c0"),n("99af"),n("a434"),n("159b"),n("fb6a"),n("5803"),n("2677")),o=n("cc20"),c=n("80d2"),l=n("d9bd"),u=n("d9f7");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(c["y"])(t).every((function(t){return null!=t&&"object"===Object(r["a"])(t)}))}}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size,a=void 0===n?0:n;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["q"])(e,1024===this.base))},internalArrayValue:function(){return Object(c["y"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,a=void 0===n?"":n,i=e.size,r=void 0===i?0:i,s=t.truncateText(a);return t.showSize?"".concat(s," (").concat(Object(c["q"])(r,1024===t.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(l["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(c["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(o["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=s["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:n,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=s["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(i["a"])(Object(i["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,n){"use strict";var a=n("8654");e["a"]=a["a"]},5803:function(t,e,n){},a844:function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("1681"),n("8654")),r=n("58df"),s=Object(r["a"])(i["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=DiagnosticoChincha.6a195238.js.map