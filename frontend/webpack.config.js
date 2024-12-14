const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname), // Sets the working directory to `frontend`
    entry: './src/index.js', // Points to the correct entry file
    output: {
        path: path.resolve(__dirname, 'dist'), // Outputs files to `frontend/dist/`
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Transpile JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Points to the correct HTML file
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'), // Serve static files from `public/`
        },
        port: 3000,
        open: true,
        hot: true,
    },
};
