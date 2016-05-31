Demonstrates an NPM3 bug.

Clone the repository and then run `npm cache clean && npm install`. It will run the test script in its prepublish step, which will
throw an exception if the `async` dependency is missing from a module that requires it.
