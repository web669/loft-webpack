module.exports = function () {
	"use strict";
	return {
		module: {
			rules: [{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}]
		}
	};
};