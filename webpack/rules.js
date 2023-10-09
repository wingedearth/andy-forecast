const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelServerConfigFile = path.join(__dirname, '..', 'babel.server.config.json');
const babelClientConfigFile = path.join(__dirname, '..', 'babel.config.json');

const imageRule = () => ({
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
});

const jsRule = (configFile) => {
  return {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: { configFile }
      }
    ]
  };
};

const jsxRule = (configFile) => {
  return {
    test: /\.(jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: { configFile }
      }
    ]
  };
};
const styleRule = ({ isServer }) => ({
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    !isServer && MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader'
  ].filter(Boolean)
});

const svgRule = () => ({
  test: /\.svg$/i,
  use: ['@svgr/webpack']
});

module.exports = (options = {}) => {
  const { isServer } = options;
  const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

  return [imageRule(), jsRule(configFile), jsxRule(configFile), styleRule(options), svgRule()];
};
