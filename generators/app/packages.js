const pkgJson = {
	devDependencies: {
		"@types/enzyme": "^3.1.14",
		"@types/enzyme-adapter-react-16": "^1.0.3",
		"@types/html-webpack-plugin": "^3.2.0",
		"@types/jest": "^23.3.9",
		"@types/node": "^10.11.3",
		"@types/react": "^16.4.14",
		"@types/react-dom": "^16.0.8",
		"@types/uglifyjs-webpack-plugin": "^1.1.0",
		"@types/webpack": "^4.4.13",
		"@types/webpack-dev-server": "^3.1.1",
		"@types/webpack-merge": "^4.1.3",
		"@typescript-eslint/eslint-plugin": "^1.9.0",
    "@typescript-eslint/parser": "^1.9.0",
		"enzyme": "^3.6.0",
		"enzyme-adapter-react-16": "^1.5.0",
		"eslint": "^5.16.0",
    "eslint-config-prettier": "^4.3.0",
    "eslint-plugin-react": "^7.13.0",
		"file-loader": "^2.0.0",
		"fork-ts-checker-webpack-plugin": "^0.5.0",
		"html-webpack-plugin": "^3.2.0",
		"jest": "^24.6.0",
		"prettier": "^1.17.1",
		"rimraf": "^2.6.2",
		"style-loader": "^0.23.0",
		"ts-jest": "^24.0.2",
		"ts-loader": "^5.3.1",
		"ts-node": "^7.0.1",
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
		"react-dom": "^16.5.2",
		"cross-env":  "^5.2.0"
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

const sassDependencies = {
	devDependencies: {
		...cssDependencies.devDependencies,
		"node-sass": "^4.9.3",
		"sass-loader": "^7.1.0"
	},
	dependencies: {
		...cssDependencies.dependencies
	}
}

const cssInJSDependencies = {
	devDependencies: {
		...pkgJson.devDependencies,
	},
	dependencies: {
		...pkgJson.dependencies,
		"emotion": "^9.2.12"
	}
}

module.exports = {
	pkgJson,
	cssDependencies,
	sassDependencies,
	cssInJSDependencies
}