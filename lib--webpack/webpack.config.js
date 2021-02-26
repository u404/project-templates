// const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    library: 'MyLib', // 用script标签引入时，绑定到window下的属性名
    globalObject: 'this',
  },
  externals: ['lodash'], // 排除其中引入的依赖
  // externals: [nodeExternals()], //
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
