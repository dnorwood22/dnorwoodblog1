module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var
        /**
         * Less-files for compilation
         * @type {string[]}
         */
        LESS_FOR_BUILD = [
            'static/styles/*.less',
            'static/styles/*/*.less',
            'documentation/styles/*.less'
        ],
        JS_FOR_BUILD = [
            'static/scripts/*.js',
            'static/vendor/vide/dist/fixed_jquery.vide.js'
        ];

    grunt.initConfig({
        less: {
            build: {
                options: {
                    cleancss: false,
                    compress: false,
                    relativeUrls: false
                },
                files: getStylesMapping(LESS_FOR_BUILD)
            }
        },

        uglify: {
            build: {
                options: {
                    compress: true,
                    preserveComments: 'some'
                },
                files: getJavascriptsMapping(JS_FOR_BUILD)
            }
        },
    });

    grunt.registerTask('default', ['less', 'uglify']);

    function getStylesMapping(patterns) {
        var result = {};
        if (!grunt.util._.isArray(patterns)) {
            patterns = [patterns];
        }
        grunt.util._.each(patterns, function (pattern) {
            grunt.file.glob.sync(pattern).forEach(function (option) {
                var css = option.replace('.less', '.css');
                result[css] = option;
            });
        });
        return result;
    }

    function getJavascriptsMapping(patterns) {
        var result = {};
        if (!grunt.util._.isArray(patterns)) {
            patterns = [patterns];
        }
        grunt.util._.each(patterns, function (pattern) {
            grunt.file.glob.sync(pattern).forEach(function (option) {
                if (option.substr(option.length - 7) != '.min.js') {
                    var js = option.replace('.js', '.min.js');
                    result[js] = option;
                }
            });
        });
        return result;
    }
};
