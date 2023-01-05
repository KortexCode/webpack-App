/** @type {import('webpack').Configuration} */

//path es un elemento disponible dentro de node.js
const path = require("path");
//Crear un módulo que se va a exportar conteniendo un objeto con la configuración deseada

module.exports = {
    entry: "./src/index.js",
    output: {
        //resolve permite conocer donde se encuentra nuestro proyecto(el optimizado)
        path: path.resolve(__dirname, "dist"),
        //Nombre al .js(optimizado) resultante dentro de la carpeta dist
        filename: 'main.js',
    },
    resolve: {
        //Para identificar con que extensiones va a trabajar
        extensions: [".js"],    
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,//para que utilice los .mjs o sino los .js
                exclude: /node_modules/,//para que no busque extensiones .js o mjs en node_modules
                use:{
                    loader: "babel-loader",//Este es el cargador para usar babel con webpack
                }
            }
        ]
    }
}