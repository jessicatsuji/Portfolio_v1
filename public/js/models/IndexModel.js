IndexModel.prototype = new BaseModel();

function IndexModel() {
	var self = this;
	
	/* !-- ajax data -- */
	this.request = function(data, controller, listener) {
		self.data_adapter(data, controller, listener);
	}
	
	/* !-- page element data -- */
	this.get = {
		attr: function(selector, string) {
			return $(selector).attr(string);
		},
		amount: function(selector) {
			return $(selector).size();
		},
		css: function(selector, attr) {
			return $(selector).css(attr).replace('px', '');
		}
	}
}
