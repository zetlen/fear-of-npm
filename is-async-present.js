var rootAsyncVersion;
try {
	rootAsyncVersion = require('async/package.json').version;
} catch(e) {
	throw Error("No `async` version found at root!")
}
console.log('`async` version in node_modules is ' + rootAsyncVersion);
var requiredAsyncVersion = require('@jzetlen/depends-on-async1/package.json').dependencies.async;
if (require('@jzetlen/depends-on-async1')()) {
	console.log('Confirmed that async@' + requiredAsyncVersion + ' was available to @jzetlen/depends-on-async1');
} else {
	throw Error(
		'Expected to find async@' + requiredAsyncVersion +
		' in node_modules/@jzetlen/depends-on-async1/node_modules/async, but it is not there!'
	);
}
