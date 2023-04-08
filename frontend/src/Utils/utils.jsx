import axios from 'axios'

const axiosApi = () => {
  const api = axios.create({baseURL: process.env.REACT_SERVER_HOST})
  
  return api
  
}

const instance = axiosApi();

export default instance