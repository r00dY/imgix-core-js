var path = require('path');

module.exports = {
    entry: './src/imgix-core-js.js',
    output: {
        libraryTarget: "umd",
        library: "ImgixClient",
        path: path.resolve(__dirname, 'dist'),
        filename: "imgix-core-js.js"
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    }
};
