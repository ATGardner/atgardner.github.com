module.exports = {
    entry: {
        trails: './src/trails.js'
    },
    output: {
        path: './jekyll/assets/trails',
        filename: '[name].bundle.js',
        library: 'trails'
    },
    devtool: 'eval-source-map',
    target: 'web',
    bail: true,
    watch: true,
    externals: {
        openlayers: 'ol'
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