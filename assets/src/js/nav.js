/**
 * Primary navigation panel
 */

var pkp = pkp || {};

$(document).ready(function ($) {

	pkp.nav = pkp.nav || {};

	/**
	 * Initialize the navigation component
	 *
	 * @since 3.0
	 */
	pkp.nav.init = function() {

		// Cache references
		this.cache = pkp.nav.cache || {};
		this.cache.el = $( '#nav' );
		this.cache.submenus = this.cache.el.find( '.submenu' );
		this.cache.submenu_links = this.cache.submenus.find( 'a' );

		// Remove focus class from submenus
		this.cache.submenu_links.blur( function(e) {

			var parent = pkp.nav.getParent( $( e.target ) );

			if ( !parent.length ) {
				return;
			}

			parent.removeClass( 'in-focus' );
		});

		// Add focus class to submenus
		this.cache.submenu_links.focus( function(e) {

			var parent = pkp.nav.getParent( $( e.target ) );

			if ( !parent.length ) {
				return;
			}

			parent.addClass( 'in-focus' );
		});

		// Re-position submenu offset positions and refresh when the window
		// is resized
		this.setSubmenusPosition();
		$( window ).resize( _.throttle( this.setSubmenusPosition, 1000 ) );

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

	/**
	 * Re-position submenus so that they don't flow below the
	 * height of the navbar
	 *
	 * This function is throttled so can not refer to `this` internally.
	 * @since 3.0
	 */
	pkp.nav.setSubmenusPosition = function() {

		// Reset max height cache
		pkp.nav.cache.el_outer_height = pkp.nav.cache.el.outerHeight();

		pkp.nav.cache.submenus.each( function() {

			var offset = $(this).offset();
			var reach = offset.top + $(this).outerHeight();
			var max = pkp.nav.cache.el_outer_height;

			if ( max < reach ) {
				var top = max - reach;
				$(this).css( 'top', top + 'px' );
			}
		});
	};

	// Initialize the component
	pkp.nav.init();

});
