(function ( $ ) {

	$.fn.fittext = function(options){

		var opts = $.extend( {}, $.fn.fittext.defaults, options );
		
		$.fn.fittext.defaults = {
			storeFont: "no"
		};
		
		$(this).each(function(){
			var divWidth, textWidth, childSpan;
			divWidth = $(this).width();
			childSpan = $(this).find('span:first');
			textWidth = childSpan.width();
			resizeFont(textWidth,divWidth,childSpan);
			
			function resizeFont(textWidth,divWidth,childSpan){
				if (textWidth>divWidth && parseInt(childSpan.css('font-size'))>0){
					decreaseFont(divWidth,childSpan);
				}else if (textWidth<divWidth && parseInt(childSpan.css('font-size'))<38){
					increaseFont(divWidth,childSpan);
				}
			};
			
			function increaseFont(divWidth,childSpan){
				var newFontSize;
				while (parseInt(childSpan.width())<divWidth){
					newFontSize = parseInt(childSpan.css('font-size'))+1;
					childSpan.css({ 'font-size':  newFontSize});
					if (parseInt(childSpan.width())>divWidth || parseInt(childSpan.css('font-size'))>38){
						decreaseFont(divWidth,childSpan);
						return;
					}
				}
				storeFont(newFontSize);			
			};
			
			function decreaseFont(divWidth,childSpan){
				var newFontSize;
				while (parseInt(childSpan.width())>divWidth){
					newFontSize = parseInt(childSpan.css('font-size'))-1;
					childSpan.css({ 'font-size': newFontSize });
				}
				storeFont(newFontSize);
			};
			
			function storeFont(newFontSize){
				if (opts.storeFont === "yes"){
					localStorage.setItem("fontSize", newFontSize);
				}
			};
		});
		return $(this);
	};
}( jQuery ));




