import httpService from './http.service'
import authService from './auth.service'
import User from '../models/User.model'

/** 
 * Handles all user(s) operations
 */

const login = async (username, password) => httpService.post('/api/login', { username, password })
    .then(async ({data}) => {
        if (!data) {
            throw new Error('Failed to login. Unable to fetch user info')
        }
        if (!data.token) {
            throw new Error('Failed to login. No auth token found')
        }
    
        let loggedInUser = User.create(data.user)
        loggedInUser.authToken = data.token
        return loggedInUser
    })
    .catch(({response}) => {
        throw new Error(response.data.error)
    })

const getAll = async () => httpService.get('/api/users')
    .then(({data}) => data.map(User.create))
    .catch((error) => {
        throw new Error(error)
    })

const getOne = async id => httpService.get(`/api/users/${id}`)
    .then(user => User.create(user))
    .catch(({error}) => {
        throw new Error(error)
    })

const add = async (userData) => httpService.post('/api/users', userData)
    .catch(({response}) => {
        throw new Error(response.data.error)
    })

const _delete = async id => {
    if (authService.getUser().role !== 'admin') {
        throw new Error('Only an admin can perform this action')
    }

    return httpService._delete(`/api/users/${id}`)
        .catch(({error}) => {
            throw new Error(error)
        })
}

const usersService = {
    login,
    getAll,
    getOne,
    add,
    _delete
}

export default usersService
