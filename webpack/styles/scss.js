module.exports = function(paths) {
	"use strict";
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		}
	};
};