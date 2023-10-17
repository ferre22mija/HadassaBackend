import { Usuario } from "./../models/seguridad/Usuario.js";
// importacion solo para ver como esta en la bd
import { Rol } from "./../models/seguridad/Rol.js";
import { Modulo } from "./../models/aplicacion/Modulo.js";
import { Funcion } from "./../models/aplicacion/Funcion.js";
import { RolFuncion } from "./../models/seguridad/RolFuncion.js";

export const getUsuarios = async (req, res) => { //getUsuarios
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
}

export const getUsuario = async (req, res) => { //getUsuario
  const usuario = await Usuario.findByPk(req.params.id)
  res.status(201).json(usuario);
}

export const createUsuario = async (req, res) => { //createUsuario
  const { correo, contrasena } = req.body
  const nuevoUsuario = Usuario.build({ correo, contrasena });
  // await nuevoUsuario.save();
  res.status(201).json(nuevoUsuario);
}

export const updateUsuario = (req, res) => { //updateUsuario
  res.json('updateUsuario');
}

export const deleteUsuario = (req, res) => { //deleteUsuario
  res.json("deleteUsuario");
}