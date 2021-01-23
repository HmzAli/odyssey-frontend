import lockr from 'lockr'

/**
 * Saves and fetches logged in user to/from local storage
 */

const saveUser = async (user) => {
    if (!user) {
        throw new Error('No user provided')
    }

    if (!user.token) {
        throw new Error('User has no auth token')
    }

    return lockr.set('user', user)
}

const getUser = async () => {
    const user = lockr.get('user')

    if (!user) {
        throw new Error('No logged in user found')
    }
}

export {
    saveUser,
    getUser
}