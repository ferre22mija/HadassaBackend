// Funcion modelo
import {DataTypes} from "sequelize";
import {db} from "./../../database/connection.js";

import {Modulo} from "./Modulo.js";

export const Funcion = db.define("Funcion",{
  nombre:{
    type:DataTypes.STRING
  },
})

//relacion
Modulo.hasMany(Funcion);
Funcion.belongsTo(Modulo);