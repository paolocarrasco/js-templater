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
    },
    eslint: {
      target: ['templater.js'],
      options: {
        configFile: '.eslintrc'
      }
    },
    watch: {
      scripts: {
        files: ['templater.js'],
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', [
    'eslint',
    'simplemocha'
  ]);
};
