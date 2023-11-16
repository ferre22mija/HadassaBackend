// connect
const { Sequelize } = require('sequelize');
export const db = new Sequelize('sisventas', 'apd4v0gtqzftxtejbjj0', 'pscale_pw_wMiQ2fenpHxLVmunoYDi7e70CWwXsyJf7cTBgrknUeY', {
  host: 'aws.connect.psdb.cloud',
  dialect: 'mysql',
  port: '3306',
});
// export const db = new Sequelize('mysql://apd4v0gtqzftxtejbjj0:pscale_pw_wMiQ2fenpHxLVmunoYDi7e70CWwXsyJf7cTBgrknUeY@aws.connect.psdb.cloud/sisventas?sslaccept=strict')
export const testConnection = async () => {
  try {  
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


