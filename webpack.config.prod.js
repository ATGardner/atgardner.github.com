module.exports = {
    entry: {
        trails: './app/trails.js'
    },
    output: {
        path: './jekyll/assets/trails',
        filename: '[name].bundle.js',
        library: 'trails'
    },
    devtool: 'source-map',
    target: 'web',
    bail: true,
    watch: false,
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