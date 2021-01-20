(function( $ ) {
	"use strict";
	$( '.bt_bb_interactive_image_item' ).click(function() {
		
			$( '.bt_bb_interactive_image_item' ).each(function() {
				$( this ).removeClass( 'on' );
			});

			if ( !$(this).closest( '.bt_bb_interactive_image_item' ).hasClass('on') ) {
				$( this ).closest( '.bt_bb_interactive_image' ).find( '.bt_bb_interactive_image_item.on' ).removeClass( 'on' );
				$( this ).closest( '.bt_bb_interactive_image_item' ).addClass( 'on' );
			
			} else {
				// $( this ).parent().removeClass( 'on' );
				$( this ).closest( '.bt_bb_interactive_image_item' ).removeClass( 'on' );
			
			}

			var item	= $( this );
			var item_id = item.data( 'id' );
			$( '.bt_bb_interactive_image_item_dot' ).each(function() {
					var item_dot	= $( this );
					var item_dot_id = item_dot.data( 'id' );
					$( this ).removeClass( 'bt_bb_interactive_image_item_dot_on' );
					
					if ( item_id == item_dot_id )
					{
						$( this ).addClass( 'bt_bb_interactive_image_item_dot_on' );
					}
			});

			if ( $(window).width() < 768) {
				var jump_element = $( '.bt_bb_interactive_image_item_dot' ).andSelf().find('[data-id="' + item_id + '"]'); 
				var new_position = $(jump_element).offset().top;
				$('html, body').stop().animate({ scrollTop: new_position - 150 }, 500);
			}
	});

	

	$( '.bt_bb_interactive_image' ).each(function() {		
		if ( $( this ).data( 'closed' ) != 'closed' ) {
			//$( this ).find( '.bt_bb_interactive_image_item' ).first().click();
			$( this ).find( '.bt_bb_interactive_image_item' ).first().addClass( 'on' );
		}
		bt_bb_inner_image_dots( $( this ) );
	});


	$( document ).ready(function() {
			$( '.bt_bb_interactive_image_item_dot' ).on( "click", function() {
						var item_dot	= $( this );
						var item_dot_id = item_dot.data( 'id' );

						$( '.bt_bb_interactive_image_item_dot' ).each(function() {
								$( this ).removeClass( 'bt_bb_interactive_image_item_dot_on' );
						});
						
						$( '.bt_bb_interactive_image_item' ).each(function() {						
								$( this ).removeClass( 'on' );
								var item_id = $( this ).data( 'id' );
								if ( item_id == item_dot_id )
								{
									$( this ).addClass( 'on' );
									item_dot.addClass( 'bt_bb_interactive_image_item_dot_on' );
								}	
									
						});

						if ( $(window).width() < 768) {
								var jump_element = $( '.bt_bb_interactive_image_item[data-id="' + item_dot_id + '"]' ); 							
								var new_position = $(jump_element).offset().top;
								$('html, body').animate(
									{ scrollTop: parseInt(new_position)-80 }, 500
								
								);							
						}
			});

			$( '.bt_bb_interactive_image_item_dot' ).each(function() {
				var item	= $( this );
				var item_title = item.data( 'title' );
				$(this).append('<span class="bt_bb_interactive_image_item_dot_tooltip">' + item_title + '</span>')
			});
			
	});

	

	function bt_bb_inner_image_dots( image ){		
			var closed = image.data( 'closed' );
			var i = 1;	
				
			image.find( '.bt_bb_interactive_image_item' ).each(function() {	
							var item			= $( this );
							var img_item_x		= item.data( 'x' );
							var img_item_y		= item.data( 'y' );
							var img_item_number = item.data( 'number' );
							var img_item_id		= item.data( 'id' );
							var img_item_title	= item.data( 'title' );
							
							if ( img_item_x != '' && img_item_y != '' )
							{
									var size = '30px';
									var klasa = ( i == 1 && closed != 'closed' ) ? ' bt_bb_interactive_image_item_dot_on' : '';									
									image.find(".bt_bb_image span").append(
											   $('<div class="bt_bb_interactive_image_item_dot' + klasa + '" data-id="' + img_item_id + '"  data-title="' + img_item_title + '" >' + img_item_number + '</div>').css({
													position: 'absolute',
													top: img_item_x + '%',
													left:  img_item_y + '%',
													width: size,
													height: size
												})
									);
													
							}
							i++				
			});
	}

})( jQuery );


        
