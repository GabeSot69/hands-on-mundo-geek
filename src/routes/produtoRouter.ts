import { Router } from "express";
import { validarBody } from "../middleware/validateBody.js";
import { createProdutoSchema } from "../validates/createProdutoSchema.js";
import ProdutoController from "../controllers/produtoController.js";
import ProdutoService from "../services/produtoService.js";


const produtoRoutes = Router();
const produtoService = new ProdutoService();
const categoriaController = new ProdutoController(produtoService);

produtoRoutes.post("/produtos", validarBody(createProdutoSchema), (req, res) => categoriaController.create(req, res));
produtoRoutes.get("/produtos", (req, res) => categoriaController.findAll(req, res));
produtoRoutes.get("/produtos/:id", (req, res) => categoriaController.findById(req, res));
produtoRoutes.put("/produtos/:id", (req, res) => categoriaController.update(req, res));
produtoRoutes.delete("/produtos/:id", (req, res) => categoriaController.delete(req, res));
produtoRoutes.get("/produtos/:id/categorias", (req, res) => categoriaController.getCategoriaByProduto(req, res));

export default produtoRoutes;