var NwBuilder = require('nw-builder');

var nw = new NwBuilder({
	files: 'src/*',
	platforms: ['osx64'],
	version: 'v0.11.6'
});
nw.on('log', console.log);
nw.build().then(function () {
	console.log('all done!');
}).catch(function (error) {
	console.error(error);
});

