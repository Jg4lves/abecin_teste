import api from "../api";
import { Gestao, GestaoPeriodo, Gestores } from "../../types/Gestao";

class GestaoService {

    static async get(): Promise<Gestores[]> {
        try {
            const response = await api.get<Gestores[]>('/gestao');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar gestao:', error);
            throw error;
        }
    }

    static async getPeriodos(): Promise<GestaoPeriodo[]> {
        try {
            const response = await api.get<GestaoPeriodo[]>('/gestao/periodo');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar periodos:', error);
            throw error;
        }
    }

    static async getGestaoByPeriodoId(periodo_id: number): Promise<Gestao> {
        try {
            const response = await api.get<Gestao>(`/gestao?periodo_id=${periodo_id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar gestao por periodo:', error);
            throw error;
        }
    }
}

export default GestaoService;