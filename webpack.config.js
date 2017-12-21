const webpack = require('webpack');

module.exports = {
	devtool : "eval-source-map",
	entry : __dirname + "/app/main.js",
	output : {
		path : __dirname + "/public",
		filename : "bundle.js"
	},
	devServer : {
		contentBase : "./public",
		port : 1443,
		inline : true,
		historyApiFallback : true
	},

	module : {
		rules : [
			{
				test : /(\.jsx|\.js)$/,
				use : {
					loader : "babel-loader",
					options : {
						presets : ["env", "react"]
					}
				},
				exclude : /node_modules/
			},
			{
				test : /\.css$/,
				use : [
					{loader : "style-loader"},
					{
						loader : "css-loader",
						options : {
							modules : true,
							localIdentName : '[name]__[local]--[bash:base64:5]'
						}
					}
				]
			}
		]
	},

	plugins : [
		new webpack.BannerPlugin("版权所有，翻版必究")
	],
}