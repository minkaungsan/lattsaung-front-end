import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.lattsaung.com',
  //baseURL: 'http://localhost/api/public',
  headers: {'Access-Control-Allow-Origin': 'https://lattsaung.com'}
})

export default instance