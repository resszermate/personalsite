import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Desktop />
            <Mobile />
        </div>
    )
}

export default NavBar;