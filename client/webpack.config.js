const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = require('webpack-dev-server');
// const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        // 'react-hot-loader/patch',
        './src/index.tsx' // your app's entry point
    ],
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',  // this worked, trying cheap-module-eval-source-map
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // use: 'ts-loader',
                loader: 'ts-loader',
                // exclude: /node_modules/,  // not required, by default it doesn't
                options: { transpileOnly: true }
            },

            {
                test: /\.s?(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // test: /\.svg$/,
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: {
                    test: /\.(j|t)sx?$/
                },
                use: [
                    {
                        loader: '@svgr/webpack',
                        // options: {
                        //     native: true,
                        // },
                    },
                    // {
                    //     loader: 'url-loader'
                    // }
                ],
            },
            {
                // don't use svgr for css
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: {
                    test: /\.s?(a|c)ss$/,
                },
                loader: 'url-loader'
            },
            {
                // test: /\.(jpg|png)$/,
                // use: {
                    // loader: 'url-loader',
                // },
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000, // 10k
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // {
            //     test: /\.svg$/,
            //     use: [
            //         {
            //             loader: 'svg-url-loader',
            //             options: {
            //                 limit: 10000,
            //             },
            //         },
            //     ],
            // },
        ]
    },
    resolve: {
        // extensions: ['.ts', '.tsx'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('.', 'dist'),
        publicPath: "/"
    },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // do not print bundle build stats
        // noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: 80,
        host: '0.0.0.0',
        disableHostCheck: true,   // insecure , should use `public: 'inventory.hiller.pro`
        transportMode: 'ws'

        // clientLogLevel: 'warning',
        // open: true,
        // stats: 'errors-only'
    },
    plugins: [

        new ForkTsCheckerWebpackPlugin({
            // eslint: {
            //     files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            // }
        }),
        // new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
        // new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, 'src', 'index.html')
            inject: true, // testing
            template: 'src/index.html'
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: true, // Not currently used,
            HASURA_GRAPHQL_API_URL: 'http://GRAPHQL:8080/v1/graphql',
            HASURA_ACCESS_KEY: "achoo"
        })
    ],
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM"
    // }
};