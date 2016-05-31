var dependsOn = {
	'0': 'grunt-legacy-util',
	'1': 'bundalo'
};
var rootAsyncVersion;
try {
	rootAsyncVersion = require('async/package.json').version;
} catch(e) {
	throw Error("No `async` version found at root!")
}
console.log('`async` version in node_modules is ' + rootAsyncVersion)
var dependentAsyncMajor = rootAsyncVersion.charAt(0) === '1' ? '0' : '1';
var dependentAsyncVersion;
try {
	dependentAsyncVersion = require(
		dependsOn[dependentAsyncMajor] + '/node_modules/async/package.json'
	).version;
} catch(e) {
	throw Error(
		'Expected to find async@' + dependentAsyncMajor + ' in node_modules/' +
		dependsOn[dependentAsyncMajor] + '/async, but it is not there!'
	);
}
console.log(
	'Found async@' + dependentAsyncVersion + ' in node_modules/' + 
	dependsOn[dependentAsyncMajor] + '/node_modules'
);
