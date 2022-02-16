const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, '../src');
const build = path.resolve(__dirname, '../dist');

module.exports = {
    entry: path.resolve(src, 'index.ts'),
    output: {
        path: build,
        publicPath: '/',
        filename: '[name].bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: path.resolve(src, 'template.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
        ]

    },
    resolve: {
        modules: [src, 'node_modules'],
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        alias: {
            '@': src,
        },
    }
}
