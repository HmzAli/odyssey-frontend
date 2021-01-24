import axios from 'axios'
import { baseAPI } from './api.config'
import authService from './auth.service'

/**
 * Wrapper for http implementation allowing authenticated http calls
 */

const authToken = authService.getUser().authToken
if (authToken) {
    axios.defaults.headers.common['Authorization'] = `bearer ${authToken}`
}

const getHeader = () => {
    const user = authService.getUser()

    if (!!user && user.authToken) {
        return {
            'Authorization': `bearer ${user.authToken}`
        }
    }

    return {}
}

const get = (url) => {
    return axios.get(`${baseAPI}${url}`)
}
const post = (url, data) => axios.post(`${baseAPI}${url}`, data, getHeader())
const _delete = (url) => axios.delete(`${baseAPI}${url}`, getHeader())

const httpService = {
    get,
    post,
    _delete
}
export default httpService
