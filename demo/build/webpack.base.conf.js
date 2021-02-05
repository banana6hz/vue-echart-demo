var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const NODE_ENV=process.env.NODE_ENV;

module.exports = {
	entry: resolve('/src/main.ts'),
	output: {
		filename: '[name].js',
		publicPath: './',
		path: resolve('dist'),
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js', '.vue', '.json'],
		alias: {
			'@': resolve('src')
		}
	},
	module: {
    rules: [
      {
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.ts?$/,
				exclude: /node_module/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.vue$/],
							appendTsxSuffixTo: [/\.vue$/],
							transpileOnly: true,
						}
					}
				]
			},
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,// 处理顺序是从sass-loader到style-loader
				use:[
						'style-loader',
						'css-loader',
						'sass-loader'
				]
			},
			{
				test: /\.(png|jps|jpeg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[chunkhash:].[ext]',
							limit: 1024 * 10,
							esModule: false
						}
					}
				]
			},
    ]
  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
		}),
		new VueLoaderPlugin()
	]
}