// This is a JS file used for testing the input to the grunt-closure-service task.
// It will be compiled using the google closure compiler service.

'use strict';

goog.provide('test');

console.log('This is a test.');

function myFunction(input) {
  console.log('In myFunction');
  console.log('Received: ' + input);
}

var myVar = 'my variable';

myFunction(myVar);
