/** @type {import('webpack').Configuration} */

//path es un elemento disponible dentro de node.js
const path = require("path");
//plugins de webpack a usar
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//Crear un módulo que se va a exportar conteniendo un objeto con la configuración deseada
module.exports = {
    entry: "./src/index.js",
    output: {
        //resolve permite conocer donde se encuentra nuestro proyecto(el optimizado)
        path: path.resolve(__dirname, "dist"),
        //Nombre al .js(optimizado) resultante dentro de la carpeta dist
        filename: '[name].[contenthash].js',//para 
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: "development",
    devtool:"source-map",
    resolve: {
        //Para identificar con que extensiones va a trabajar
        extensions: [".js"],    
        alias: {
            "@utils": path.resolve(__dirname, "src/utils"),
            "@templates": path.resolve(__dirname, "src/templates"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@images": path.resolve(__dirname, "src/assets/images"),
        }
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,//para que utilice los .mjs o sino los .js
                exclude: /node_modules/,//para que no busque extensiones .js o mjs en node_modules
                use:{
                    loader: "babel-loader",//Este es el cargador para usar babel con webpack
                }
            },
            {
                test: /\.css|styl$/i,//para que utilice los .mjs o sino los .js
                use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],          
            },
            {
                test: /\.png/, //para que utilice los .png
                type: "asset/resource"           
            },
            {
                test: /\.woff|woff2$/i, //para que utilice los woff y woff2
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[hash][ext][query]'
                }
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin(
        {
            filename: "index.html",
            title: "PROFILE APP",
            inject: true,  
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({filename:"assets/[name].[contenthash].css"}),
        new Dotenv(),
        new BundleAnalyzerPlugin()
          
    ], 
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3006,
    },
    

    
}