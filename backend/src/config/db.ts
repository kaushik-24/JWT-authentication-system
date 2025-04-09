import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
//for database user and password
const dbase = mysql.createPool({
  host: 'interchange.proxy.rlwy.net',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'MySQL',
});

export default dbase;
dbase.query('SELECT 1').then(() => console.log('DB connected')).catch(err => console.error(err));
