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
      dev: {
        src: ['templater.js'],
        options: {
          config: '.eslintrc'
        }
      },
      test: {
        src: ['tests/*.js'],
        options: {
          config: 'tests/.eslintrc'
        }
      }
    },
    watch: {
      dev: {
        files: ['templater.js'],
        tasks: ['development']
      },
      testing: {
        files: ['tests/*.js'],
        tasks: ['development']
      }
    }
  });

  grunt.registerTask('development', [
    'eslint:test',
    'eslint:dev',
    'simplemocha'
  ]);

  grunt.registerTask('default', [
    'eslint: dev',
    'simplemocha'
  ]);
};
