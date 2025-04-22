import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from 'cors';

const app = express();

// Rutas
app.use("/api/categorias", categoriasRoutes);
app.use(cors());
app.use(express.json)
app.set("port", 5000);

export default app;