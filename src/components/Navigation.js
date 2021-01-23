import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-menu">
                <li><NavLink className="nav-link" to="/dashboard" exact={true}>Dashboard</NavLink></li>
                <li><NavLink className="nav-link" to="/users" exact={true}>Users</NavLink></li>
                <li><NavLink className="nav-link" to="/about" exact={true}>About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;