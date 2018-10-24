const webpack = require("webpack");
const config = require("./config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        mainJs: config.otherJs,
        otherJs: config.otherJs
    }, //已多次提及的唯一入口文件
    output: {
        path: config.path, //打包后的文件存放的地方
        filename: config.jsPath //打包后输出文件的文件名
    },

    //以下是服务环境配置
    devServer: {
        contentBase: config.server, //本地服务器所加载的页面所在的目录
        inline: true //实时刷新
    },

    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: 'postcss-loader'
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: config.limit,
                    name: config.filePath
                }
            }
        }, {
            test: /\.(eot|woff|ttf|woff2)(\?|$)/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: config.limit,
                    name: config.filePath
                }
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin('es6'), //文件自动添加内容
        //js 压缩混淆代码
        new UglifyJsPlugin(),
        //css文件配置
        new ExtractTextPlugin(config.cssPath),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'src/view/index.html',
            filename: 'index.html',
            // inject:false,
            chunks: ['mainJs']
        }),
        new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
            template: 'src/view/login.html',
            filename: 'login.html',
            // inject:false,
            chunks: ['otherJs']
        })
    ],
};