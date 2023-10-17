// Rol modelo
import {DataTypes} from "sequelize";
import {db} from "./../../database/connection.js";
export const Rol = db.define("Rol",{
  nombre:{
    type:DataTypes.STRING
  },
  implicito:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
})
