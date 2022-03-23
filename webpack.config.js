const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './app.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'lib'),
					path.resolve(__dirname, 'public'),
				],
				use: [
					{
						loader: path.resolve('lib/loader.js')
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				]
			},
		]
	},
	output: {
		filename: 'js/app.min.js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/app.min.css',
		})
	],
}