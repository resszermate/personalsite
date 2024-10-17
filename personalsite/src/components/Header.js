import React from 'react';
import '../styles/Header.css'

function Header() {
    return (
        <header className="header">
        <img src="/images/logo.png" alt="My logo" className="logo"></img>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}

export default Header;