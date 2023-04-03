const path = require("path");
// const MyWebpackPlugin = require('./my-webpack-plugin');
const webpack = require("webpack");
const ChildProcess = require("child_process");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js' // 상대경로
  },
  output: {
    path: path.resolve('./dist'), // 절대경로를 해석해주는 node 모듈
    filename: '[name].js' // 동적파일명
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: [
  //         path.resolve('./my-webpack-loader.js')
  //       ]
  //     }
  //   ]
  // },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader', // js -> cssom
      //     'css-loader' // css -> js
      //   ]
      // },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: './dist/', // 파일명 앞에 추가되는 문자열(경로)
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // publicPath: './dist/', // 파일명 앞에 추가되는 문자열(경로)
          name: '[name].[ext]?[hash]',
          limit: 20000, // 20kb 미만이면 base64로 변환
        }
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
          ? MiniCssExtractPlugin.loader
          : "style-loader",
          "css-loader",
        ]
      },
    ]
  },
  // plugins: [
  //   new MyWebpackPlugin()
  // ]
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${ChildProcess.execSync('git rev-parse --short HEAD')}
        User: ${ChildProcess.execSync('git config user.name')}`
    }),
    new webpack.DefinePlugin({
      TWO: '1+1', // app에서 TWO라는 전역변수로 접근 가능.
      String: JSON.stringify('1+1'), // 코드가 아니라 값(문자열)을 넣고 싶을 때.
      'api.domain': JSON.stringify('http://dev.api.domain.com') // 객체도 추가 가능
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 옵션에 template을 전달 할 수 있음.
      templateParameters: { // 개발모드에 따라 index.html 타이틀 변경하기
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : ''
      },
      minify: process.env.NODE_ENV === 'productoon' ? {
        collapseWhitespace: true, // 빈칸 제거
        removeComments: true // 주석 제거
      } : false
    }),
    new CleanWebpackPlugin(),
    ...(
      process.env.NODE_ENV === 'production'
      ? [ new MiniCssExtractPlugin({ filename: '[name].css' }) ]
      : []
    )
  ]
}