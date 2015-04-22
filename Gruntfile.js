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

		// Configure JSHint
		jshint: {
			all: [
				'assets/src/js/nav.js',
				'!assets/src/js/lib/underscore.js',
			]
		},

		// Concatenate scripts
		concat: {
			build: {
				files: {
					'assets/js/admin.js': [
						'assets/src/js/lib/underscore.js',
						'assets/src/js/nav.js',
					]
				}
			},
		},

		// Watch for changes on some files and auto-compile them
		watch: {
			less: {
				files: ['assets/src/less/**/*'],
				tasks: ['less']
			},
			js: {
				files: ['assets/src/js/**/*.js'],
				tasks: ['jshint', 'concat']
			}
		}

	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};
