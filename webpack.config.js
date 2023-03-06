const path = require("path");

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
      {
        test: /\.css$/,
        use: [
          'style-loader', // js -> cssom
          'css-loader' // css -> js
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/', // 파일명 앞에 추가되는 문자열(경로)
          name: '[name].[ext]?[hash]'
        }
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'url-loader',
      //   options: {
      //     publicPath: './dist/', // 파일명 앞에 추가되는 문자열(경로)
      //     name: '[name].[ext]?[hash]',
      //     limit: 20000, // 20kb 미만이면 base64로 변환
      //   }
      // }
    ]
  }
}