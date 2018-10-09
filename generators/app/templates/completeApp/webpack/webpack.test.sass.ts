
export default {
	devtool: 'inline-source-map',
	performance: {
		hints: false,
	},
	mode: 'none',
	module: {
		rules: [
			{ test: /\.tsx$/, loader: 'awesome-typescript-loader' },
			{
				test: /\.s?css$/, loader: [
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
};
