const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (paths) {
	"use strict";
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader', options: {
								minimize: true,
								sourceMap: true
							}
							},
							'sass-loader'
						]
					})
				},
				{
					test: /\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: {
							loader: 'css-loader', options: {
								minimize: true,
								sourceMap: true
							}
						}
					})
				},
				{
					test: /\.(ttf|otf|eot|woff(2)?)$/,
					include: paths,
					use: [{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]'
						}
					}]
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('./css/[name].css')
		]
	};
};