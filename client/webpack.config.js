const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );
const TsconfigPathsPlugin = require( 'tsconfig-paths-webpack-plugin' );
const child_process = require( 'child_process' );
const glob = require( 'glob' );
const StatoscopeWebpackPlugin = require( '@statoscope/webpack-plugin' ).default;


let gitValid = false;
try {
    gitValid = child_process.execSync( `git status`, { encoding: 'utf8' } ).trim().includes( "On branch master" );
} catch { }

function git( command ) {
    console.log( `executing ${command}}` );
    return child_process.execSync( `git ${command}`, { encoding: 'utf8' } ).trim();
}

const gitVersion = gitValid ? git( 'describe --always' ) : process.env['INVENTORY_COMMIT_SHA'];
const gitDate = gitValid ? git( 'log -1 --format=%aI' ) : process.env['INVENTORY_COMMIT_DATE'];
console.log( `gitValid=${gitValid} ; gitVersion=${gitVersion} ; gitDate=${gitDate}` );
if ( gitVersion.length != 7 ) { console.error( "invalid git commit sha" ); throw new Error(); }
if ( gitDate.length != 25 ) { console.error( "invalid git commit date" ); throw new Error(); }


let timepart = Date.now.toISOString().split( "T" );
let date = timepart[0];
timepart = timepart[1].split( ':' );
let fileDateString = date + "_" + timepart[0] + "_" + timepart[1] ;

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: "development",
    entry: [
        // 'react-hot-loader/patch',
        './src/index.tsx' // your app's entry point
    ],
    devtool: 'eval-cheap-module-source-map',
    // devtool: 'source-map',  // this worked, trying cheap-module-eval-source-map
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                // https://www.npmjs.com/package/ts-loader
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
                issuer: /\.(j|t)sx?$/,
                use: [{ loader: '@svgr/webpack' }],
                // type: 'asset/inline'
                // type: "asset/resources"
            },
            {
                // don't use svgr for css
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.s?(a|c)ss$/,
                // loader: 'url-loader'
                // type: "asset/resources"
                type: 'asset/inline'
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                // loader: require.resolve('url-loader'),
                // type: "asset/resources",
                type: 'asset/inline',
                parser: {
                    maxSize: 10 * 1024 // 10kb
                },
                // generator: {
                // limit: 10000, // 10k
                // filename: 'static/media/[name].[hash:8].[ext]',
                // },
                // options: {
                //     limit: 10000, // 10k
                //     name: 'static/media/[name].[hash:8].[ext]',
                // },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve( __dirname, 'src' ),
            'node_modules'
        ],
        plugins: [
            /**
             * https://github.com/TypeStrong/ts-loader#baseurl--paths-module-resolution
             * https://github.com/dividab/tsconfig-paths-webpack-plugin/blob/master/README.md
             */
            new TsconfigPathsPlugin( { /*configFile: "./path/to/tsconfig.json" */ } )
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve( '.', 'dist' ),
        publicPath: "/"
    },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        contentBase: path.resolve( __dirname, 'dist' ),
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
        disableHostCheck: true,   // insecure , should use `public: 'sub.domain.tld`
        transportMode: 'ws'
        // clientLogLevel: 'warning',
        // open: true,
        // stats: 'errors-only'
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin( {
            // eslint: {
            //     files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            // }
        } ),
        // new webpack.NoEmitOnErrorsPlugin(),
        // https://www.npmjs.com/package/html-webpack-plugin
        // https://github.com/jantimon/html-webpack-plugin#options
        new HtmlWebpackPlugin( {
            // template: path.resolve(__dirname, 'src', 'index.html')
            inject: true, // testing
            template: 'src/index.html',
            favicon: 'src/favicon.png',
            meta: {
                "Commit Version": gitVersion,
                "Commit Date": gitDate
            }
        } ),
        new webpack.EnvironmentPlugin( {
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            // DEBUG: true, // Not currently used,
            HASURA_GRAPHQL_API_URL: process.env.HASURA_GRAPHQL_ENGINE_URL,
            HASURA_ACCESS_KEY: process.env.HASURA_GRAPHQL_ENGINE_PASSWORD,
            // GIT_VERSION: gitVersion,
            // GIT_AUTHOR_DATE: gitDate
        } ),
        new StatoscopeWebpackPlugin( {
            saveStatsTo: `./stats/${fileDateString}-[hash].json`,
            saveTo: `./stats/${fileDateString}-[hash].html`,
            additionalStats: glob.sync( './stats/*.json' ),
        } )
    ],
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM"
    // }
};
