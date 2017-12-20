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
			}
		]
	},
}