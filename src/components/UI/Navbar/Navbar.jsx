import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {setIsAuth} = useContext(AuthContex);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link to="/">Home</Link></li>
                <li className="menu__item"><Link to="/posts">Posts</Link></li>
                <li className="menu__item"><Link to="/about">About</Link></li>
            </ul>

            <div className="menu__logout">
                <MyButton onClick={ logout }>Выйти</MyButton>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;