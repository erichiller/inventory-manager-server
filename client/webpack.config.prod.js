const path = require('path');

/** @type {import('webpack').Configuration} */
const baseConfig = require('./webpack.config');

/** @type {import('webpack').Configuration} */
const extendedConfig = {
    devtool: false,
    mode: 'production',
    devServer: undefined,
    optimization: {
        usedExports: true,
        concatenateModules: true,
        removeAvailableModules: true,
        sideEffects: true,
        providedExports: true,
        splitChunks: {
            chunks: 'all',
            usedExports: true
        }
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve('.', 'dist'),
        publicPath: "/",
        filename: '[name].[chunkhash:8].js',
        sourceMapFilename: '[name].[chunkhash:8].map',
        chunkFilename: '[id].[chunkhash:8].js'
    }
};

/** @type {import('webpack').Configuration} */
module.exports = Object.assign(baseConfig, extendedConfig);