module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app',
                    open: true,
                    livereload: true
                }
            }
        },

        watch: {
            js: {
                files: ['Gruntfile.js', 'app/js/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'app/js/**/*.js']
        }
    });

    // Default task(s).
    grunt.registerTask('serve', ['jshint', 'connect:server', 'watch']);

};