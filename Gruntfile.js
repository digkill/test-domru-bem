module.exports = function( grunt ) {

    'use strict';

    grunt.initConfig({

        assemble: {
            options: {
                partials: ['html/partials/**/*.hbs'],
                layoutdir: 'html/layouts/',
                flatten: true,
                layout: ['main.hbs']
            },
            pages: {
                src: ['html/pages/*.hbs'],
                dest: 'html/'
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/**/**.js'
                ],
                dest: 'publish/script.js'
            }
        },


        styletto: {
            dev: {
                src: [ 
                    'blocks/**/**.styl',
                ],
                dest: 'publish/style.css',
            },
         
            publish: {
                src: '<%= styletto.dev.dest %>',
                dest: '<%= styletto.dev.dest %>',
                options: {
                    compress: true,
                    base64: true,
                    errors: 'error'
                }
            }

        },


    });

    grunt.loadNpmTasks( 'grunt-assemble' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-styletto' );
	
    // some default tasks
    grunt.registerTask('build', ['concat', 'styletto:dev', 'styletto:publish', 'assemble']);

};