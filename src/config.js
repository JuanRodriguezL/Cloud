// Aquí puedes leer las variables de entorno del archivo .env
import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  database: process.env.DB_NAME
};
