ContactController.prototype = new BaseController();
//All event binding and passing of data from the model to the views goes here
function ContactController() {
	var self = this;
	//Constructor
	this.construct = function() {
		self.sifrAction();
		self.twitterAction();
		self.pngfixAction();
		self.socialnavAction();
	}
	
	/* !-- sifr action -- */
	this.sifrAction = function() {
		self.view.sifr(".headline>p", "/swf/quicksand.swf", "#770015", "#d6d6d6", "transparent");
	}
	
	/* !-- twitter action -- */
	this.twitterAction = function() {
		self.view.twitter("jessica_tsuji", 50, 1, "loading tweets...");
	}
	
	/* !-- png fix action -- */
	this.pngfixAction = function() {
		self.view.pngfix('body');
	}
	
	/* !-- social nav action -- */
	this.socialnavAction = function() {
		var index_model = new IndexModel();
		
        //adding the description container for the social site
        self.view.render.append($('#social'), '<span class="socialType"></span>');
        
        //binding the hover events for 
        $('#social .nav li a').bind("mouseover", function() {
        	//change the description to the social site type
        	socialType = index_model.get.attr($(this), 'title');
        	self.view.render.text($('#social .socialType'), socialType);
        //binding to the blur event
        }).bind("mouseout",  function() {
        	//clear the social type
        	self.view.render.text($('#social .socialType'), "");
        });
	}
	
	self.construct();
}

$(function() {
	new ContactController();	
});

