//All event binding and passing of data from the model to the views goes here
function GalleryHelper(model, view) {
	var self = this;
	var model = model;
	this.view = view;
	this.root;
	
	//Constructor
	this.construct = function() {
		self.toggleTab();
	}
	
	this.toggleTab = function() {
		$(self.root).toggle(function() {
			//get the targets
			var project = $(this).parent();
        	var meta = $('.meta', project);
        	var metaInfo = $(meta).children();
        	var full = $('.full', project);  
        	var gallery = $('.gallery', project);  
        	var photos = $('li', gallery); 
        	var overlay = $('.overlay', gallery);
        	var previous = $('.previous', overlay);
        	var next = $('.next', overlay); 
        	
        	//set variables
        	amount = model.get.amount(photos);
        	maxWidth = (amount - 1) * 967;
        	
			//if others are open, close them
			self.closeAll($('.open .title'));
			    	
        	//add open class for css stylings & default to hidden
        	self.classing.adding($(project), 'open');
        	
        	//handle the sliding in of silver arrow
        	self.metaView.revealR(metaInfo, meta);
        	 	
			//slide down gallery and overview
			self.fullView.revealDown($(full));
			
			//binding custom event to gallery to get the current margin and determine which overlay controls should be shown
			self.gallery.getMargin($(gallery), $(overlay), $(previous), $(next))
	        
	        //bind hover events for the gallery controls
	        self.gallery.controls.bind($(gallery), $(overlay));
	        self.gallery.controls.previous($(gallery), $(previous));
	        self.gallery.controls.next($(gallery), $(next));
			
			return false;
		}, function() {
			//get the targets
			var project = $(this).parent();
        	var meta = $('.meta', project);
        	var metaInfo = $(meta).children();
        	var full = $('.full', project);
        	  
			//blur the focus of the tab
        	self.unFocus($(this));
        	
        	//handle the fadeout of meta data
        	self.metaView.collapseL(metaInfo, meta);
	
	    	//Slide gallery and overview back up, remove open class
			self.fullView.collapseUp($(full), function() {
				self.classing.removing($(this), 'open');
			});
		
			return false;
		});
	}
	
	this.closeAll = function(el) {		
		$(el).triggerHandler('click');
	}
	
	this.unFocus = function(el) {
		$(el).blur();
	}
	
	this.classing = {
		adding: function(el, class) {
	    	$(el).addClass(class); 
		},
		removing: function(el, class) {
			$(el).parent().removeClass(class);
		}
	}
	
	this.fullView = {
		revealDown: function(el) {       
			self.view.animate.down({
				el: el,
				ea: "easeOutBounce",
				dur: 800
			});
		},
		collapseUp: function(el, callback) { 	
	    	self.view.animate.up({
				el: el,
				ea: "easeOutCirc",
				dur: 600
			}, callback);
		}
		
	}
	
	this.metaView = {
		revealR: function(txt, container) {
			self.view.render.none(txt);
	    	self.view.css.bgPos(container, "-750px -158px");
	    	self.view.animate.bg({
				el: container,
				bg: "0 -158px",
				dur: 300
			}, function() {
				self.view.render.fadeIn({
	    			el: txt,
	    			dur: 400
	    		});
			}); 
		},
		collapseL: function(txt, container) {
        	self.view.render.fadeOut({
    			el: txt,
    			dur: 300
    		}, function() {
	        	self.view.css.bgPos(container, "0 -158px");
	        	self.view.animate.bg({
        			el: container,
        			bg: "-750px -158px",
        			dur: 400
        		});
    		});
    	}
	}
	
	this.gallery = {
		getMargin: function(el, overlay, previous, next) {
	        $(el).bind("getMargin", function(e) {
	        	//get css marginLeft attribute value
	        	marginOrig = model.get.css($('ul', el), 'marginLeft');
	        	
	        	//default to show all controls
	        	self.view.render.all($('a', overlay));
	        	
	        	//if at first photo, don't show previous
	        	if (marginOrig == '0') 
		        	self.view.render.none($(previous));
	        	
	        	//if at last, don't show next
	        	if ( marginOrig == ( -maxWidth ) ) 
		        	self.view.render.none($(next));
	        });
		},
		controls: {
			bind: function(el, overlay) {
				$(el).hover(function() {
		        	$(this).trigger("getMargin");
		        	self.view.render.fadeIn({el: $(overlay)});
		        }, function() {
		        	self.view.render.fadeOut({el: $(overlay)});
		        });
			},
			previous: function(el, previous) {
				$(previous).click(function() {
		        	marginL = marginOrig*1 + 967;
		        	self.view.animate.marginL({
			        	el: $('ul', el),
		    			mL: marginL + "px",
		    			dur: 450,
		    			ea: "easeInOutBack"
		    		}, function() {
						$(el).triggerHandler('mouseover');
					});
		        	
		        	return false;
		        });
			},
			next: function(el, next) {		        
		        $(next).click(function() {
		        	marginL = marginOrig*1 - 967;
		        	self.view.animate.marginL({
			        	el: $('ul', el),
		    			mL: marginL + "px",
		    			dur: 450,
		    			ea: "easeInOutBack"
		    		}, function() {
						$(el).triggerHandler('mouseover');
					});
	
		        	return false;
		        });
			}
		}
	}
}