// src/routes/auth.routes.js

import express from "express";

import * as usuarioController from "./../controllers/usuario.controller.js";

const router = express.Router();


// Define your routes here
router.get("/", usuarioController.getUsuarios); //getAll
router.post("/", usuarioController.createUsuario); //create
router.get("/:id", usuarioController.getUsuario); //getOneById
router.put("/:id", usuarioController.updateUsuario); //updateById
router.delete("/:id", usuarioController.deleteUsuario); //deleteById


export default router; 