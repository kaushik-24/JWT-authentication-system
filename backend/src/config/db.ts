import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbase = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'task_manager',
});

export default dbase;
dbase.query('SELECT 1').then(() => console.log('DB connected')).catch(err => console.error(err));
