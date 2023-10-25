const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    devServer: {
        static: "../dist",
        hot: true,
        compress: true,
        open: true,
        port: 8564,
        },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".js", ".jsx"],
        },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
                },
            ],
        },
    plugins: [
        new HtmlWebpackPlugin({
            name: "index.html",
            inject: false,
            template: "./dist/index.html",
            }),
        ],
}