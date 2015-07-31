module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    simplemocha: {
      options: {
        globals: ['expect'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: { src: ['tests/*.test.js'] }
    }
  });

  grunt.registerTask('default', [
    'simplemocha'
  ]);
};
