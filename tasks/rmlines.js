'use strict';

const path = require('path');
const fs = require('fs');
const concatStream = require('concat-stream');
const rmlines = require('rmlines');

module.exports = function (grunt) {
	return grunt.registerMultiTask('rmlines', 'Removes lines', function () {
		const done = this.async();
		const self = this;
		let count = 0;
		this.files.forEach(file => {
			if (grunt.file.exists(path.join(file.cwd, file.src[0]))) {
				const stream = fs.createReadStream(path.join(file.cwd, file.src[0])).pipe(rmlines(self.data.lines, self.data.options));
				stream.pipe(concatStream(data => {
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
