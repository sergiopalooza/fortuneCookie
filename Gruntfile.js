module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    dist: {
	      src: ['js/main.js', 'js/test.js'],
	      dest: 'build/scripts.js',
	    },
	  },
	  watch: {
	  scripts: {
	    files: ['js/**/*.js'],
	    tasks: ['concat'],
	  },
	},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};