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
    devtool: 'inline-source-map',
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
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        // options: {
                        //     native: true,
                        // },
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
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
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: "./dist",
        // do not print bundle build stats
        // noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: 8081,
        // host: HOST
    },
    plugins: [
        // new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};