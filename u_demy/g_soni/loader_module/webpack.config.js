const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, " dist"),
        assetModuleFilename: "images/[hash][ext]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // for css module
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader", options: { modules: true } },
                ]
                // only for css 
                // use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ca]ss$/i,
                // for scss module
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader"}
                ]
                // only for css 
                // use: ["style-loader", "css-loader"],
            },
            {
                test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
                // for adding image loader
                type: "asset/resource"
            },
            {
                test: /.(ttf|woff|woff2)$/i,
                // for adding image loader
                type: "asset/resource"
            },
        ]
    }
}