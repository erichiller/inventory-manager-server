const webpack = require( 'webpack' );
const path = require( 'path' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );

/** More info
 * → use prefetching for modals
 * → use preloading for required libraries
 * https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
 *
 */

process.env.HASURA_GRAPHQL_ENGINE_URL = "/graphql/";
process.env.NODE_ENV = "production";

/** @type {import('webpack').Configuration} */
const baseConfig = require( './webpack.config' );

/** @type {import('webpack').Configuration} */
const extendedConfig = {
    devtool: false,
    mode: 'production',
    // devServer: undefined,
    devServer: {
        contentBase: path.resolve( __dirname, 'dist' ),
        port: 80,
        host: '0.0.0.0',
        disableHostCheck: true,   // insecure , should use `public: 'sub.domain.tld`
        watch: false
    },
    optimization: {
        usedExports: true,
        concatenateModules: true,
        removeAvailableModules: true,
        sideEffects: true,
        providedExports: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin( {
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            } ),
        ],
        /**
         * not needed for dynamic imports?
         * https://webpack.js.org/guides/code-splitting/#dynamic-imports
         */
        // splitChunks: {
        //     chunks: 'all',
        //     usedExports: true,
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor',
        //             chunks: 'all',
        //         },
        //     },
        // },
        // // new
        // // https://webpack.js.org/guides/caching/
        // moduleIds: 'deterministic',
        // runtimeChunk: 'single',
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        // path: path.resolve('.', 'dist'),
        publicPath: "/",
        // filename: '[name].[chunkhash:8].js',
        filename: '[name].[contenthash:8].js',
        // sourceMapFilename: '[name].[chunkhash:8].map',
        // chunkFilename: '[id].[chunkhash:8].js'
    }
};

// baseConfig.plugins.push( new CssMinimizerPlugin() );

/** @type {import('webpack').Configuration} */
module.exports = Object.assign( baseConfig, extendedConfig );



