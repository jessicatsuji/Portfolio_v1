IndexController.prototype = new BaseController();
//All event binding and passing of data from the model to the views goes here
function IndexController() {
	var self = this;
	//Constructor
	this.construct = function() {
		//self.slideshowAction();
		//self.newAction();
		self.sifrAction();
		self.twitterAction();
		self.pngfixAction();
		self.socialnavAction();
		self.workAction();
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
	
	/* !-- work action -- */
	this.workAction = function() {
		var index_model = new IndexModel();
		
		//binding all tabs to toggle event
		$('.title').toggle(function() {
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
        	var amount = index_model.get.amount(photos);
        	var maxWidth = (amount - 1) * 967;
			
			//if others are open, close them
			$('.open .title').triggerHandler('click');
			    	
        	//add open class for css stylings & default to hiden
        	$(project).addClass('open'); 
	        	
        	//handle the sliding in of silver arrow
        	self.view.render.none(metaInfo);
        	self.view.css.bgPos(meta, "-750px -158px");
        	self.view.animate.bg({
    			el: meta,
    			bg: "0 -158px",
    			dur: 300
    		}, function() {
				self.view.render.fadeIn({
        			el: metaInfo,
        			dur: 400
        		});
			}); 
        	
        	//slide down gallery and overview
			self.view.animate.down({
    			el: full,
    			ea: "easeOutBounce",
    			dur: 800
			});
	        
	        //binding custom event to gallery to get the current margin and determine which overlay controls should be shown
	        $(gallery).bind("getMargin", function(e) {
	        	//get css marginLeft attribute value
	        	marginOrig = index_model.get.css($('ul', gallery), 'marginLeft');
	        	
	        	//default to show all controls
	        	self.view.render.all($('a', overlay));
	        	
	        	//if at first photo, don't show previous
	        	if (marginOrig == '0') 
		        	self.view.render.none($(previous));
	        	
	        	//if at last, don't show next
	        	if ( marginOrig == ( -maxWidth ) ) 
		        	self.view.render.none($(next));
	        });
	        
	        //bind hover events for the gallery controls
	        $(gallery).hover(function() {
	        	$(this).trigger("getMargin");
	        	self.view.render.fadeIn({el: $(overlay)});
	        }, function() {
	        	self.view.render.fadeOut({el: $(overlay)});
	        });
	        
	        //bind click event to the overlay controls		        
	        $(next).click(function() {
	        	marginL = marginOrig*1 - 967;
	        	self.view.animate.marginL({
		        	el: $('ul', gallery),
	    			mL: marginL + "px",
	    			dur: 450,
	    			ea: "easeInOutBack"
	    		}, function() {
					$(gallery).triggerHandler('mouseover');
				});

	        	return false;
	        });
	        
	        $(previous).click(function() {
	        	marginL = marginOrig*1 + 967;
	        	self.view.animate.marginL({
		        	el: $('ul', gallery),
	    			mL: marginL + "px",
	    			dur: 450,
	    			ea: "easeInOutBack"
	    		}, function() {
					$(gallery).triggerHandler('mouseover');
				});
	        	
	        	return false;
	        });
			
			return false;
			
		//bind all tabs to toggle blur event
		}, function() {
			//blur the focus of the tab
        	$(this).blur();
        	
			//get the targets
			var project = $(this).parent();
        	var meta = $('.meta', project);
        	var metaInfo = $(meta).children();
        	var full = $('.full', project);  
			
			//handle the fadeout of meta data
        	self.view.render.fadeOut({
    			el: metaInfo,
    			dur: 300
    		}, function() {
	        	self.view.css.bgPos(meta, "0 -158px");
	        	self.view.animate.bg({
        			el: meta,
        			bg: "-750px -158px",
        			dur: 400
        		});
    		});
        	
        	//Slide gallery and overview back up, remove open class
        	self.view.animate.up({
    			el: full,
    			ea: "easeOutCirc",
    			dur: 600
    		}, function() {
				$(this).parent().removeClass('open');
			});

			return false;
		});
	}
	
	/* !-- slideshow action */
	this.slideshowAction = function() {
		var slideshow_model = new SlideShowModel();
		slideshow_model.request('id=26', 'index', 'slideshow_data');
		$(this).bind('slideshow_data', function() {
			var returnData = slideshow_model.get_data();
			self.view.alert('fail', returnData);
		});		
	}
	
	/* !-- new action -- */
	this.newAction = function() {
		var slideshow_model = new SlideShowModel();
		slideshow_model.request('id=26', 'index', 'new_data');
		$(this).bind('new_data', function() {
			var returnData = slideshow_model.get_data();
			console.log('new');
		});		
	}
	
	self.construct();
}

$(function() {
	new IndexController();	
});

