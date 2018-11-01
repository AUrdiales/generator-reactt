const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');


describe('Tests for the scaffold with css', () => {
	afterEach(() => {
		rimraf.sync(path.join(__dirname, 'tmp'));
	});
	it('generates a proyect with css without a folder', () => {
		return helpers.run(path.join(__dirname, '../generators/app'))
			.withArguments(['--skip-install'])
			.withPrompts({ folder: false, styles: 'css' })
			.inDir(path.join(__dirname, 'tmp'))
			.then(() => {

				return assert.file('src/containers/HelloWorld/HelloWorld.css');
			});
	});
	it('generates a proyect with css with a folder', () => {
		return helpers.run(path.join(__dirname, '../generators/app'))
			.withArguments(['--skip-install'])
			.withPrompts({ folder: true, styles: 'css' })
			.inDir(path.join(__dirname, 'tmp'))
			.then(() => {

				return assert.file('src/containers/HelloWorld/HelloWorld.css');
			});
	});
});

