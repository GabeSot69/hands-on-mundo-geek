import type { Request, Response } from "express";
import type CategoriaService from "../services/categoriaService.js";

export default class CategoriaController {
    private categoriaService: CategoriaService;

    constructor(categoriaService: CategoriaService) {
        this.categoriaService = categoriaService;
    }

}