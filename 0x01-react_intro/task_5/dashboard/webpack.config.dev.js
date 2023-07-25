const path = require('path');
const webpack = require('webpack');

const filePath = path.join(__dirname, './public/js/');
const fileName = 'bundle.js';
const PATHS = {
  src: path.join(__dirname, './src/'),
  dist: path.join(__dirname, 'public'),
};

module.exports = {
    mode: 'development',
devtool: 'source-map',
entry: {
  app: [path.join(__dirname, './src/App.jsx')],
},
output: {
  path: PATHS.dist,
  filename: fileName,
  publicPath: '/',
},
watch: true,
watchOptions: {
  ignored: '/node_modules/',
},
resolve: {
  extensions: ['.js', '.jsx'],
},
}

module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                sourceMaps: true,
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
              },
            },
          },

          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader', // creates style nodes from JS strings
              },
              {
                loader: 'css-loader', // translates CSS into CommonJS
              },
              {
                loader: 'sass-loader', // compiles Sass to CSS
              },
            ],
          },

          
    ]
  }
