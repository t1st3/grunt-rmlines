/* global describe,it */

'use strict';

var strictEqual = require('assert').strictEqual;
var grunt = require('grunt');

var tmp = 'tmp/';
var fixtures = 'fixtures/';

describe('grunt-rmlines', function () {
	var files = [
		''
	];

	files.forEach(function (file) {
		it(file + 'initial.txt', function (done) {
			var actual = grunt.file.read(tmp + file + 'initial.txt');
			var expected = grunt.file.read(fixtures + file + 'expected.txt');
			strictEqual(actual, expected);
			done();
		});
	});
});
