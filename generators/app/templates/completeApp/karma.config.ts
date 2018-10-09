import test from './webpack/webpack.test';

export default (config: any) => {
	config.set({

		frameworks: ['mocha', 'chai'],

		files: [
			'test/**/*.test.tsx',
		],

		preprocessors: {
			'test/**/*.test.tsx': ['webpack'],
		},

		webpack: test,

		logLevel: config.LOG_INFO,

		plugins: [
			"karma-*",
		],

		reporters: ['mocha'],

		port: 9876,

		colors: true,

		autoWatch: true,

		browsers: ['ChromeHeadless'],

		singleRun: true,

		concurrency: Infinity,
	});
};
