module.exports = {
    entry: {
        trails: './app/trails.js'
    },
    output: {
        path: './jekyll/assets',
        filename: '[name].bundle.js',
        library: 'trails'
    },
    devtool: 'eval-source-map',
    target: 'web',
    bail: true,
    watch: true,
    externals: {
        openlayers: 'ol',
        'trails.json': 'trails.json'
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