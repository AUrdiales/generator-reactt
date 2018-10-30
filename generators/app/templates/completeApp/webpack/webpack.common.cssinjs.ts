import { resolve } from 'path';
import { Configuration } from 'webpack';

import { htmlInject } from './plugins/html';

const config: Configuration = {
	entry: {
		'<%= name %>': resolve(__dirname, '../src/index.tsx'),
		react: [
			'react',
			'react-dom',
		],
	},
	output: {
		path: resolve(__dirname, '../dist'),
		filename: '[name].[hash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				use: [
					{
						loader: 'tslint-loader',
						options: {
							emitErrors: true,
							failOnHint: true,
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						fallback: 'file-loader',
						name: 'assets/[name].[hash].[ext]',
					},
				},
			},
			{
				test: /\.(woff2|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						fallback: 'file-loader',
						name: 'assets/[name].[hash].[ext]',
					},
				},
			},
			{
				test: /\.(mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						fallback: 'file-loader',
						name: 'assets/[name].[hash].[ext]',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
	},
	plugins: [
		htmlInject,
	],
};

export default config;
