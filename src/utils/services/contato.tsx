import api from '@/utils/api'

class ContatoService {

    static async get(): Promise<any> {
        try {
            const response = await api.get('/contatos');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar contatos:', error);
            throw error;
        }
    }
}


export default ContatoService;