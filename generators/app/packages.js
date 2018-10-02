const pkgJson = {
	devDependencies: {
		"@types/chai": "^4.1.6",
		"@types/enzyme": "^3.1.14",
		"@types/enzyme-adapter-react-16": "^1.0.3",
		"@types/html-webpack-plugin": "^3.2.0",
		"@types/karma": "^1.7.6",
		"@types/mocha": "^5.2.5",
		"@types/node": "^10.11.3",
		"@types/react": "^16.4.14",
		"@types/react-dom": "^16.0.8",
		"@types/uglifyjs-webpack-plugin": "^1.1.0",
		"@types/webpack": "^4.4.13",
		"@types/webpack-dev-server": "^3.1.1",
		"@types/webpack-merge": "^4.1.3",
		"awesome-typescript-loader": "^5.2.1",
		"chai": "^4.2.0",
		"enzyme": "^3.6.0",
		"enzyme-adapter-react-16": "^1.5.0",
		"file-loader": "^2.0.0",
		"html-webpack-plugin": "^3.2.0",
		"karma": "^3.0.0",
		"karma-chai": "^0.1.0",
		"karma-chrome-launcher": "^2.2.0",
		"karma-mocha": "^1.3.0",
		"karma-mocha-reporter": "^2.2.5",
		"karma-webpack": "^3.0.5",
		"mocha": "^5.2.0",
		"rimraf": "^2.6.2",
		"style-loader": "^0.23.0",
		"ts-node": "^7.0.1",
		"tslint": "^5.11.0",
		"tslint-loader": "^3.6.0",
		"tslint-react": "^3.6.0",
		"typescript": "^3.1.1",
		"uglifyjs-webpack-plugin": "^2.0.1",
		"url-loader": "^1.1.1",
		"webpack": "^4.20.2",
		"webpack-cli": "^3.1.2",
		"webpack-dev-server": "^3.1.9",
		"webpack-merge": "^4.1.4"
	},
	dependencies: {
		"react": "^16.5.2",
		"react-dom": "^16.5.2"
	},
}

const cssDependencies = {
	devDependencies: {
		...pkgJson.devDependencies,
		"css-loader": "^1.0.0",
		"optimize-css-assets-webpack-plugin": "^5.0.1",
		"@types/mini-css-extract-plugin": "^0.2.0",
		"mini-css-extract-plugin": "^0.4.3",
		"@types/optimize-css-assets-webpack-plugin": "^1.3.3"
	},
	dependencies: {
		...pkgJson.dependencies
	}
}

module.exports = {
	pkgJson,
	cssDependencies
}