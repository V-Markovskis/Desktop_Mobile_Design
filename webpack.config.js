const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets',
                },
            ],
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['src/**/*.html'],
        open: false, // open browser on 'npm start'
    },

    mode: 'development',
};
