import api from '@/utils/api'
import { Associado_ano, Associados, AssociadosInstitucional } from '@/types/Associados';

class AssociadoService {

    static async getAnosAssociados(): Promise<Associado_ano[]> {
        try {
            const response = await api.get('/associados/ano');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar anos associados', error);
            throw error;
        }
    }

    static async getAssociadosInstitucional(): Promise<AssociadosInstitucional[]> {
        try {
            const response = await api.get<AssociadosInstitucional[]>('/instituicoes');
            console.log('response', response.data);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar associados institucional', error);
            throw error;
        }
    }

    static async getAssociadosByAno(ano: string): Promise<Associados> {
        const thisAno = (await this.getAnosAssociados()).find((a: Associado_ano) => a.ano === ano);
        if (!thisAno) {
            throw new Error(`Ano ${ano} não encontrado`);
        }

        try {
            const response = await api.get<Associados[]>(`/associados?ano_id=${thisAno.id}`);
            console.log('response', response.data[0]);
            return response.data[0];
        } catch (error) {
            console.error('Erro ao buscar associados do ano', error);
            throw error;
        }
    }


}

export default AssociadoService;