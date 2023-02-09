sap.ui.define([
  //puxar módulo de componente de interface do usuário
  // temos aqui, componente de usuário, componente de modelo e modelo de recurso 
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"

  // obter todos os modelos e i18n
], function (UIComponent, JSONModel, ResourceModel) {
  // se certificar em usar a verificação estrita do Javascript
  "use strict";
  // extendendo o componente de usuário
  // component porque o que precisamos está apenas no arquivo componente
  return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
    // o metadados irá segurar a view
    metadata: {
     manifest: "json"
    },
    //referência de evento
    init: function () {
      // chamar a função init do componente pai
      UIComponent.prototype.init.apply(this, arguments);
      // setar o valor do models
      var oData = {
        recipient: {
          name: "UI5"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);
    
    }
  })
})