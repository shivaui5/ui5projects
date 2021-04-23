sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("cinarios_1myCinarios.controller.view2", {

		onInit: function() {
			this.oRoute = this.getOwnerComponent().getRouter();
		},
		/*		onSelect: function(oEvent) {
					//https://stackoverflow.com/questions/42325406/how-can-i-get-current-route
					var path = oEvent.getParameter("value");
					if (path == "view1") {
						this.oRoute.navTo("shivaView");
					} else if (path == "view3") {
						this.oRoute.navTo("nadhuView");
					}

				},*/

		onChange: function(oEvent) {
			var path = oEvent.getParameter("selectedItem").getText();;
			if (path == "view1") {
				this.oRoute.navTo("shivaView");
			} else if (path == "view3") {
				this.oRoute.navTo("nadhuView");
			}
		}
	});

});