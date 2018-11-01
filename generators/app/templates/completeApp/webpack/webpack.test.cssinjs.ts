
export default {
	devtool: 'inline-source-map',
	performance: {
		hints: false,
	},
	mode: 'none',
	module: {
		rules: [
			{ test: /\.tsx$/, loader: 'awesome-typescript-loader' },
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
};
