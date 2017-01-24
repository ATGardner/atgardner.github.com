module.exports = {
    entry: './app/index.js',
    output: {
        path: './jekyll/assets',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['latest'],
                }
            }
        ]
    }
}