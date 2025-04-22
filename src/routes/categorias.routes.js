import { Router } from "express";
import { metodosHTTP as categoriaController } from "../controllers/categorias.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);
router.get("/:id", categoriaController.getCategoria);
router.delete("/:id", categoriaController.deletecategoria);
router.put("/:id", categoriaController.updateCategorias);

export default router;
