import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";

const app = express();

// Rutas
app.use("/api/categorias", categoriasRoutes);

app.set("port", 5000);

export default app;