import { appDataSource } from '../database/appDataSource.js';
import Produto from '../entities/Produto.js';
import { AppError } from '../errors/AppError.js';

class ProdutoService {
    private produtoRepository = appDataSource.getRepository(Produto);

}

export default ProdutoService;