View.prototype = new BaseView();

function View() {

	/* !-- Sifr -- */
	this.sifr = function(selector, swfPath, color, bgColor, sWmode) {
		sIFR.replaceElement(
			selector, 
			named({
				sFlashSrc: swfPath, 
				sColor: color, 
				sBgColor: bgColor, 
				sWmode: sWmode
			})
		);
	}

	/* !-- Twitter -- */
	this.twitter = function(username, aSize, count, loading) {
		$(".tweet").tweet({
            username: username,
            join_text: "auto",
            avatar_size: aSize,
            count: count,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "",
            auto_join_text_url: "",
            loading_text: loading
        });
	}

	/* !-- Png Fix -- */
	this.pngfix = function(selector) {
		$(selector).pngFix(); 
	}
	
	/* !-- Render HTML -- */
	this.render = {
		append: function(selector, string) {
			$(selector).append(string);
		},
		prepend: function(selector, string) {
			$(selector).prepend(string);
		},
		text: function (selector, string) {
			$(selector).text(string);
		},
		none: function (selector) {
			$(selector).hide();
		},
		all: function (selector) {
			$(selector).show();
		},
		fadeIn: function (object, fn) {
			selector = (object.el) ? object.el : "";
			speed = (object.dur) ? object.dur : 500;
			callback = (fn) ? fn : function() {};
			
			$(selector).fadeIn(speed, callback());
		},
		fadeOut: function (object, fn) {
			selector = (object.el) ? object.el : "";
			speed = (object.dur) ? object.dur : 500;
			callback = (fn) ? fn : function() {};
			
			$(selector).fadeOut(speed, callback());
		}
	}
	
	/* !-- Affect CSS -- */
	this.css = {
		bgPos: function(selector, string) {
			$(selector).css({
				backgroundPosition: string
			});
		}
	}
	
	/* !-- Animations -- */
	this.animate = {
		bg: function(object, fn) {
			selector = (object.el) ? object.el : "";
			bgPos = (object.bg) ? object.bg : "";
			dur = (object.dur) ? object.dur : "";
			
			$(selector).stop().animate({
    			backgroundPosition: bgPos
    		}, {
    			duration: dur,
    			complete: (fn) ? fn : function() {}
    		});
		},
		up: function(object, fn) {
			selector = (object.el) ? object.el : "";
			ease = (object.ea) ? object.ea : "def";
			dur = (object.dur) ? object.dur : "";
			
			$(selector).slideUp({
    			"duration": dur,
    			"easing": ease,
    			"complete": (fn) ? fn : function() {}
    		});
		},
		down: function(object, fn) {
			selector = (object.el) ? object.el : "";
			ease = (object.ea) ? object.ea : "def";
			dur = (object.dur) ? object.dur : "";
			
			$(selector).slideDown({
    			"duration": dur,
    			"easing": ease,
    			"complete": (fn) ? fn : function() {}
    		});
		}
	}
}