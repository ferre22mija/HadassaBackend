import { db } from "../database/connection";
import { Rol } from "./seguridad/Rol";
import { Modulo } from "./aplicacion/Modulo";
import { Funcion } from "./aplicacion/Funcion";

import { Usuario } from "./seguridad/Usuario";
import { RolFuncion } from "./seguridad/RolFuncion";

export const SyncDataBase = async()=>{
    try{
      
      await db.sync();
      console.log('Database has been synced successfully.');
    }catch(error){
      console.error('Unable to sync the database:', error);
    }
  }