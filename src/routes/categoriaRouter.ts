import { Router } from "express";
import CategoriaController from "../controllers/categoriaController.js";
import CategoriaService from "../services/categoriaService.js";
import { validarBody } from "../middleware/validateBody.js";
import { createCategoriaSchema } from "../validates/createCategoriaSchema.js";


const categoriaRoutes = Router();
const categoriaService = new CategoriaService();
const categoriaController = new CategoriaController(categoriaService);

categoriaRoutes.post("/categorias", validarBody(createCategoriaSchema), (req, res) => categoriaController.create(req, res));
categoriaRoutes.get("/categorias", (req, res) => categoriaController.findAll(req, res));
categoriaRoutes.get("/categorias/:id", (req, res) => categoriaController.findById(req, res));
categoriaRoutes.put("/categorias/:id", (req, res) => categoriaController.update(req, res));
categoriaRoutes.delete("/categorias/:id", (req, res) => categoriaController.delete(req, res));
categoriaRoutes.get("/categorias/:id/produtos", (req, res) => categoriaController.getProdutosByCategoria(req, res));

export default categoriaRoutes;