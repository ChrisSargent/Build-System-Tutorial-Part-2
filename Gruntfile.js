module.exports = function (grunt) {

    // Grunt project configuration.
    grunt.initConfig({
        sass: {                                 // options for the sass compiler
            options: {
                compress: false,                // don't minify the code
                sourcemap: 'none'               // don't create source maps
            },
            dist: {
                src: 'sass/base.scss',          // input sass file
                dest: 'build/css/styles-compiled.css'   // output css file
            }
        },

        concat: {                               // options for the concat function
            js: {
                src: ['js/**/*.js'],            // input - any file / folder in the js folder
                dest: 'build/js/scripts.js',    // output js file
            }
        },
        
        cssnext: {
            dist: {
                src: 'build/css/styles-compiled.css',
                dest: 'build/css/styles-prefixed.css'
            }
        },

        watch: {                                // options for the watch function
            js: {                               // a 'sub-function' I called js that only watches my js folder
                files: ['js/**/*.js'],          // 'watch' this folder
                tasks: ['concat:js']            // if there are changes, run this task
            },
            css: {                              // a 'sub-function' I called css that only watches my csss folder
                files: ['sass/**/*.scss'],      // 'watch' this folder
                tasks: ['sass', 'cssnext']      // if there are changes, run these tasks
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-cssnext');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'concat', 'cssnext', 'watch']); // setup the default Grunt tasks that are run when we run only 'grunt' in the terminal
};