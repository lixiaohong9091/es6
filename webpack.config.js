module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname,
      filename: './build/bundle.js',
      library: "webpackNumbers", 
      //globalObject: 'this', 
      libraryTarget: 'umd'
  },
  module: {
      rules: [{
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
      }]
  }
}