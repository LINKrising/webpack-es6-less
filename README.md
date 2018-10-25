# webpack+es6+less项目自动打包cli

#

## 1.关键文件

​	config:配置基本项
	webpack.config.dev.js：开发环境打包配置
	webpack.config.prod.js：生产环境打包配置

## 2.主要参数

​	entry：入口文件{name:'path'}
	output: 出口文件{path:path,filename:jsPath}
		#path: path.resolve(__dirname, "../public"),
	   	 #jsPath:"js/[name]-[hash].js",
	devServer：本地服务器配置

## 3.module

​	rules[
		{	test:regx,
			use:[{loader:'loader'}]
		}
	]

## 4.plugins

​	引用其他插件打包html,css,img...

## 5.主要模块

​	const webpack = require("webpack");
	const config = require("./config");
	const ExtractTextPlugin = require("extract-text-webpack-plugin");
	const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
	const htmlWebpackPlugin = require('html-webpack-plugin');
