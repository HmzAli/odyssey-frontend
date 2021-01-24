export default class User {
    constructor(id, name, username, email, role) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.role = role
        this.authToken = null
    }

    /**
     * Creates a new user from object
     * @params {object} an object representing a user
     *  
     * @returns {User} a new User instance
     */
    static create({id, name, username, email, role}) {
        return new User(id, name, username, email, role)
    }
}
