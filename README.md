# HadassaBackend
Bakend de sistema Hadassa, ejecutar `npm i` para cargar node y para correr el proyecto con `npm run dev`

# Configuracion inicial

### inicializar

- npm init -y

### instalar dependencias

npm i express bcryptjs cors dotenv jsonwebtoken sequelize mysql2 helmet nodemon

### modificaciones en package.json

```
scripts : {
    "start" : "nodemon src/index.js"
}
```

### instalar babel

npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D

### configurar preset

- agregar un archivo .babelrc con el siguiente contenido
```
{
    "presets":[
        "@babel/preset-env"
    ]
}
```

- cambiar packaje.json scripts 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js --exec babel-node",
    "start":"node build/index.js",
    "build": "babel src --out-dir build"
  }
```
    