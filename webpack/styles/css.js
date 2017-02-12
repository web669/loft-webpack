module.exports = function (paths) {
	"use strict";
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader'
					]
				}
			]
		}
	};
};