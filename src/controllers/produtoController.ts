import type { Request, Response } from "express";
import type ProdutoService from "../services/produtoService.js";

export default class ProdutoController {
    private produtoService: ProdutoService;

    constructor(produtoService: ProdutoService) {
        this.produtoService = produtoService;
    }

}