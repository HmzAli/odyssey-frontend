export default class User {
    constructor(id, name, username, email, role, authToken) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.role = role
        this.authToken = authToken
    }

    /**
     * Creates a new user from object
     * @params {object} an object representing a user
     *  
     * @returns {User} a new User instance
     */
    static create({id, name, username, email, role, token}) {
        return new User({
            id,
            name,
            username, 
            email,
            role,
            authToken: token
        })
    }
}
