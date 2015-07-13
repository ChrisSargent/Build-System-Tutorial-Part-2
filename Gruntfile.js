module.exports = function (grunt) {

    // Grunt project configuration.
    grunt.initConfig({
        sass: {                                 // options for the sass compiler
            options: {
                style: 'compressed',            // minify the code
                sourcemap: 'none'               // don't create source maps
            },
            dist: {
                src: 'sass/base.scss',          // input sass file
                dest: 'build/css/styles-compiled.css'   // output css file
            }
        },

        cssnext: {                              // options for cssnext function
            dist: {
                src: 'build/css/styles-compiled.css', // input css file
                dest: 'build/css/styles.css'    // output css file
            }
        },
    
        concat: {                               // options for the concat function
            js: {
                src: ['js/**/*.js'],            // input - any file / folder in the js folder
                dest: 'build/js/scripts.js'     // output js file
            }
        },
        
        jshint: {                               // options for the jshint function
            options: {
            //  strict: true                    // switch this line on for more strict linting
            },
            beforeconcat: ['Gruntfile.js', 'js/**/*.js'],   // input files before concatenation
            afterconcat: ['build/js/scripts.js']            // input files after concatenation
        },
        
        uglify: {                               // options for the uglify function
            dist: {
                src: 'build/js/scripts.js',     // the input js file
                dest: 'build/js/scripts.min.js' // the output, minified js file
            }
        },
        
        watch: {                                // options for the watch function
            js: {                               // a 'sub-function' I called js that only watches my js folder
                files: ['js/**/*.js'],          // 'watch' this folder
                tasks: ['concat:js', 'jshint', 'uglify']  // if there are changes, run these tasks
            },
            css: {                              // a 'sub-function' I called css that only watches my csss folder
                files: ['sass/**/*.scss'],      // 'watch' this folder
                tasks: ['sass', 'cssnext']      // if there are changes, run these tasks
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-cssnext');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'cssnext', 'concat', 'jshint', 'uglify', 'watch']); // setup the default Grunt tasks that are run when we run only 'grunt' in the terminal
};