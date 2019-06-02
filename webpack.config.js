const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    // filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js', /* use for dynamic imports */
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }, {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Webpack training'
      title: 'Caching'
    }),
  ],
  /**
   * resolve the duplicated import modules
   */
  optimization: {
    // splitChunks: {
    //   chunks: 'all'
    // },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  }
};

/**
 * configuration for the dynamic imports
 */
// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './src/index.js'
//   },
//   output: {
//     filename: '[name].bundle.js',
//     chunkFilename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };