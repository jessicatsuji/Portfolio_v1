//All event binding and passing of data from the model to the views goes here
function GalleryHelper(model, view) {
	var self = this;
	var model = model;
	this.view = view;
	this.root;
	this.liWidth;
	
	//Constructor
	this.construct = {
		featured: function() {
			//adding 'enabled' class to specify javascript is enabled
			self.classing.adding($('#featuredWork'), 'enabled');	
			
			//binding the hover events for each tab
			self.toggleTab.featured();
			$('#blend h3.tab').triggerHandler('click');
		},
		work: function() {
			//binding the hover events for each tab
			self.toggleTab.work();
			self.closeAll.work($('.individOpen .title'));
		}
	}
	
	this.toggleTab = {
		featured: function() {
			$(self.root).hover(function() {
				var project = $(this).parent();
				self.classing.adding($(project), 'hover');
			}, function() {
				self.classing.removing($(this), 'hover');
			});
			$(self.root).bind('click', function() {
				console.log('click');
				var project = $(this).parent();
				var gallery = $('#' + model.get.attr($(project), 'id') + " .gallery");
				var overlay = $('.overlay', gallery);
				var previous = $('.previous', overlay);
				var next = $('.next', overlay);
				var view = $('.view', overlay);
	        	var photos = $('li', gallery); 
				
				//determining the top position of the tab, so the arrow knows where to animate to
				var topPos = model.get.css($(this), 'top');
	        	amount = model.get.amount(photos);
	        	maxWidth = (amount - 1) * self.liWidth;
				
				//hiding the old tab
				self.closeAll.featured($('.activeTxt'), $('.gallery'));
				
				//adding the open class
				self.classing.adding($(project), 'open');
				
				//adding the new tab's active text
				self.view.render.prepend($(project), '<h3 class="activeTxt"><!-- --></h3>');
				
				//fading in new tab's active text
				$('.activeTxt', project).animate({opacity:1}, 200).fadeIn(600);
				
				//fading in gallery
				$("ul", gallery).fadeIn(1000);
				
				//binding custom event to gallery to get the current margin and determine which overlay controls should be shown
				self.gallery.getMargin($(gallery), $(overlay), $(previous), $(next), $(view));
		        
		        //bind hover events for the gallery controls
		        self.gallery.controls.bind($(gallery), $(overlay));
		        self.gallery.controls.previous($(gallery), $(previous));
		        self.gallery.controls.next($(gallery), $(next));
				
				//animating the arrow move
				self.view.animate.top({el: $('.arrow'), top: topPos, dur: 700, ea: "easeInOutElastic"});
			});
		},
		work: function() {
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
	        	maxWidth = (amount - 1) * self.liWidth;
	        	
				//if others are open, close them
				self.closeAll.work($('.open .title'));
				    	
	        	//add open class for css stylings & default to hidden
	        	self.classing.adding($(project), 'open');
	        	
	        	//handle the sliding in of silver arrow
	        	self.metaView.revealR(metaInfo, meta);
	        	 	
				//slide down gallery and overview
				self.fullView.revealDown($(full));
				
				//binding custom event to gallery to get the current margin and determine which overlay controls should be shown
				self.gallery.getMargin($(gallery), $(overlay), $(previous), $(next));
		        
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
	}
	
	this.closeAll = {
		featured: function(el, gallery) {	
			//removing old open classes
			self.classing.removing($(el), 'open');
			
			//fade out the active text and remove
			$(el).animate({opacity:1}, 200).fadeOut(600, function() {
				$(this).remove();	
			});
			
			//fadeout gallery
			$('ul', gallery).hide();
		},
		work: function(el) {		
			$(el).triggerHandler('click');
		}
	}
	
	this.unFocus = function(el) {
		$(el).blur();
	}
	
	this.unbind = function(el, ev) {
		$(el).unbind(ev);
	}
	
	this.classing = {
		adding: function(el, name) {
	    	$(el).addClass(name); 
		},
		removing: function(el, name) {
			$(el).parent().removeClass(name);
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
		getMargin: function(el, overlay, previous, next, view) {
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
		        	marginL = marginOrig*1 + self.liWidth;
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
		        	marginL = marginOrig*1 - self.liWidth;
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