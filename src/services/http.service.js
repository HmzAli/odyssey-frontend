import axios from 'axios'
import { baseAPI } from './api.config'
import authService from './auth.service'

/**
 * Wrapper for http implementation allowing authenticated http calls
 */

const getHeader = async () => {
    const authToken = await authService.getUser().authToken
        .catch(error => {
            throw new Error(`Unable to fetch auth token: ${error.message}`)
        })

    return {
        'Authorization': `bearer ${authToken}`
    }
}

const get = (url) => axios.get(`${baseAPI}${url}`, getHeader())
const post = (url, data) => axios.post(`${baseAPI}${url}`, data, getHeader())
const _delete = (url) => axios.delete(`${baseAPI}${url}`, getHeader())

const httpService = {
    get,
    post,
    _delete
}
export default httpService
