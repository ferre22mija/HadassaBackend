import { db } from "../database/connection";
import { Funcion } from "./aplicacion/Funcion";
import { Modulo } from "./aplicacion/Modulo";
import { Usuario } from "./seguridad/Usuario";
import { RolFuncion } from "./seguridad/RolFuncion";
import { Rol } from "./seguridad/Rol";
export const SyncDataBase = async()=>{
    try{
      await db.sync();
      console.log('Database has been synced successfully.');
    }catch(error){
      console.error('Unable to sync the database:', error);
    }
  }