import merge from 'webpack-merge';

import common from './webpack.common';

<%if (styles === 'css' || styles === 'sass') { %>
import { optimizeJS } from './plugins/uglify';
import { optimizeCss } from './plugins/css';
<% } %>
export default merge(common, {
	mode: 'production',
	performance: {
		hints: false,
	},
	optimization: {
		splitChunks: {
			chunks: "initial",
		},
	},
	plugins: [
		<%if (styles === 'css' || styles === 'sass') { %>
		optimizeCss,
		optimizeJS,
		<% } %>
	],
});
