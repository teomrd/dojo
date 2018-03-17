var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: "🤺 Dojo",
			template: "./src/index.html"
		})
	]
};
