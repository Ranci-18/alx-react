
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: "development",
    devServer: {
        static: './dist',
        hot: true,
        compress: true,
        open: true,
        port: 8086,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            byPassOnDebug: true,
                        },
                    },]
            }
        ],
    },
}