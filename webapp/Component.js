sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"cinarios_1myCinarios/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("cinarios_1myCinarios.Component", {

		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			/*this.getRouter().initialize();*/
			var oRouter = this.getRouter();
			oRouter.initialize();

			/*// set the device model
			this.setModel(models.createDeviceModel(), "device");*/
			
			
		}
	});
});