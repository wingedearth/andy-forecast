const path = require('path');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');

const isServer = false;
const extensions = ['.js', '.json', '.jsx'];
const target = 'web';
const watchOptions = {
  ignored: /node_modules/
};

/**
 * @function clientConfig
 * @param {Object} variables
 * @returns {Object}
 */
module.exports = (variables) => {
  const { devtool, mode, watch } = variables;

  return {
    devtool,
    mode,
    watch,
    entry: {
      home: path.join(__dirname, 'src', 'entries/home.js')
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist', 'client')
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        process: 'process/browser'
      },
      extensions,
      modules: ['node_modules']
    },
    module: {
      rules: getRules({ isServer })
    },
    plugins: getPlugins(isServer, variables),
    target,
    watchOptions
  };
};
