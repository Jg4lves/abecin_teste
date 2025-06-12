import api from "../api";
import { Concurso, Concurso_ano } from "@/types/Concurso";

class ConcursosService {

    static async getConcursos(): Promise<Concurso_ano[]> {
        try {
            const response = await api.get<Concurso_ano[]>('/concursos/anos');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar concursos:', error);
            throw error;
        }
    }

    static async getConcursoPorAno(ano: string): Promise<Concurso> {
        try {
            // First get all anos to find the correct ID
            const anos = await this.getConcursos();
            const anoConcurso = anos.find(a => a.ano === ano);

            if (!anoConcurso) {
                throw new Error("Nenhum Concurso encontrado para este ano.");
            }

            const response = await api.get<Concurso[]>(`/concursos?ano_id=${anoConcurso.id}`);
            if (!response.data || response.data.length === 0) {
                throw new Error("Nenhum Concurso encontrado para este ano.");
            }
            return response.data[0];
        } catch (error) {
            console.error('Erro ao buscar concurso:', error);
            throw error;
        }
    }

}

export default ConcursosService;