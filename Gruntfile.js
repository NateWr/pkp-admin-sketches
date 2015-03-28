'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Load grunt project configuration
		pkg: grunt.file.readJSON('package.json'),

		// Configure less CSS compiler
		less: {
			build: {
				options: {
					compress: true,
					cleancss: true,
					ieCompat: true
				},
				files: {
					'assets/css/base.css': 'assets/src/less/base.less'
				}
			}
		},

		// Watch for changes on some files and auto-compile them
		watch: {
			less: {
				files: ['assets/src/less/*.less'],
				tasks: ['less']
			}
		}

	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};
