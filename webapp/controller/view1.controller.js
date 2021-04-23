sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/routing/Targets"
], function(Controller, Targets) {
	"use strict";

	return Controller.extend("cinarios_1myCinarios.controller.view1", {

		onInit: function() {
			this.oRoute = this.getOwnerComponent().getRouter();
			//	this._target = new Targets();
		},
/*		onSelect: function(oEvent) {
			//https://stackoverflow.com/questions/42325406/how-can-i-get-current-route
			var path = oEvent.getParameter("value");
			if (path == "view2") {
				this.oRoute.navTo("hariView");
			} else if (path == "view3") {
				this.oRoute.navTo("nadhuView");
			}

		}*/
		
		onChange: function(oEvent) {
			var path = oEvent.getParameter("selectedItem").getText();;
			if (path == "view2") {
				this.oRoute.navTo("hariView");
			} else if (path == "view3") {
				this.oRoute.navTo("nadhuView");
			}
		}

	});

});