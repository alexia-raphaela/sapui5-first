sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"

  // fazer separação de responsabilidades  
  // o que o App.controller vai fazer é trabalhar especificamente com a view 
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onShowHello: function () {
        // será lido a mensagem do modelo i18n
        // var é um pacote de objetos, de recursos
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        // referindo do HelloMsg do arquivo i18n
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // exibir messagem
        MessageToast.show(sMsg);
      }
    });
})