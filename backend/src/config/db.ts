import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
//for database user and password
const dbase = mysql.createPool(process.env.DATABASE_URL as string);

export default dbase;
