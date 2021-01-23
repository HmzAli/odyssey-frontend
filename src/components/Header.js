import React from 'react'
import Navigation from './Navigation'

const Header = ({loggedIn}) => {
    return (
        <header id="header">
            <h1 className="text-center mb-4"> Odyssey Front end </h1>

            {loggedIn ? <Navigation/> : ''}
        </header>
    )
}

export default Header