import { React } from 'react'

import UserItem from './UserItem'

const UserList = ({users}) => (
    <div className="users-wrapper">
        {!users.length ? <p className="placeholder">No users found</p> :
            <ul className="users-list">
                <li className="row text-muted list-heading mb-3">
                    <div className="col-sm-1"> ID </div>
                    <div className="col-sm-2"> Name </div>
                    <div className="col-sm-3"> Email</div>
                    <div className="col-sm-2"> Username </div>
                    <div className="col-sm-2"> Role </div>
                    <div className="col-sm-2"> </div>
                </li>

                {users.map(user => <UserItem key={user.id} user={user} />)}
            </ul>}

        <a className="btn btn-primary" href="/new-user">Add new user</a>
    </div>
)


export default UserList