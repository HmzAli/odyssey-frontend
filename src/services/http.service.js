import axios from 'axios'
import { baseAPI } from './api.config'
import authService from './auth.service'

/**
 * Wrapper for http implementation allowing authenticated http calls
 */

const user = authService.getUser()
if (user && user.authToken) {
    axios.defaults.headers.common['Authorization'] = `bearer ${user.authToken}`
}

const get = (url) => axios.get(`${baseAPI}${url}`)
const post = (url, data) => axios.post(`${baseAPI}${url}`, data)
const _delete = (url) => axios.delete(`${baseAPI}${url}`)

const httpService = {
    get,
    post,
    _delete
}

export default httpService
