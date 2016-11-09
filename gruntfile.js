module.exports = function (grunt) {
	grunt.initConfig({
		'rmlines': {
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

	grunt.loadTasks('tasks');

	grunt.registerTask('default', [
		'rmlines'
	]);
};
