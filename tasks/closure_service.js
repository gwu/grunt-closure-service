/*
 * grunt-closure-service
 * https://github.com/gwu/grunt-closure-service
 *
 * Copyright (c) 2015 Garrett Wu
 * Licensed under the MIT license.
 */

'use strict';

var ccs = require('closure-compiler-service');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('closure_service', 'Compile JS using the google-closure-service.', function() {
    // Tell grunt that we're not done when this function
    // returns. Rather, when we call done().
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      output_info: ['compiled_code', 'errors', 'warnings'],
      compilation_level: 'SIMPLE_OPTIMIZATIONS'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join();

      // Compile the source.
      ccs.compile(src, options, function(errs, warns, code) {
        // Check for errors.
        if (errs) {
          grunt.log.error(JSON.stringify(errs, null, 2));
        }

        // Check for warnings.
        if (warns) {
          grunt.log.warn(JSON.stringify(warns, null, 2));
        }

        if (errs || warns) {
          // Fail.
          done(false);
        }

        // Write the output.
        grunt.file.write(f.dest, code);

        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');

        // Tell grunt that we're done with the task.
        done();
      });
    });
  });

};
