import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://abecin.org.br/wp-json/api';
const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api