const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const isServer = true;
const extensions = ['.js', '.json', '.jsx'];
const target = 'node';
const watchOptions = {
  ignored: /node_modules/
};
const externals = [
  nodeExternals({
    allowlist: ['webpack/hot/dev-server', /\.(?!(?:jsx?|json)$).{1,5}$/i]
  })
];

/**
 * @function serverConfig
 * @param {Object} variables
 * @returns {Object}
 */
module.exports = (variables) => {
  const { devtool, mode, watch } = variables;
  const entry = {
    server: path.join(__dirname, 'src', 'server', 'server.js')
  };
  const output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'server')
  };
  const plugins = getPlugins(isServer, variables);
  const alias = {
    '@': path.join(__dirname, 'src')
  };
  const rules = getRules({ isServer });
  const optimization = getOptimization({ isServer });

  return {
    devtool,
    mode,
    watch,
    entry,
    output,
    resolve: {
      alias,
      extensions,
      modules: ['node_modules']
    },
    module: {
      rules
    },
    plugins,
    optimization,
    target,
    externals,
    watchOptions
  };
};
