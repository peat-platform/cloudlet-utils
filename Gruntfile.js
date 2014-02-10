'use strict';

module.exports = function (grunt) {

   var tests       = 'test/**/*_test.js';
   var lib         = 'lib/**/*.js';

   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
         build:['build']
      },
      nodeunit: {
         files: ['test/**/*_test.js']
      },
      watch : {
         files : [ lib, tests ],
         tasks : 'default'
      },
      plato: {
         options: {
            title: 'OPENi Logger',
            jshint: grunt.file.readJSON('.jshintrc')
         },
         metrics: {
            files: {
               'build/metrics': [ lib ]
            }
         }
      },
      instrument : {
         files : [lib],
         options : {
            lazy : true,
            excludes : tests,
            basePath : 'build/instrument/',
            flatten : false
         }
      },
      reloadTasks : {
         rootPath : 'build/instrument/lib'
      },
      storeCoverage : {
         options : {
            dir : 'build/reports/'
         }
      },
      makeReport : {
         src : 'build/reports/**/*.json',
         options : {
            reporters : {
               'lcov'     :{dir:'build/reports/'},
               'cobertura':{dir:'build/reports/'}
            },
            print : 'detail'

         }
      },
      coverage: {
         options: {
            thresholds: {
               'statements': 90,
               'branches'  : 90,
               'lines'     : 90,
               'functions' : 90
            },
            dir: 'reports',
            root: 'build/'
         }
      },
      jshint: {
         all: [lib],
         options: grunt.file.readJSON('.jshintrc')
      },
   });

   // These plugins provide necessary tasks.
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-nodeunit');
   grunt.loadNpmTasks('grunt-testem');
   grunt.loadNpmTasks('grunt-qunit-cov');
   grunt.loadNpmTasks('grunt-plato');
   grunt.loadNpmTasks('grunt-node-tap');
   grunt.loadNpmTasks('grunt-istanbul');
   grunt.loadNpmTasks('grunt-istanbul-coverage');
   grunt.loadNpmTasks('grunt-contrib-nodeunit');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-config');


   grunt.registerTask('test',     ['nodeunit']);
   grunt.registerTask('cover',    ['clean:build', 'instrument', 'nodeunit', 'storeCoverage', 'makeReport']);
   grunt.registerTask('default',  ['jshint',     'nodeunit' ]);
   grunt.registerTask('jenkins',  ['jshint',      'cover',      'coverage',    'plato']);
};
