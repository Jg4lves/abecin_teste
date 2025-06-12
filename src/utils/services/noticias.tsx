import api from "../api";
import Noticia from "../../types/Noticia";

class NoticiasService {
    
    static async getNoticias(): Promise<Noticia[]> {
        try {
            const response = await api.get<Noticia[]>('/noticias');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar noticias:', error);
            throw error;
        }
    }

    static async getNoticiaPorId(id: string): Promise<Noticia> {
        try {
            const response = await api.get<Noticia>(`/noticias/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar noticia:', error);
            throw error;
        }
    }
    
    static async searchNoticias(query: string): Promise<Noticia[]> {
        try {
            const response = await api.get<Noticia[]>(`/noticias?search=${query}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar noticias:', error);
            throw error;
        }
    }

}

export default NoticiasService;