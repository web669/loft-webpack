const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = function (pathSource, pathBuild) {
	"use strict";
	return {
		module: {
			rules: [{
				test: /\.scss/,
				include: pathBuild + '/sprite',
				loaders: [
					'style',
					'css',
					'sass'
				]
			}, {
				test: /\.(png|jpg)$/,
				include: pathSource,
				loader: 'file-loader',
				options: {
					name: 'images/[name]_[hash].[ext]'
				}
			}, {
				test: /\.svg/,
				include: pathSource,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			}]
		},
		plugins: [
			new SpritesmithPlugin({
				src: {
					cwd: pathSource + '/icons',
					glob: '*.png'
				},
				target: {
					image: pathBuild + '/sprite/sprite.png',
					css: pathBuild + '/sprite/sprite.scss'
				},
				apiOptions: {
					cssImageRef: '~sprite.png'
				}
			})
		]
	};
};