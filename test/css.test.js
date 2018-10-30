const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');


describe('Tests for the scaffold with css', () => {
	let step = 0;
	beforeEach(() => {
		switch (step) {
			case 0:
				return helpers.run(path.join(__dirname, '../generators/app'))
					.withArguments(['--skip-install'])
					.withPrompts({ folder: false, styles: 'css' })
					.inDir(path.join(__dirname, 'tmp'));
			default:
				true;
		}

	});
	afterEach(() => {
		rimraf.sync(path.join(__dirname, 'tmp'));
		step++;
	});
	it('generates a proyect with css', () => {
		return assert.file('src/containers/HelloWorld/HelloWorld.css');

	});
});
