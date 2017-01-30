module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};
