const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'utils'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env']
					}
				}
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					//'style-loader',
					{
						loader: 'css-loader',
						options: { url: false, modules: true, importLoaders: 1 }
					},
					'sass-loader',
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|css|eot|ttf)$/,
				loader: 'url-loader',
			}
		]
	},
	plugins: [new CleanWebpackPlugin()],
	externals: ['react', 'smoothscroll-polyfill', 'body-scroll-lock', 'fslightbox-react'],
	mode: 'production'
};
