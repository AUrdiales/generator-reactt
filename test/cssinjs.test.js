const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const rimraf = require('rimraf');


describe('Tests for the scaffold with css in js', () => {
	afterEach(() => {
		rimraf.sync(path.join(__dirname, 'tmp'));
	});
	it('generates a proyect with css in js without a folder', () => {
		return helpers.run(path.join(__dirname, '../generators/app'))
			.withArguments(['--skip-install'])
			.withPrompts({ folder: false, styles: 'css-in-js' })
			.inDir(path.join(__dirname, 'tmp'))
			.then(() => {

				return assert.file('src/containers/HelloWorld/HelloWorld.styles.ts');
			});
	});
	it('generates a proyect with css in js in a folder', () => {
		return helpers.run(path.join(__dirname, '../generators/app'))
			.withArguments(['--skip-install'])
			.withPrompts({ folder: true, styles: 'css-in-js' })
			.inDir(path.join(__dirname, 'tmp'))
			.then(() => {

				return assert.file('src/containers/HelloWorld/HelloWorld.styles.ts');
			});
	});
});

