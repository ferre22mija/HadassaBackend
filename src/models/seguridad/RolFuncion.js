// RolFuncion modelo
import {DataTypes} from "sequelize";
import {db} from "./../../database/connection.js";

import { Funcion } from "./../aplicacion/Funcion.js";
import { Rol } from "./Rol.js";

export const RolFuncion = db.define("RolFuncion",{
  activo:{
    type:DataTypes.BOOLEAN,
    defaul:true
  },
})

//relacion
Rol.hasMany(RolFuncion);
RolFuncion.belongsTo(Rol);

Funcion.hasMany(RolFuncion);
RolFuncion.belongsTo(Funcion);