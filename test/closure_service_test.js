'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.closure_service = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  default_options: function(test) {
    var actual = grunt.file.read('dist/output_with_default_options.js');
    var expected = grunt.file.read('test/expected/output_with_default_options.js');
    test.equal(actual, expected, 'Should perform simple optimizations on the input.');

    test.done();
  },

  simple_options: function(test) {
    var actual = grunt.file.read('dist/output_with_simple_options.js');
    var expected = grunt.file.read('test/expected/output_with_simple_options.js');
    test.equal(actual, expected, 'Should just remove whitespace from the input.');

    test.done();
  },

  advanced_options: function(test) {
    var actual = grunt.file.read('dist/output_with_advanced_options.js');
    var expected = grunt.file.read('test/expected/output_with_advanced_options.js');
    test.equal(actual, expected, 'Should perform advanced optimizations on the input.');

    test.done();
  }
};
