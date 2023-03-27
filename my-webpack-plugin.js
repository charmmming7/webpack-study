class MyWebpackPlugin {
  apply(compiler) { // apply 라는 메소드 생성, complier 객체 주입
    // compiler.hooks.done.tap("My Plugin", stats => { // 인자2("My Plugin", stats)와 콜백함수(완료 시 동작)
    //   console.log("MyPlugin: done")
    // })

    // compiler.plugin() 함수로 후처리한다
    // compiler.plugin("emit", (compilation, callback) => {
    //   const source = compilation.assets["main.js"].source()
    //   console.log(source)
    //   callback()
    // })

    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * 이것은 BannerPlugin이 처리한 결과입니다.',
          ' * Build Date: 2023-03-27',
          ' */'
        ].join('\n');
        return banner + '\n' + source;
      }

      callback();
    })
  }
}

module.exports = MyWebpackPlugin;