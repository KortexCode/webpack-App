const fs = require("fs"); //file system, un objeto(módulo) de node.
fs.writeFileSync("./.env", `API=${process.env.API}\n`);
//Este script se correrá a nivel del servidor y este método que se
//está escribiendo creará un archivo .env y le agregará la variable
//API con los datos de nuestra API en el archivo original .env del proyecto