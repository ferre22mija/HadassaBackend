// Usuario modelo
import {DataTypes} from "sequelize";
import {db} from "./../../database/connection.js";

//one to many
import Rol from "./Rol.js";

export const Usuario = db.define('Usuario', {
    correo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    }
});

//relacion
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);