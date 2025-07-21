import axios from 'axios'

const baseURL = process.env.API_URL

const axiosApi = axios.create({
    baseURL,
    withCredentials: true,
})

export default axiosApi
