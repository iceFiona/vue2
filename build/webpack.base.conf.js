var path = require('path'),
    webpack = require('webpack');

var src = path.resolve(__dirname, '../src'); // 源码目录
var commonPath = {
  dist: path.resolve(__dirname, '../dist'), // build 后输出目录
  indexHTML: path.join(src, '/index.html'), // 入口基页
  staticDir: path.resolve(__dirname, '../static'), // 无需处理的静态资源目录
  
};

var replacePath =  {
    development:'',
    init: ''
  }

module.exports = {
  commonPath: commonPath,
  entry: {
    app: path.join(src, 'app.js'),

    // 框架 / 类库 单独打包
    vendor: [
      'vue',
      'vue-router',
      'vue-resource',
      'lodash'
    ]
  },
  output: {
    path: path.join(commonPath.dist, 'static'),
    publicPath: replacePath[process.env.NODE_ENV.trim()]+'/static/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.less'],
    alias: {
      // 自定义路径别名
      'vue$': 'vue/dist/vue.common.js',
      rootPath: src,
      common: path.join(src,'common'),
      component: path.join(src, 'components'),
      service: path.join(src, 'services'),
      view: path.join(src, 'views')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel!eslint',
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    },{
      test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
      loader: 'file-loader',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
    }]
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
      less: 'vue-style!css!less',
      sass: 'vue-style!css!sass'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'mainifest']
    }),
    new webpack.DefinePlugin({
      // 配置开发全局常量
      __DEV__: process.env.NODE_ENV.trim() === 'development',
      __INIT__: process.env.NODE_ENV.trim() === 'init'
    })
  ]
};
