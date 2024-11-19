const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    app: require.resolve('./src/index'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader', options: { asJSON: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
        // Copy the Swagger OAuth2 redirect file to the project root;
        // that file handles the OAuth2 redirect after authenticating the end-user.
          from: require.resolve('swagger-ui/dist/oauth2-redirect.html'),
          to: './'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/api.yml'),
          to: 'api.yml'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/examples'),
          to: 'examples'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/parameters'),
          to: 'parameters'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/requestBodies'),
          to: 'requestBodies'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/responses'),
          to: 'responses'
        },
        {
          from: path.resolve(__dirname, 'src/api-ref/schemas'),
          to: 'schemas'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    watchFiles: ['src/api-ref/**/*.yaml', 'src/api-ref/**/*.yml'],
    proxy: {
      '/cgi': {
        target: 'https://world.openfoodfacts.net',
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
          console.log('Proxy response received for CGI:', req.url);
          proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        },
      },
      '/api': {
        target: 'https://world.openfoodfacts.net',
        changeOrigin: true,
        secure: false,
        onProxyRes: (proxyRes, req, res) => {
          console.log('Proxy response received for API:', req.url);
          proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        },
      },
    },
  }
};