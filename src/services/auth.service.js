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

const getUser = () => {
    const user = lockr.get('user')

    if (!!user) {
        return user
    }
}

const clearUser = () => {
    lockr.rm('user')
}

const authService = {
    saveUser,
    getUser,
    clearUser
}

export default authService