const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchApi(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${baseUrl}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  }
  return response.json();
}