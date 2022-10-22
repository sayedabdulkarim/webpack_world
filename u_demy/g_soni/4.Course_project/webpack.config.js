const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    entry: {
        index: "./src/index.js",
        courses: "./src/pages/courses.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, " dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // only for css 
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ca]ss$/i,
                // only for css 
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
                // for adding image loader
                type: "asset/resource"
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            chunks: ["index"],
            inject: true,
            filename: "index.html"
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src/pages/courses.html"),
            chunks: ["courses"],
            inject: true,
            filename: "courses.html"
        }),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src/assets/images/*").replace(/\\/g, "/"),
                to: path.resolve(__dirname, "./ dist"),
                context: "src",
              }
            ],
          }),
        //   new BundleAnalyzerPlugin({})
      
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        static: "./ dist"
    },
}