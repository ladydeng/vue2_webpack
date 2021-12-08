const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
//用到了node的东西，所以我们需要输入命令npm init（package.json）加载依赖
//当（package.json）里依赖一些东西时，我们输入npm install命令加载依赖

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
        // publicPath:"dist/"//在url前加上路径才能正确加载file-loader打包后的图片
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            //css-loader只负责加载css文件
            //style-loader把css用到DOM中
            //当有多个loader时，浏览器会从右向左读
            use: ['style-loader','css-loader'],
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader',//create style nodes from JS strings

              },
              {
                loader: 'css-loader',//translates css into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
              }
            ]
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  //limit的设置图片大小*1024
                  //当加载图片时，小于limit时，会将图片编译成base64字符串
                  //大于limit时需要安装file-loader(不需要配置)
                  limit: 14000,
                  name:'img/[name].[hash:8].[ext]'
                },
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test:/\.vue$/,
            use:{
              loader:'vue-loader'
            }
          }
        ],
      },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    plugins:[
      new VueLoaderPlugin(),
      new webpack.BannerPlugin('最终版权归dlf所有'),
      new HtmlWebpackPlugin({
        template:"index.html"
      }),
    //   new UglifyjsWebpackPlugin()
    ]
    // devServer:{
    //   contentBase:'./dist',
    //   inline:true
    // }
}