const webpack = require('webpack');

let isProduction = false;
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  isProduction = true;
}

const mode = isProduction ? 'production' : 'development';
console.log('Starting with mode:', mode);

module.exports = {
  externals: {
    _: 'lodash'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  mode: mode,
  plugins: [
    new webpack.DefinePlugin({
      //because a dependency of eds-core-react checks this and will fail without
      'process.env.RTL_SKIP_AUTO_CLEANUP': false
    })
  ],
  devtool: isProduction ? false : 'eval-source-map'
};
