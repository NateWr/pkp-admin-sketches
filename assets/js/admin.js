/**
 * Primary navigation panel
 */

var pkp = pkp || {};

$(document).ready(function ($) {

	pkp.nav = pkp.nav || {};
	pkp.nav.cache = {};

	// Cache references
	pkp.nav.cache.el = $( '#nav' );
	pkp.nav.cache.submenu_links = pkp.nav.cache.el.find( '.submenu a' );

	pkp.nav.init = function() {

		// Remove focus class from submenus
		pkp.nav.cache.submenu_links.blur( function(e) {

			var parent = pkp.nav.getParent( $( e.target ) );

			if ( !parent.length ) {
				return;
			}

			parent.removeClass( 'in-focus' );
		});

		// Add focus class to submenus
		pkp.nav.cache.submenu_links.focus( function(e) {

			var parent = pkp.nav.getParent( $( e.target ) );

			if ( !parent.length ) {
				return;
			}

			parent.addClass( 'in-focus' );
		});

	};

	/**
	 * Locate the parent nav item containing a jQuery object
	 *
	 * Searches for a parent element with the `parent` class
	 * and returns that element
	 *
	 * @since 3.0
	 */
	pkp.nav.getParent = function( el ) {
		return el.parents( '.parent' );
	};

	// Initialize the component
	pkp.nav.init();

});
