import express from "express";
import morgan from "morgan";
import { testConnection , SyncDataBase } from "./database/connection.js";

// import routes
import usuariosRoutes from "./routes/usuario.routes.js";

const app = express();

app.use(morgan('dev')); // muestra en consola las peticiones
app.use(express.json()); // peticiones en formato json
app.get('/', (req, res) => {
  // testConnection();
  // SyncDataBase();
  res.json('welcome');
})

//usando routes
app.use("/usuarios",usuariosRoutes);

export default app;