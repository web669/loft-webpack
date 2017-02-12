const webpack = require('webpack');

module.exports = function(useSourceMap) {
	"use strict";
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: useSourceMap,
				compress: {
					warnings: false
				}
			})
		]
	};
};