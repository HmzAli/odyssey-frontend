import httpService from './http.service'
import authService from './auth.service'
import User from './model/User.model'

/** 
 * Handles all user(s) operations
 */

const login = async (username, password) => httpService.post('/api/login', { username, password })
    .then(async userResponse => {
        if (!user) {
            throw new Error('Failed to login. Unable to fetch user info')
        }
        if (!userResponse.token) {
            throw new Error('Failed to login. No auth token found')
        }

        const newUser = User.create(userResponse)
        await authService.saveUser(newUser)
    })
    .catch(({error}) => {
        throw new Error(error)
    })

const getAll = async () => httpService.get('/api/users')
    .then(usersResponse => usersResponse.map(User.create))
    .catch(({error}) => {
        throw new Error(error)
    })

const getOne = async id => httpService.get(`/api/users/${id}`)
    .then(user => User.create(user))
    .catch(({error}) => {
        throw new Error(error)
    })

const add = async (userData) => httpService.post('/api/users', userData)
    .catch(({error}) => {
        throw new Error(error)
    })

const _delete = async id => httpService._delete(`/api/users/${id}`)
    .catch(({error}) => {
        throw new Error(error)
    })

export default {
    login,
    getAll,
    getOne,
    add,
    _delete
}
