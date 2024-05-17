import axiosClient from './axiosClient';

const APIService = {
    login: async (email : string, password: string) => {
        try {
          const response = await axiosClient.post('/login/', { email, password});
          const tokens = response.data.tokens
          if (tokens && tokens.access) {
            localStorage.setItem('accessToken', tokens.access)
          }
          return `${response.status} ${response.statusText}`
        } catch (error) {
          throw error
        }
      },
    
      // Exemplo de função para fazer um GET, lembre-se de incluir o token de autorização se necessário
      fetchData: async () => {
        try {
          const response = await axiosClient.get('/profile')
          return response.data;
        } catch (error) {
          throw error
        }
      }
    }
    

export default APIService;
