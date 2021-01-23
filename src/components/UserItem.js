import React from 'react'

const UserItem = ({id, name, email, username, role}) => (
    <li className="row">
        <div className="col-sm-2"> {id} </div>
        <div className="col-sm-2"> {name} </div>
        <div className="col-sm-2"> {email} </div>
        <div className="col-sm-2"> {username} </div>
        <div className="col-sm-2"> {role} </div>
        <div className="col-sm-2"> <button class="btn btn-danger"> Delete</button> </div>
    </li>
)

export default UserItem