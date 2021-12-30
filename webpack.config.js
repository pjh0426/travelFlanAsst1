const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3010,
        static:'./public',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|less|css|scss)$/,
                use:[
                    // to create a minified separate css file when compiling for PROD
                    // MiniCssExtractPlugin.loader
                    'style-loader', 
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    // to create a minified separate css file when compiling for PROD
    // plugins: [new MiniCssExtractPlugin()], 
};