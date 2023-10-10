# HadassaBackend
Bakend de sistema Hadassa, ejecutar `npm i` para cargar node

# Configuracion inicial

### inicializar

- npm init -y

### instalar dependencias

npm i express bcryptjs cors dotenv jsonwebtoken sequelize mysql2 helmet nodemon

### modificaciones en package.json

`scripts : {
    "start" : "nodemon src/index.js"
}`

### instalar babel

npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D

### configurar preset

- agregar un archivo .babelrc
- dar el siguiente babelrc
{
    "presets":[
        "@babel/preset-env"
    ]
}
- cambiar packaje.json scripts 
    "scripts":{
        "start": "nodemon src/index.js --exec babel-node",
        "build": "babel src --out-dir build"
    }