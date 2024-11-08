import React from 'react';
import '../styles/NavBar.css'

function NavLinks() {
    return (
        <nav className="navlinks">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavLinks;