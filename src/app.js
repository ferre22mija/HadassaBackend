import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan('dev')); // muestra en consola las peticiones
app.get('/',(req,res)=>{
    res.json('welcome');
})
export default app;