import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseUrl: 'http://46.101.167.54/',
    // baseURL: 'http://localhost:3000/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
