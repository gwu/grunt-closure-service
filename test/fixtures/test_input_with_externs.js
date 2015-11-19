// This is a JS file used for testing the input to the grunt-closure-service task.
// It will be compiled using the google closure compiler service.

'use strict';

var foo = ['foo', 'bar'];

foo.forEach(function(param) {
  externalFunction(param);
});
