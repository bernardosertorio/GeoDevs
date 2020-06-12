import axios from 'axios'; // fazendo a chamada api. Complementando com as configurações feitas no backend.

const api = axios.create({
  baseURL: 'http//localhost:3333'
})

export default api;