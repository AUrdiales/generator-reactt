
const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Please tell me your proyect name',
		default: 'new-app'
	},
	{
		type: 'confirm',
		name: 'folder',
		message: 'Do you want to create a new folder for the app?',
		default: true
	},
	{
		type: 'confirm',
		name: 'manager',
		message: 'Do you want to use yarn as the package manager?',
		default: true
	},
	{
		type: 'list',
		name: 'styles',
		message: 'What kind of styles language do you want?',
		choices: [
			"css",
			"sass"
		]
	}
];

const configurationFiles = [
	'karma.config.ts',
	'tslint.json',
	'tsconfig.json',
	'package.json',
];

const sourceFilesCss = [
	'src',
	'test',
	'webpack'
]
module.exports = {
	questions,
	configurationFiles,
	sourceFilesCss
}