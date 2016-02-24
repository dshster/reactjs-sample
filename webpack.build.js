'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function buildWebpackConfig(options) {
	var build = 'build' === options.process;
	var environment = options.environment;

	var config = {
		context: path.join(__dirname, './application'),
		watch: false,
		entry: {
			application: [
				'./index'
			]
		},
		output: {
			path: path.join(__dirname, './build'),
			filename: '[name].js'
		}
	};

	config.devtool = 'source-map';

	// Webpack loaders
	config.module = {};
	config.module.loaders = [{
		test: /\.jsx?$/,
		exclude: /(node_modules)/,
		loader: 'babel'
	}];

	// Webpack plugins
	config.plugins = [];
	config.plugins.push(new HtmlWebpackPlugin({
		title: 'React.js sample application',
		appMountId: 'application',
		filename: 'application.html',
		template: path.join(__dirname, 'application/index.ejs'),
		inject: true,
		minify: false,
		hash: false
	}));

	// Dev server
	config.devServer = {};
	config.devServer.hot = true;

	return config;
};
