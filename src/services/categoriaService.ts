import { appDataSource } from '../database/appDataSource.js';
import Categoria from '../entities/Categoria.js';
import { AppError } from '../errors/AppError.js';

class CategoriaService {
    private categoriaRepository = appDataSource.getRepository(Categoria);

}

export default CategoriaService;