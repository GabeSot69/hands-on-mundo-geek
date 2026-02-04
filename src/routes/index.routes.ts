import { Router } from "express";
import categoriaRoutes from "./categoriaRouter.js";
import produtoRoutes from "./produtoRouter.js";


const indexRouter = Router();

indexRouter.use(categoriaRoutes);
indexRouter.use(produtoRoutes)

export default indexRouter;