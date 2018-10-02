const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

const utils = require('./utils');
const packages = require('./packages');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.appname = 'new-app';
		this.argument('name', { type: String, required: false });
		this.option('skip-install');
	}

	initializing() {
		this.log(yosay(`Welcome to the React Generator. Please ask a few questions to get up application set up.`));
	}

	async prompting() {
		let questions = utils.questions;
		if (this.options['skip-install']) {
			questions = questions.filter((question) => question.name !== 'manager');
		}
		if (this.options.name) {
			questions = questions.filter((question) => question.name !== 'name');
		}
		this.answers = await this.prompt(questions);
		this._private_setAppName();
	}

	configuring() {
		this._private_copyConfigurationFiles();
	}

	writing() {
		this._private_copySourceFiles();
	}

	conflicts() {
		// handle errors
	}

	install() {
		this._private_installDependencies();
	}

	end() {
		this.log(yosay(`Thanks for using my generator! if you have any suggestion for it please contact me on GitHub!`))
	}
	/*
		Private methods to help on the generation
	*/
	_private_setAppName() {
		if (this.answers.name) {
			this.appname = this.answers.name;
		} else {
			this.appname = this.options.name;
		}
		if (this.answers.folder) {
			this.destinationRoot(this.appname);
		} else {
			this.destinationRoot(__dirname);
		}
	}
	_private_copyConfigurationFiles() {
		if (this.answers.styles === 'css') {
			utils.configurationFiles.forEach((file) => {
				this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), {
					name: this.appname,
				});
			});
			this.fs.extendJSON(this.destinationPath('package.json'), packages.cssDependencies);
		} else {
			this.log('sorry the other options are not available yet!');
		}
	}

	_private_copySourceFiles() {
		if (this.answers.styles === 'css') {
			utils.sourceFilesCss.forEach((file) => {
				this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), {
					name: this.appname
				});
			});
		}
	}

	_private_installDependencies() {
		if (!this.options['skip-install']) {
			if (this.answers.manager) {
				this.log(`${chalk.grey('Installing dependencies with')} ${chalk.blue('yarn')}`)
				this.yarnInstall();
			} else {
				this.log(`${chalk.grey('Installing dependencies with')} ${chalk.green('npm')}`)
				this.npmInstall();
			}
		}
	}
}