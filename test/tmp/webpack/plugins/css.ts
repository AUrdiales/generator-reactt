import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export const extractText = new MiniCssExtractPlugin({ filename: '[name].[hash].css' });

export const optimizeCss = new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.css$/,
	cssProcessorOptions: {
		dissableComments: { removeAll: true },
	},
});
