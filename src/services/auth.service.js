import lockr from 'lockr'

/**
 * Saves and fetches logged in user to/from local storage
 */

const saveUser = (user) => {
    if (!user) {
        throw new Error('No user provided')
    }

    if (!user.authToken) {
        throw new Error('User has no auth token')
    }

    return lockr.set('user', user)
}

const getUser = () => lockr.get('user') || null

const clearUser = () => lockr.rm('user')

const authService = {
    saveUser,
    getUser,
    clearUser
}

export default authService