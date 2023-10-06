const path = require('path');

const babelServerConfigFile = path.join(__dirname, '..', 'babel.server.config.json');
const babelClientConfigFile = path.join(__dirname, '..', 'babel.config.json');

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

module.exports = ({ isServer } = {}) => {
  const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

  return [jsRule(configFile), jsxRule(configFile)];
};
