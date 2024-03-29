// these are your imports below
// learn about the path module here
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  // this is the path to your source files
  context: path.join(__dirname, 'src'),
  // this is the first file to be executed
  entry: {
    app: [
      './app.jsx'
    ]
  },
  // here's your local dev server configurations. learn more here.
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './docs',
    publicPath: '/templist/',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    stats: {
      colors: true
    }
  },
  // two plugins we're using. one copies images, html & css
  // from the src directory to the docs folder
  plugins: [
    new CopyWebpackPlugin([
      { from: 'images', to: 'images' },
      { from: 'index.html' },
      { from: 'style.css' }
    ]),
    // this plug reloads your browser with every code change
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    // this loader uses babel to transpile our JS code
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      }
    ]
  },
  // the JS file that's compiled from the JSX files
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'docs')
  }
};
