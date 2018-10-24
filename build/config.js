const path = require('path');
module.exports = {
    //设置入口文件
    mainJs: "./app/main.js",
    otherJs: "./app/other.js",
    //服务开启的根目录
    server: "./public",
    //打包后输出的文件夹
    publicPath:'../../',
    path: path.resolve(__dirname, "../public"),
    //输出的js文件的文件路径
    jsPath:"js/[name]-[hash].js",
    //输出的css文件的文件路径
    cssPath:"css/[hash].css",
    //输出的图片等文件的路径配置
    filePath:"./images/[name].[hash:7].[ext]",
    //设置文件转换成base64格式的大小
    limit:10000
};