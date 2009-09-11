		$(function() {
			/* !-- sIFR --*/
			
			sIFR.replaceElement(".headline>p", named({sFlashSrc: "/swf/quicksand.swf", sColor: "#770015", sBgColor: "#d6d6d6", sWmode: "transparent"}));
			
			
			/* !-- Javascript FeatureBox -- */
			
			//adding 'enabled' class to specify javascript is enabled
			$('#featuredWork').addClass('enabled');
			
			//adding initial active tab's activeTxt
			$('.featBlend').prepend('<h3 class="activeTxt"><!-- --></h3>');	
			$('.activeTxt').show();	
			
			//binding the hover events for each tab
			$('#featuredWork h3').hover(function() {
				//adding class when hovered for styles
				$(this).parent().addClass('hover');
			//event on blur
			}, function() {
				//removing class when blurred for styles
				$(this).parent().removeClass('hover');
			//binding click
			}).click(function() {
				//hiding the old tab
				$('.activeTxt').animate({opacity:1}, 200).fadeOut(600, function() {
					$(this).remove();	
				});
				
				//adding the new tab's active text
				$(this).parent().prepend('<h3 class="activeTxt"><!-- --></h3>');
				
				//fading in new tab's active text
				$('.activeTxt').animate({opacity:1}, 200).fadeIn(600);
				
				//determining the top position of the tab, so the arrow knows where to animate to
				var topPos = $(this).css('top');
				
				//animating the arrow move
				$('.arrow').stop().animate({
						top: topPos }, 
					{
						duration: 800, 
						easing: "easeInOutElastic"
					});
			});
			
			//unbinding the h3 events for arrow and active text
			$('#featuredWork h3.arrow').unbind('click');
			$('.activeTxt').unbind('mouseover');
			
			
			/* !-- Twitter -- */
			
			//defining twitter plugin tweet object
			$(".tweet").tweet({
	            username: "jessica_tsuji",
	            join_text: "auto",
	            avatar_size: 50,
	            count: 1,
	            auto_join_text_default: "",
	            auto_join_text_ed: "",
	            auto_join_text_ing: "",
	            auto_join_text_reply: "",
	            auto_join_text_url: "",
	            loading_text: "loading tweets..."
	        });
	        
	        
	        /* !-- Social Nav -- */
	        
	        //adding the description container for the social site
	        $('#social').append('<span class="socialType"></span>');
	        
	        //binding the hover events for 
	        $('#social .nav li a').hover(function() {
	        	//change the description to the social site type
	        	$('#social .socialType').text($(this).attr('title'));
	        //binding to the blur event
	        }, function() {
	        	//clear the social type
	        	$('#social .socialType').text("");
	        });
	        
	        
	        /* !-- Work -- */
	        
	        //binding to the tabs	        
	        $('.title').toggle(function() {
	        	var project = $(this).parent();
	        	
	        	$('.meta', project).children().hide();
	        	
	        	$('.meta', project)
	        		.css({backgroundPosition: "-750px -158px"})
	        		.animate({
		        		backgroundPosition: "0 -158px"},
		        		{
		        			duration: 200,
		        			complete: function() {
		        				$(this).children().fadeIn();
		        		}
		        	});
	        	
	        	$('.open .full').slideUp({
	        		"duration": 600,
	        		"easing": "easeInBack",
	        		"complete": function() {
			        	$(this).parent().removeClass('open');	        		
	        		}
	        	});
	        	
	        	$(project).addClass('open');
	        	$('.full', project).slideDown({
	        		"duration": 800,
	        		"easing": "easeOutBounce"
	        	});
	        	
	        	maxWidth = ($('.gallery li', project).size() - 1) * 967;
	        
		        $('.gallery', project).bind("getMargin", function(e) {
		        	marginOrig = $('ul', this).css('marginLeft').replace('px', '');
		        	
		        	console.log(marginOrig)
		        	$('.overlay a', this).show();
		        	
		        	if (marginOrig == '0') {
		        		$('.previous', this).hide();
		        	}
		        	
		        	if ( marginOrig == ( -maxWidth ) ) {
		        		$('.next', this).hide();
		        	}
		        });
	        
		        $('.gallery', project).hover(function() {
		        	$(this).trigger("getMargin");
		        	$('.overlay', this).fadeIn();
		        }, function() {
		        	$('.overlay', this).fadeOut();
		        });
		        
		        $('.overlay .next', project).click(function() {
		        	marginL = marginOrig*1 - 967;
		        	$(this).parent().siblings('ul').animate({marginLeft: marginL + "px"}, {"duration": 450, "easing": "easeInOutBack", "complete": function() {
		        				$(this).parent().triggerHandler('mouseover');
		        			}
		        		});
		        	return false;
		        });
		        
		        $('.overlay .previous', project).click(function() {
		        	marginL = marginOrig*1 + 967;
		        	$(this).parent().siblings('ul').animate({marginLeft: marginL + "px"}, {"duration": 450, "easing": "easeInOutBack", "complete": function() {
			        			$(this).parent().triggerHandler('mouseover');
			        		}
		        		});
		        	return false;
		        });
		        
	        	return false;
	        }, function() {
	        	$(this).blur();
	        	
	        	project = $(this).parent();
	        	
	        	$('.meta', project).children().fadeOut(300, function() {
		        	$(this).parent()
		        		.css({backgroundPosition: "0 -158px"})
		        		.animate({
				        		backgroundPosition: "-750px -158px"},
			        		{
				        		duration: 200
				        	});
	        	});
	        	
	        	$('.full', project).slideUp({
	        		"duration": 600,
	        		"easing": "easeInBack",
	        		"complete": function() {
			        	$(this).parent().removeClass('open');	        		
	        		}
	        	});
	        	return false;
	        });
		});