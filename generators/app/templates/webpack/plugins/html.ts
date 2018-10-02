import htmlWebpackPlugin from 'html-webpack-plugin';

export const htmlInject = new htmlWebpackPlugin({
	template: 'src/index.html',
});
