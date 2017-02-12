const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = function (pathSource, pathBuild) {
	"use strict";
	return {
		module: {
			rules: [{
				test: /\.styl$/,
				include: pathBuild + '/sprite',
				loaders: [
					'style',
					'css',
					'stylus'
				]
			}, {
				test: /\.(png|jpg)$/,
				include: pathSource,
				loader: 'file-loader',
				options: {
					name: 'images/[name]_[hash].[ext]'
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
					css: pathBuild + '/sprite/sprite.styl'
				},
				apiOptions: {
					cssImageRef: '~sprite.png'
				}
			})
		]
	};
};