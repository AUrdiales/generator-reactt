
const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Please tell me your proyect name',
		default: 'new app'
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
];

module.exports = {
	questions
}