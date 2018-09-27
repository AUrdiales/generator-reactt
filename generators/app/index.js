const Generator = require('yeoman-generator');
const yosay = require('yosay');

const utils = require('./utils');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.appname = 'new app';
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
		// Configuration
	}

	writing() {
		// creating template files
	}

	conflicts() {
		// handle errors
	}

	install() {
		// install dependencies
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
}