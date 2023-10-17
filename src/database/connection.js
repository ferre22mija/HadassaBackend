// connect
const { Sequelize } = require('sequelize');
export const db = new Sequelize('railway', 'root', 'QKtAfiRVxvaBvBkQR95q', {
  host: 'containers-us-west-114.railway.app',
  dialect: 'mysql',
  port: '5784'
});

export const testConnection = async () => {
  try {  
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export const SyncDataBase = async()=>{
  try{
    await db.sync();
    console.log('Database has been synced successfully.');
  }catch(error){
    console.error('Unable to sync the database:', error);
  }
}

