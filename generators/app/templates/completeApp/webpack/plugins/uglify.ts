import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';

export const optimizeJS: UglifyJsWebpackPlugin = new UglifyJsWebpackPlugin({
	test: /\.js$/,
	extractComments: true,
});
