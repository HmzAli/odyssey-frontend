import { React, Component } from 'react'

import UserContext from '../user-context'

class UserItem extends Component {
    constructor() {
        super()
    }

    get canDelete() {
        const user = this.context
        return user.id !== this.props.user.id && user.role === 'admin'
    }

    static contextType = UserContext

    render() {
        const user = this.props.user
    
        return (
            <li className="row mb-2">
                <div className="col-sm-1"> {user.id} </div>
                <div className="col-sm-2"> {user.name} </div>
                <div className="col-sm-3"> {user.email} </div>
                <div className="col-sm-2"> {user.username} </div>
                <div className="col-sm-2"> {user.role} </div>
     
                <div className="col-sm-2"> <button className="btn btn-danger" disabled={!this.canDelete}> Delete</button> </div>
            </li>
        )
    }
}

export default UserItem