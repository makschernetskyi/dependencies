const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
	entry: './src/index.tsx',
	mode: 'production',
	output:{
		filename: '[name]-[fullhash].js',
		path: path.resolve(__dirname, 'build', 'static')
	},
	plugins:[
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, 'build', 'templates', 'index.html'),
			template: path.resolve(__dirname, 'src', 'index.html'),
			publicPath: '/static/'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		rules:[
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			},
			{enforce: 'pre', test:/\.js$/, loader: "source-map-loader"}
		]
	},
	resolve: {
    	extensions: [".js", ".json", ".ts", ".tsx"],
  	}
}