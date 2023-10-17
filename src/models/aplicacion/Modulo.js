// Modulo modelo
import {DataTypes} from "sequelize";
import {db} from "./../../database/connection.js";
export const Modulo = db.define("Modulo",{
  nombre:{
    type:DataTypes.STRING
  },
})