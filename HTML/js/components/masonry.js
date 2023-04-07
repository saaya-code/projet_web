
var Masonry = function() {
    "use strict";

 
    var handleMasonryGrid = function() {
        var $container = $('.masonry-grid');

       
        $container.imagesLoaded( function() {
            $container.masonry({
                itemSelector: '.masonry-grid-item', 
                columnWidth: '.masonry-grid-sizer',
                percentPosition: true
            });
        });

        $.fn.masonryImagesReveal = function( $items ) {
		  	var msnry = this.data('masonry');
		  	var itemSelector = msnry.options.itemSelector;
		  	// par défaut mkhbin 
		  	$items.hide();
		  	// add to container
		  	this.append( $items );
		  	$items.imagesLoaded().progress( function( imgLoad, image ) {

			    var $item = $( image.img ).parents( itemSelector );
			    $item.show();
	
			    msnry.appended( $item );
		  	});
		  
		  	return this;
		};
    }

    return {
        init: function() {
            handleMasonryGrid(); // initial setup for masonry grid
        }
    }
}();

$(document).ready(function() {
    Masonry.init();
});
