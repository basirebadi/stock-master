"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9374],{42708:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=a(20629),i=a(74865),r=a.n(i);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const l={metaInfo:{title:"Update Transfer"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,details:[],detail:{quantity:"",discount:"",Unit_cost:"",discount_Method:"",tax_percent:"",tax_method:""},warehouses:[],products:[],total:0,GrandTotal:0,transfer:{id:"",from_warehouse:"",to_warehouse:"",statut:"",notes:"",items:"",date:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},product:{id:"",code:"",stock:"",quantity:"",discount:"",DiscountNet:"",discount_Method:"",name:"",no_unit:"",unitPurchase:"",purchase_unit_id:"",Net_cost:"",Unit_cost:"",Total_cost:"",subtotal:"",product_id:"",detail_id:"",taxe:"",tax_percent:"",tax_method:"",product_variant_id:"",etat:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,s.Se)(["currentUser"])),methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},Submit_Transfer:function(){var t=this;this.$refs.Edit_transfer.validate().then((function(e){e?t.Update_Transfer():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},submit_Update_Detail:function(){var t=this;this.$refs.Update_Detail_transfer.validate().then((function(e){e&&t.Update_Detail()}))},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},Modal_Updat_Detail:function(t){this.detail={},this.detail.name=t.name,this.detail.detail_id=t.detail_id,this.detail.Unit_cost=t.Unit_cost,this.detail.tax_method=t.tax_method,this.detail.discount_Method=t.discount_Method,this.detail.discount=t.discount,this.detail.quantity=t.quantity,this.detail.tax_percent=t.tax_percent,this.$bvModal.show("form_Update_Detail")},Update_Detail:function(){for(var t=0;t<this.details.length;t++)this.details[t].detail_id===this.detail.detail_id&&(this.details[t].tax_percent=this.detail.tax_percent,this.details[t].Unit_cost=this.detail.Unit_cost,this.details[t].quantity=this.detail.quantity,this.details[t].tax_method=this.detail.tax_method,this.details[t].discount_Method=this.detail.discount_Method,this.details[t].discount=this.detail.discount,"2"==this.details[t].discount_Method?this.details[t].DiscountNet=this.detail.discount:this.details[t].DiscountNet=parseFloat(this.detail.Unit_cost*this.details[t].discount/100),"1"==this.details[t].tax_method?(this.details[t].Net_cost=parseFloat(this.detail.Unit_cost-this.details[t].DiscountNet),this.details[t].taxe=parseFloat(this.detail.tax_percent*(this.detail.Unit_cost-this.details[t].DiscountNet)/100)):(this.details[t].Net_cost=parseFloat((this.detail.Unit_cost-this.details[t].DiscountNet)/(this.detail.tax_percent/100+1)),this.details[t].taxe=parseFloat(this.detail.Unit_cost-this.details[t].Net_cost-this.details[t].DiscountNet)),this.$forceUpdate());this.Calcul_Total(),this.$bvModal.hide("form_Update_Detail")},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<1)return this.product_filter=[];""!=this.transfer.from_warehouse&&null!=this.transfer.from_warehouse?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())}))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):(this.product.code=t.code,this.product.no_unit=1,this.product.stock=t.qte_purchase,t.qte_purchase<1?this.product.quantity=t.qte_purchase:this.product.quantity=1,this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;if(this.transfer.from_warehouse===this.transfer.to_warehouse)return this.makeToast("warning",this.$t("WarehouseIdentical"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""==this.details[e].quantity&&(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Update_Transfer:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,r().start(),r().set(.1);var e=this.$route.params.id;axios.put("transfers/".concat(e),{transfer:this.transfer,details:this.details,GrandTotal:this.GrandTotal}).then((function(e){r().done(),t.SubmitProcessing=!1,t.$router.push({name:"index_transfer"}),t.makeToast("success",t.$t("Update.TitleTransfer"),t.$t("Success"))})).catch((function(e){r().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},Last_Detail_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},add_product:function(){this.details.length>0?this.Last_Detail_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product)},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id===e&&(isNaN(t.quantity)&&(this.details[a].quantity=t.qte_copy),"new"==t.etat&&t.quantity>t.stock?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[a].quantity=t.stock):"current"==t.etat&&t.quantity>t.stock+t.qte_copy?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[a].quantity=t.qte_copy):this.details[a].quantity=t.quantity);this.$forceUpdate(),this.Calcul_Total()},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&("new"==t.etat&&t.quantity+1>t.stock||"current"==t.etat&&t.quantity+1>t.stock+t.qte_copy?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&("new"==t.etat&&t.quantity-1>t.stock||"current"==t.etat&&t.quantity-1>t.stock+t.qte_copy?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[a].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_cost+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var a=parseFloat(this.total-this.transfer.discount);this.transfer.TaxNet=parseFloat(a*this.transfer.tax_rate/100),this.GrandTotal=parseFloat(a+this.transfer.TaxNet+this.transfer.shipping);var s=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(s)},delete_Product_Detail:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&(this.details.splice(e,1),this.Calcul_Total())},keyup_OrderTax:function(){isNaN(this.transfer.tax_rate)?this.transfer.tax_rate=0:""==this.transfer.tax_rate?(this.transfer.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.transfer.discount)?this.transfer.discount=0:""==this.transfer.discount?(this.transfer.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.transfer.shipping)?this.transfer.shipping=0:""==this.transfer.shipping?(this.transfer.shipping=0,this.Calcul_Total()):this.Calcul_Total()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Get_Products_By_Warehouse:function(t){var e=this;r().start(),r().set(.1),axios.get("Products/Warehouse/"+t+"?stock=1").then((function(t){e.products=t.data,r().done()})).catch((function(t){}))},Get_Product_Details:function(t){var e=this;axios.get("Products/"+t).then((function(t){e.product.discount=0,e.product.DiscountNet=0,e.product.discount_Method="2",e.product.del=0,e.product.id=0,e.product.etat="new",e.product.product_id=t.data.id,e.product.name=t.data.name,e.product.Net_cost=t.data.Net_cost,e.product.Unit_cost=t.data.Unit_cost,e.product.taxe=t.data.tax_cost,e.product.tax_method=t.data.tax_method,e.product.tax_percent=t.data.tax_percent,e.product.unitPurchase=t.data.unitPurchase,e.product.purchase_unit_id=t.data.purchase_unit_id,e.add_product(),e.Calcul_Total()}))},Selected_From_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},GetElements:function(){var t=this,e=this.$route.params.id;axios.get("transfers/".concat(e,"/edit")).then((function(e){t.transfer=e.data.transfer,t.details=e.data.details,t.warehouses=e.data.warehouses,t.Get_Products_By_Warehouse(t.transfer.from_warehouse),t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const d=(0,a(51900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("EditTransfer"),folder:t.$t("ListTransfers")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"Edit_transfer"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Transfer.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("b-card",[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("date")+" *"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"date-feedback",type:"date"},model:{value:t.transfer.date,callback:function(e){t.$set(t.transfer,"date",e)},expression:"transfer.date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3120178706)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"From Warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("FromWarehouse")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_From_Warehouse},model:{value:t.transfer.from_warehouse,callback:function(e){t.$set(t.transfer,"from_warehouse",e)},expression:"transfer.from_warehouse"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,196005589)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"To Warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("ToWarehouse")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.transfer.to_warehouse,callback:function(e){t.$set(t.transfer,"to_warehouse",e)},expression:"transfer.to_warehouse"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,2600691786)})],1),t._v(" "),a("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[a("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[a("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}}),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(e){return a("li",{staticClass:"autocomplete-result",on:{mousedown:function(a){return t.SearchProduct(e)}}},[t._v(t._s(t.getResultValue(e)))])})),0)])]),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",{staticClass:"bg-gray-300"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))]),t._v(" "),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),a("tbody",[t.details.length<=0?a("tr",[a("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(e){return a("tr",{key:e.detail_id,class:{row_deleted:1===e.del||0===e.no_unit}},[a("td",[t._v(t._s(e.detail_id))]),t._v(" "),a("td",[a("span",[t._v(t._s(e.code))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"badge badge-success"},[t._v(t._s(e.name))]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"i-Edit",on:{click:function(a){return t.Modal_Updat_Detail(e)}}})]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_cost,3)))]),t._v(" "),a("td",[a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(e.stock)+" "+t._s(e.unitPurchase))])]),t._v(" "),a("td",[a("div",{staticClass:"quantity"},[a("b-input-group",[a("b-input-group-prepend",[a("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.decrement(e,e.detail_id)}}},[t._v("-")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{disabled:1===e.del||0===e.no_unit},domProps:{value:e.quantity},on:{keyup:function(a){return t.Verified_Qty(e,e.detail_id)},input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("b-input-group-append",[a("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.increment(e,e.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.subtotal.toFixed(2)))]),t._v(" "),a("td",[a("a",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-icon btn-sm",attrs:{title:"Delete"},on:{click:function(a){return t.delete_Product_Detail(e.detail_id)}}},[a("i",{staticClass:"i-Close-Window text-25 text-danger"})])])])}))],2)])])]),t._v(" "),a("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[a("table",{staticClass:"table table-striped table-sm"},[a("tbody",[a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),a("td",[a("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.transfer.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.transfer.tax_rate,2))+" %)")])])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.transfer.discount.toFixed(2)))])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.transfer.shipping.toFixed(2)))])]),t._v(" "),a("tr",[a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")}},[a("b-input-group",{attrs:{append:"%"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.transfer.tax_rate,callback:function(e){t.$set(t.transfer,"tax_rate",t._n(e))},expression:"transfer.tax_rate"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,907389170)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Discount")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.transfer.discount,callback:function(e){t.$set(t.transfer,"discount",t._n(e))},expression:"transfer.discount"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,3103063445)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Shipping")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.transfer.shipping,callback:function(e){t.$set(t.transfer,"shipping",t._n(e))},expression:"transfer.shipping"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1389454933)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"Completed",value:"completed"},{label:"Sent",value:"sent"},{label:"Pending",value:"pending"}]},model:{value:t.transfer.statut,callback:function(e){t.$set(t.transfer,"statut",e)},expression:"transfer.statut"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,524404404)})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Note")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.transfer.notes,expression:"transfer.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.transfer.notes},on:{input:function(e){e.target.composing||t.$set(t.transfer,"notes",e.target.value)}}})])],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Transfer}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("validation-observer",{ref:"Update_Detail_transfer"},[a("b-modal",{attrs:{"hide-footer":"",size:"md",id:"form_Update_Detail",title:t.detail.name}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit_Update_Detail.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Product Cost",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("ProductCost")+" *",id:"cost-input"}},[a("b-form-input",{attrs:{label:"Product Cost",state:t.getValidationState(e),"aria-describedby":"cost-feedback"},model:{value:t.detail.Unit_cost,callback:function(e){t.$set(t.detail,"Unit_cost",t._n(e))},expression:"detail.Unit_cost"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"cost-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("TaxMethod")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.detail.tax_method,callback:function(e){t.$set(t.detail,"tax_method",e)},expression:"detail.tax_method"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")+" *"}},[a("b-input-group",{attrs:{append:"%"}},[a("b-form-input",{attrs:{label:"Order Tax",state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback"},model:{value:t.detail.tax_percent,callback:function(e){t.$set(t.detail,"tax_percent",t._n(e))},expression:"detail.tax_percent"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,i=e.errors;return a("b-form-group",{attrs:{label:t.$t("Discount_Method")+" *"}},[a("v-select",{class:{"is-invalid":!!i.length},attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),state:!i[0]&&(!!s||null),options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:t.detail.discount_Method,callback:function(e){t.$set(t.detail,"discount_Method",e)},expression:"detail.discount_Method"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount Rate",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Discount")+" *"}},[a("b-form-input",{attrs:{label:"Discount",state:t.getValidationState(e),"aria-describedby":"Discount-feedback"},model:{value:t.detail.discount,callback:function(e){t.$set(t.detail,"discount",t._n(e))},expression:"detail.discount"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);