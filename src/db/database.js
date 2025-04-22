import mysql from "promise-mysql";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Configuración de la base de datos
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // aquí era 'pass', pero debe ser 'password'
  database: process.env.DB_NAME,
};

// Crear y exportar la conexión
const connection =  mysql.createConnection(dbConfig);

const getConnection = ()=>{
  return connection
}
export default getConnection;