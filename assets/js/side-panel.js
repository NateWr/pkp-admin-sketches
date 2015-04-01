$(document).ready(function ($) {

	console.log( 'Hey! Welcome to the side panel!' );

	var body = $( 'body' );
	var panel = $( '#side-panel' );
	var screen = $( '#screen-side-panel' );

	// Toggle side panel
	$( '.toggle-side-panel' ).click( function(e) {

		e.stopPropagation();
		e.preventDefault();

		var target = $( e.target );

		if ( target.data( 'target' ) ) {
			toggle_side_panel( target.data( 'target' ) );
		} else {
			toggle_side_panel();
		}
	});

	// Close side panel when #screen is clicked
	screen.click( function(e) {

		e.stopPropagation();
		e.preventDefault();

		toggle_side_panel();
	});

	// Close side panel on escape
	$( document ).keyup( function(e) {
		if ( e.which == '27' && body.hasClass( 'side-panel-is-visible' ) && !body.hasClass( 'panel-is-visible' ) ) {
			toggle_side_panel();
		}
	})

	function toggle_side_panel( subpanel ) {

		if ( body.hasClass( 'side-panel-is-visible' ) ) {
			body.removeClass( 'side-panel-is-visible' );
		} else {
			body.addClass( 'side-panel-is-visible' );
		}
	}

});
