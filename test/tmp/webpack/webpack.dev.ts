import merge from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';

import common from './webpack.common';

export default merge(common, {
	mode: 'development',
	plugins: [
		new HotModuleReplacementPlugin(),
	],
	devtool: 'cheap-eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
	},
});
