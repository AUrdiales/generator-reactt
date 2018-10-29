
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
			"sass",
			"css-in-js"
		]
	}
];

const addQuestions = [
	{
		type: 'input',
		name: 'componentName',
		message: 'Please tell me your component name',
		default: 'NewComponent'
	},
	{
		type: 'list',
		name: 'feature',
		message: 'Is this a component or a container?',
		choices: [
			'component',
			'container'
		]
	}
];

const configurationFiles = [
	'karma.config.ts',
	'tslint.json',
	'tsconfig.json',
	'package.json',
];

const commonFiles = [
	'src/containers/HelloWorld/IHelloWorldProps.ts',
	'src/containers/HelloWorld/IHelloWorldState.ts',
	'test',
	'webpack/plugins/html.ts',
	'webpack/plugins/uglify.ts',
	'webpack/webpack.dev.ts',
	'webpack/webpack.prod.ts',
	'index.js'
];

const sourceFilesCss = [
	'src/containers/HelloWorld/HelloWorld.css',
	'src/containers/HelloWorld/HelloWorld.css.tsx',
	'src/index.tsx',
	'src/index.html',
	'webpack/webpack.common.css.ts',
	'webpack/webpack.test.css.ts',
	'webpack/plugins/css.ts',
	...commonFiles
];

const sourceFilesSass = [
	'src/containers/HelloWorld/HelloWorld.scss',
	'src/containers/HelloWorld/HelloWorld.sass.tsx',
	'src/index.tsx',
	'src/index.html',
	'webpack/webpack.common.sass.ts',
	'webpack/webpack.test.sass.ts',
	'webpack/plugins/css.ts',
	...commonFiles
];

const sourceFilesCssInJS = [
	'src/containers/HelloWorld/HelloWorld.cssinjs',
	'src/containers/HelloWorld/HelloWorld.cssinjs.tsx',
	'src/index.tsx',
	'src/index.html',
	'webpack/webpack.common.cssinjs.ts',
	'webpack/webpack.test.cssinjs.ts',
	...commonFiles
];

module.exports = {
	questions,
	addQuestions,
	configurationFiles,
	sourceFilesCss,
	sourceFilesSass,
	sourceFilesCssInJS
}