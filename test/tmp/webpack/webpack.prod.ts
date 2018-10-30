import merge from 'webpack-merge';

import common from './webpack.common';

import { optimizeJS } from './plugins/uglify';
import { optimizeCss } from './plugins/css';

export default merge(common, {
	mode: 'production',
	performance: {
		hints: false,
	},
	optimization: {
		splitChunks: {
			name: "vendor",
			chunks: "initial",
		},
	},
	plugins: [
		optimizeCss,
		optimizeJS,
	],
});
