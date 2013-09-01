module.exports = function(grunt) {
    grunt.config.init({
        version: grunt.option('release-version'),
        build: grunt.option('release-build'),
 
    });
    grunt.loadNpmTasks('grunt-yui-contrib');
    grunt.registerTask('default' ['boot']);
};