(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LabClinico"],{"1f4f":function(t,e,a){"use strict";var n=a("5530"),i=(a("a9e3"),a("8b37"),a("80d2")),s=a("7560"),r=a("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2bfd":function(t,e,a){},"431a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"text-center"},[a("h2",[t._v("Registro Laboratorio")]),a("h3",[t._v("Fecha:15/04/2021")])]),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.Guardar(e)}}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{type:"number",color:"red darken-4",label:"DNI",outlined:"","background-color":"red lighten-4"}}),a("v-text-field",{attrs:{color:"red darken-4",label:"Paciente",outlined:"","background-color":"red lighten-4"}}),a("v-text-field",{attrs:{type:"date",color:"red darken-4",label:"Fecha de Nacimiento",outlined:"","background-color":"red lighten-4"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-autocomplete",{attrs:{items:t.DataGetExamen,outlined:"",chips:"","deletable-chips":"",multiple:"",color:"red darken-4",label:"Exámenes","item-text":"name","item-value":"name","background-color":"red lighten-4"},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-list-item-content",{attrs:{"active-class":"pink--text"}},[a("v-list-item-title",{staticClass:"red--text text-lighten-4",domProps:{innerHTML:t._s(e.item.name)}})],1)]}}]),model:{value:t.Examen,callback:function(e){t.Examen=e},expression:"Examen"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{type:"number",color:"red darken-4",label:"Telefono",outlined:"","background-color":"red lighten-4"}}),a("v-text-field",{attrs:{color:"red darken-4",label:"Empresa",outlined:"","background-color":"red lighten-4"}})],1)],1),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"px-5",attrs:{block:"",dark:"",color:"red darken-4",type:"submit"}},[t._v("Guardar")])],1)],1)],1),a("v-row",[a("v-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[a("Tabla")],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-simple-table",{staticClass:"my-2",attrs:{dark:"",dense:"","fixed-header":"","max-height":"70vh"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text ",staticStyle:{"border-top-left-radius":"5px","border-bottom-left-radius":"5px"}},[t._v(" Nro ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" Paciente ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" Fech.Nac. ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" Examen ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" Empresa ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" Telefono ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "},[t._v(" DNI ")]),a("th",{staticClass:"red darken-4 text-center subtitle-1 font-weight-bold white--text "})])]),a("tbody",t._l(t.ImagenesData,(function(e,n){return a("tr",{key:n},[a("td",{staticClass:"text-center"},[t._v(t._s(e.nro))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.paciente))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.fecha))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.examen))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.empresa))]),a("td",{staticClass:"text-center "},[t._v(t._s(e.telefono))]),a("td",{staticClass:"text-center "},[t._v(t._s(e.dni))]),a("td",{staticClass:"text-center"},[a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""}},[a("v-icon",[t._v("edit")])],1),a("v-btn",{staticClass:"ma-1",attrs:{elevation:"3",icon:"",outlined:"",small:""},on:{click:function(a){return t.ShowDialog(e.examen,e.paciente,e.nro)}}},[a("v-icon",[t._v("delete")])],1)],1)])})),0)]},proxy:!0}])}),a("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"py-2"},[a("v-list-item-content",{staticClass:"text-center"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.dataDialog.message)+" "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[t._v(" "+t._s(t.dataDialog.examen)+" ")])]),a("div",{staticClass:"font-weight-bold"},[t._v("de "),a("span",{staticClass:"text-center red--text text-darken-4 ma-2"},[t._v(" "+t._s(t.dataDialog.nombre)+" ")])])]),a("v-list-item-content",[a("v-layout",{attrs:{"mx-2":"","justify-space-between":!0}},[a("v-btn",{attrs:{rounded:"",dark:"",color:"red darken-4"},on:{click:function(e){return t.Eliminar(t.dataDialog.id)}}},[t._v("Si")]),a("v-btn",{attrs:{rounded:"",dark:""},on:{click:t.NotShowDialog}},[t._v("No")])],1)],1)],1)],1)],1)},r=[],l={name:"TablaImagenes",data:function(){return{dialog:!1,dataDialog:{message:"Eliminar el examen ",id:null,examen:null,nombre:null},ImagenesData:[{nro:1,paciente:"Julian  Robert  De La Torre",fecha:"12/23/20",examen:"Fisiológico",empresa:"PAMS",telefono:"945234123",dni:"73140669"},{nro:2,paciente:"Julian  Robert  De La Torre",fecha:"12/23/20",examen:"Fisiológico",empresa:"PAMS",telefono:"945234123",dni:"73140669"},{nro:3,paciente:"Ciro Maguiña Terta",fecha:"12/23/20",examen:"Fisiológico",empresa:"PAMS",telefono:"945234123",dni:"73140669"},{nro:4,paciente:"Julian  Robert  De La Torre",fecha:"12/23/20",examen:"PAPS",empresa:"PAMS",telefono:"945234123",dni:"73140669"},{nro:5,paciente:"Karla Zerata Terta",fecha:"12/23/20",examen:"HGC",empresa:"PAMS",telefono:"945234123",dni:"73140669"}]}},methods:{ShowDialog:function(t,e,a){this.dataDialog.examen=t,this.dataDialog.nombre=e,this.dataDialog.id=a,this.dialog=!0},NotShowDialog:function(){this.dialog=!1,console.log(this.dialog),this.dataDialog.data=null,this.dataDialog.id=null},Eliminar:function(t){console.log("Eliminando.."+t),this.dialog=!1}}},o=l,c=a("2877"),d=a("6544"),u=a.n(d),h=a("8336"),m=a("b0af"),f=a("169a"),p=a("132d"),v=a("a722"),g=a("5d23"),b=a("1f4f"),x=Object(c["a"])(o,s,r,!1,null,null,null),I=x.exports;u()(x,{VBtn:h["a"],VCard:m["a"],VDialog:f["a"],VIcon:p["a"],VLayout:v["a"],VListItemContent:g["a"],VSimpleTable:b["a"]});var S={name:"Patologia",components:{Tabla:I},data:function(){return{Examen:[],DataGetExamen:[{name:"Sandra Adams",group:"Group 1"},{name:"Ali Connors",group:"Group 1"},{name:"Trevor Hansen",group:"Group 1"},{name:"Tucker Smith",group:"Group 1"}]}},methods:{Guardar:function(){console.log("Guardando")}}},C=S,y=a("c6a6"),D=a("62ad"),k=a("a523"),w=a("4bd4"),_=a("0fd9"),V=a("8654"),T=Object(c["a"])(C,n,i,!1,null,null,null);e["default"]=T.exports;u()(T,{VAutocomplete:y["a"],VBtn:h["a"],VCol:D["a"],VContainer:k["a"],VForm:w["a"],VListItemContent:g["a"],VListItemTitle:g["b"],VRow:_["a"],VTextField:V["a"]})},"8b37":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85");var n=a("e8f2"),i=a("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,s=e.data,r=e.children,l=s.attrs;return l&&(s.attrs={},a=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(i["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),r)}})},a722:function(t,e,a){"use strict";a("20f6");var n=a("e8f2");e["a"]=Object(n["a"])("layout")},c6a6:function(t,e,a){"use strict";var n=a("5530"),i=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),s=a("8654"),r=a("d9f7"),l=a("80d2"),o=Object(n["a"])(Object(n["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["m"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},o),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["s"].backspace&&t!==l["s"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,i=t!==n-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(r["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["l"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["l"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["s"].home,l["s"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("498a"),a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("a15b");var n=a("2b0e");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,i=a.data,s=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));l.length&&(i.staticClass+=" ".concat(l.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,s)}})}}}]);
//# sourceMappingURL=LabClinico.0aaceb71.js.map