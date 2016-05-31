Demonstrates an NPM3 bug.

Clone the repository and then run `npm cache clean && npm install`. It will run the test script in its prepublish step, which will
throw an exception if the `async` dependency is missing from a module that requires it.

### Explanation

When an NPM package declares `async@^0.8.0` in its `devDependencies`, and one of its hard `dependencies` requires `async@^1.3.0`,
NPM 3 (3.9.5 as of now) will only install `async@0.8.0` at package root. It will fail to install the required `async@^1.3.0` dependency further up the tree.

The `@jzetlen/depends-on-async` package exposes a single function which returns `true` if the version of `async` it has access to is 1 or above.
It determines this by looking for the `async.forEachOf` feature, which was added in 1.0.0.

You can also see for yourself, by examining the node_modules directory and seeing the missing dependency.

This does not appear to be caused by:
 - the `prepublish` script (tried removing it and the problem still exists)
 - the scoped package `@jzetlen/depends-on-async1` and its directory structure (originally saw this with non-scoped packages)

It does not occur in NPM 2.

NPM 3 itself can detect this issue; if you run `npm ls` after `npm install` completes, it will show the missing dependency.

NPM resolves this issue itself if you manually install the dependency with `npm install @jzetlen/depends-on-async1`.
