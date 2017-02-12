const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const commons = require('./webpack/commons');

const scss = require('./webpack/styles/scss');
const extractCss = require('./webpack/styles/css.extract');
const css = require('./webpack/styles/css');

const uglifyJs = require('./webpack/js/uglify');

const images = require('./webpack/images');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};
const common = merge([
	{
		entry: {
			index: PATHS.source + '/pages/index/index.js',
			blog: PATHS.source + '/pages/blog/blog.js',
			about: PATHS.source + '/pages/about/about.js',
			portfolio: PATHS.source + '/pages/portfolio/portfolio.js'
		},
		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['blog', 'common'],
				template: PATHS.source + '/pages/blog/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'about.html',
				chunks: ['about', 'common'],
				template: PATHS.source + '/pages/about/about.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio.html',
				chunks: ['portfolio', 'common'],
				template: PATHS.source + '/pages/portfolio/portfolio.pug'
			}),

			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		]
	},
	pug(),
	commons(),
	images(PATHS.source, PATHS.build)
]);

module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			extractCss(),
			uglifyJs({useSourceMap: true})
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			scss(),
			css()
		]);
	}
};