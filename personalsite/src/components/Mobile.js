import React from 'react';
import NavLinks from './NavLinks'
import '../styles/NavBar.css'

function Mobile() {
    return (
        <nav className="mobile">
            <img src="/images/logo.png" alt="My logo" className="logo"></img>
            <NavLinks />
        </nav>
    );
}

export default Mobile;