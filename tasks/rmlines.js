'use strict';

var path = require('path');
var fs = require('fs');
var concatStream = require('concat-stream');
var rmlines = require('rmlines');

module.exports = function (grunt) {
	return grunt.registerMultiTask('rmlines', 'Removes lines', function () {
		var done = this.async();
		var self = this;
		var count = 0;
		this.files.forEach(function (file) {
			if (grunt.file.exists(path.join(file.cwd, file.src[0]))) {
				var stream = fs.createReadStream(path.join(file.cwd, file.src[0])).pipe(rmlines(self.data.lines, self.data.options));
				stream.pipe(concatStream(function (data) {
					grunt.file.write(path.join(file.dest, file.src[0]), data);
					grunt.log.writeln('File "' + path.join(file.dest, file.src[0]) + '" created.');
					count += 1;
					if (count === self.files.length) {
						done();
					}
				}));
			}
		});
	});
};
