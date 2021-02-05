const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const webpack = require('webpack');

const  { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
	mode: 'production',
	plugins:[
		//使用插件定义全局变量DEV
			new webpack.DefinePlugin({
					DEV:JSON.stringify('production')
			}),
			new CleanWebpackPlugin(),
	]
});