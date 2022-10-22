const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: "8080",
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "./src"),
                exclude: path.resolve(__dirname, "./node_modules"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults"
                                    }
                                ],
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["postcss-preset-env", {}]
                            ]
                        }
                    }
                }]
            },
            {
                test: /\.s[ca]ss$/,
                // use: ["style-loader", "css-loader", "sass-loader"]
                use: [MiniCssExtractPlugin.loader, "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["postcss-preset-env", {}]
                            ]
                        }
                    }
                }, "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg|webp|gif)$/,
                type: "asset/resource"
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        } 
    }
}