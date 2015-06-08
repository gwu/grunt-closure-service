// This is a JS file used for testing the input to the grunt-closure-service task.
// It will be compiled using the google closure compiler service.

'use strict';

goog.provide('test');

console.log('This is a test.');

test.myFunction = function(input) {
  console.log('In myFunction');
  console.log('Received: ' + input);
}
goog.exportSymbol('test.myFunction', test.myFunction);

var myVar = 'my variable';
test.myFunction(myVar);
