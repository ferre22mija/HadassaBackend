import express from "express";
import morgan from "morgan";
import { testConnection } from "./database/connection.js";
const app = express();

app.use(morgan('dev')); // muestra en consola las peticiones
app.get('/', (req, res) => {
  testConnection();
  res.json('welcome');
})
export default app;