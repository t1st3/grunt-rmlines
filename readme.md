# grunt-rmlines [![Build Status Travis](https://travis-ci.org/t1st3/grunt-rmlines.svg?branch=master)](https://travis-ci.org/t1st3/grunt-rmlines) [![codecov](https://codecov.io/gh/t1st3/grunt-rmlines/badge.svg?branch=master)](https://codecov.io/gh/t1st3/grunt-rmlines?branch=master)

[![Greenkeeper badge](https://badges.greenkeeper.io/t1st3/grunt-rmlines.svg)](https://greenkeeper.io/)

> A line-remover plugin for [`Grunt`](http://gruntjs.com/)

Thin wrapper around [`rmlines`](https://github.com/t1st3/rmlines) to make it a Grunt plugin.

Also available as a [gulp plugin](https://github.com/t1st3/gulp-rmlines).


## Install

```
$ npm install --save grunt-rmlines
```


## Usage

```js
'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		rmlines: {
			dist: {
				files: [{
					expand: false,
					cwd: 'fixtures/',
					src: '*initial.txt',
					dest: 'tmp/'
				}],
				lines: [2, 4],
				options: {
					maxLength: 30
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-rmlines');

	grunt.registerTask('default', [
		'rmlines'
	]);
};
```


## Options

See [`rmlines`'s options](https://github.com/t1st3/rmlines#options), which are all supported.


## Related

* [rmlines](https://github.com/t1st3/rmlines) | API for rmlines
* [rmlines-cli](https://github.com/t1st3/rmlines-cli) | CLI for rmlines
* [gulp-rmlines](https://github.com/t1st3/gulp-rmlines) | rmlines as a [`gulp`](http://gulpjs.com/) plugin


## License

MIT © [t1st3](https://t1st3.com)
