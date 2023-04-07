import axios from 'axios'

const axiosApi = () => {
  const api = axios.create({baseURL: 'http://localhost:3001'})
  
  return api
  
}

const instance = axiosApi();

export default instance