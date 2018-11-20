const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
	'react-hot-loader/patch',
	'./src/index.jsx'
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		  },
		  {
		  	test: /\.(png|svg|jpg|gif)$/,
		  	use: [
		  		{
		  			loader: 'file-loader'
		  		}
		  	]
		  },
		  {
			test: /\.(scss|sass)$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',	
				use: [
					{
				  		loader: 'css-loader',
				  		options:{
				  			modules: true,
				  			sourceMap: true,
				  			importLoaders: 2,
				  			localIdentName: '[name]__[local]___[hash:base64:5]'
				  		}
					},
				  'sass-loader'
				]
			})
		  }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'js/bundle.js'
	},
	plugins: [
		new ExtractTextPlugin('css/styles.css'),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};