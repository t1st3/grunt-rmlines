/* global describe,it */

'use strict';

const strictEqual = require('assert').strictEqual;
const grunt = require('grunt');

const tmp = 'tmp/';
const fixtures = 'fixtures/';

describe('grunt-rmlines', () => {
	const files = [
		''
	];

	files.forEach(file => {
		it(file + 'initial.txt', done => {
			const actual = grunt.file.read(tmp + file + 'initial.txt');
			const expected = grunt.file.read(fixtures + file + 'expected.txt');
			strictEqual(actual, expected);
			done();
		});
	});
});
