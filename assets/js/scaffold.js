$(document).ready(function ($) {

	console.log( 'Hey!' );

	var body = $( 'body' );
	var panel = $( '#panel' );
	var screen = $( '#screen' );

	// Toggle side panel
	$( '.toggle-panel' ).click( function(e) {

		e.stopPropagation();
		e.preventDefault();

		var target = $( e.target );

		if ( target.data( 'target' ) ) {
			toggle_panel( target.data( 'target' ) );
		} else {
			toggle_panel();
		}
	});

	// Close side panel when #screen is clicked
	screen.click( function(e) {

		e.stopPropagation();
		e.preventDefault();

		toggle_panel();
	});

	// Close side panel on escape
	$( document ).keyup( function(e) {
		if ( e.which == '27' && body.hasClass( 'panel-is-visible' ) ) {
			toggle_panel();
		}
	})

	function toggle_panel( subpanel ) {

		if ( body.hasClass( 'panel-is-visible' ) ) {
			body.removeClass( 'panel-is-visible' );
			panel.find( '.section' ).removeClass( 'current' ).first().addClass( 'current' );
		} else {
			body.addClass( 'panel-is-visible' );

			if ( subpanel ) {
				panel.find( '.section' ).removeClass( 'current' ).filter( '#' + subpanel ).addClass( 'current' );
			}
		}
	}

	// Open side panel section
	panel.find( '.head' ).click( function(e) {

		var target = $( e.target );

		panel.find( '.section' ).removeClass( 'current' );
		target.parents( '.section' ).addClass( 'current' );

	})

});
