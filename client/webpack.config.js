const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dev = require('webpack-dev-server');

module.exports = {
    mode: "development",
    entry: [
        // 'react-hot-loader/patch',
        './src/index.tsx' // your app's entry point
    ],
    devtool: 'source-map',
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
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
    },
    plugins: [
        // new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
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