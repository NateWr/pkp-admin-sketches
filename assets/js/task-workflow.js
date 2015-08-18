$(document).ready(function ($) {

	console.log( 'Hey! Welcome to the task workflow!' );

	var body = $( 'body' );
	var tasks = $( '.task-list .tasks > li' );
	var modals = $( '.pkp_modal' );

	tasks.click( function() {
		task_open_task( $(this).data('task') );
	});

	modals.find( '.close' ).click( task_close_task );

	modals.click( function(e) {
		if ( $( e.target ).is( modals ) ) {
			task_close_task();
		}
	})

	body.keyup( function(e) {
		if ( e.which == 27 ) {
			task_close_task();
		}
	});

	function task_open_task( task ) {
		var modal = $('#' + task );
		if ( !modal.length ) {
			alert( 'No example available yet.' );
		}

		modal.addClass('is_visible');
		body.addClass('modal_is_visible');
	}

	function task_close_task() {
		$('.pkp_modal').removeClass('is_visible');
		body.removeClass('is_visible');
	}

});
