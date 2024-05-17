import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
  headers: {
    common: {
      'Accept': 'application/json;version=v1_web',
      'Content-Type': 'application/json'
    }
  }
})


axiosClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  
  axiosClient.interceptors.response.use(
    (response) => {
      const tokens = response.data.tokens;
      if (tokens && tokens.access) {
        localStorage.setItem('accessToken', tokens.access);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  )
  
  export default axiosClient