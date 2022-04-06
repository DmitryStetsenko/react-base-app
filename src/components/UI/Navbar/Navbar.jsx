import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link to="/posts">Posts</Link></li>
                <li className="menu__item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;