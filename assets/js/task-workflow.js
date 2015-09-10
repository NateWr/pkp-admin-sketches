$(document).ready(function ($) {

	console.log( 'Hey! Welcome to the task workflow!' );

	var body = $( 'body' );
	var tasks = $( '.task-list .tasks > li' );
	var modals = $( '.pkp_modal' );

	tasks.click( function(e) {
		e.preventDefault();
		task_open_task( $(this).data('task') );
	});

	modals.find( '.close' ).click( task_close_task );

	modals.click( function(e) {
		if ( $( e.target ).is( modals ) ) {
			e.preventDefault();
			task_close_task();
		}
	})

	body.keyup( function(e) {
		if ( e.which == 27 ) {
			task_close_task();
		}
	});

	// Register tab listeners
	modals.find( '.panels .tabs a' ).click( function(e) {
		e.preventDefault();
		var modal = $(this).parents( '.pkp_modal' );
		task_select_tab( modal, $(this).data('target') );
	});

	// Register checklist listeners
	modals.find( '.tasks a' ).click( function(e) {
		e.preventDefault();

		var item = $(this).parents( 'li' );
		item.toggleClass('complete');
	});

	// Open a task and initialize it
	function task_open_task( task ) {
		var modal = $('#' + task );
		if ( !modal.length ) {
			alert( 'No example available yet.' );
			return;
		}

		modal.addClass('is_visible');
		body.addClass('modal_is_visible');
		task_select_tab( modal, 'participants' );
	}

	// Close a task and clear listeners
	function task_close_task() {
		$('.pkp_modal').removeClass('is_visible');
		body.removeClass('modal_is_visible');
	}

	// Select a tab in a task
	function task_select_tab( modal, tab ) {
		var tabs = modal.find('.panels .tabs > li');
		tabs = tabs.add( modal.find('.panel') );

		tabs.removeClass('current');

		tabs.each(function() {
			if ( $(this).hasClass( tab ) ) {
				$(this).addClass('current');
			}
		});
	}

});
