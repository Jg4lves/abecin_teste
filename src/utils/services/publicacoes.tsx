import api from '@/utils/api'
import { ColecaoProp, CategoriasProp } from '@/app/publicacoes/outras/page';

class PublicacoesService {

    static async getCategorias(): Promise<CategoriasProp[]> {
        try {
            const response = await api.get<CategoriasProp[]>('/publicacoes/categorias')
            return response.data
        } catch (error) {
            console.error('Erro ao buscar as categorias', error);
            throw error;
        }
    }

    static async getCategoriasPorId(id: string): Promise<CategoriasProp> {
        try {
            const response = await api.get<CategoriasProp[]>(`/publicacoes/categorias/`)
            const categoria = response.data.find((categoria: CategoriasProp) => categoria.id === Number(id))
            if (!categoria) {
                throw new Error(`Categoria com ID ${id} não encontrada`);
            }
            return categoria
        } catch (error) {
            console.error(`Erro ao buscar a categoria com ID ${id}`, error);
            throw error;
        }
    }

    static async getPublicacaoPorCategoria(id: string): Promise<ColecaoProp[]> {
        try {
            const response = await api.get<ColecaoProp[]>(`/publicacoes?categoria_id=${id}`)
            return response.data
        } catch (error) {
            console.error(`Erro ao buscar publicacoes da categoria:${id}`, error);
            throw error;
        }
    }
}

export default PublicacoesService;