var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app:'./main',
    vendor:[
      'react',
      'react-dom',
      'react-router',
      'd3',
      ]
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve:{
    fallback:[
      path.join(__dirname, 'vendor')
    ],
    alias:{
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [ /node_modules/, /vendor/ ], loader: 'babel-loader'},
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(css|less)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ],
    noParse: [
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({filename: 'index.html', template:'src/index.html'}),
    new WebpackOnBuildPlugin(stats=>{
      console.log('Last build: ' + (new Date(stats.startTime)));
    })
  ],
  devServer: {
    stats: 'minimal'
  },
  devtool: 'source-map'
};
