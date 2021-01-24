import { React } from 'react'
import { NavLink } from 'react-router-dom';

import UserItem from '../UserItem'

const UserList = (props) => (
    <div className="users-wrapper">
        {!props.users.length ? <p className="placeholder">No users found</p> :
            <ul className="users-list">
                <li className="row text-muted list-heading mb-3">
                    <div className="col-sm-1"> ID </div>
                    <div className="col-sm-2"> Name </div>
                    <div className="col-sm-3"> Email</div>
                    <div className="col-sm-2"> Username </div>
                    <div className="col-sm-2"> Role </div>
                    <div className="col-sm-2"> </div>
                </li>

                {props.users.map(user => <UserItem key={user.id} user={user} deleteUser={props.deleteUser}/>)}
            </ul>}

        <NavLink className="btn btn-primary" to="/add-user"> Add new user</NavLink>
    </div>
)


export default UserList