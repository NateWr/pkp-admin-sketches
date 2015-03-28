$(document).ready(function ($) {

	console.log( 'Hey!' );

	var body = $( 'body' );
	var panel = $( '#panel' );

	// Toggle side panel
	$( '.toggle-panel' ).click( function(e) {

		e.stopPropagation();
		e.preventDefault();

		if ( body.hasClass( 'panel-is-visible' ) ) {
			body.removeClass( 'panel-is-visible' );
		} else {
			body.addClass( 'panel-is-visible' );
		}
	});

});
