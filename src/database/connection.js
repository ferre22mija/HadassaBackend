// connect
const { Sequelize } = require('sequelize');
export const db = new Sequelize('hadassadb', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
});
// export const db = new Sequelize('mysql://ph1fphgg1th8lfggok86:pscale_pw_wMiQ2fenpHxLVmunoYDi7e70CWwXsyJf7cTBgrknUeY@aws.connect.psdb.cloud/sisventas?ssl={"rejectUnauthorized":false}')
export const testConnection = async () => {
  try {  
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


