import axios from 'axios'
const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001'
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http'

const axiosApi = () => {
  const api = axios.create({baseURL: `${PROTOCOL}://${HOST}`})
  
  return api
  
}

const instance = axiosApi();

export default instance