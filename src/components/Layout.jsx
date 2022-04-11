import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContex } from '../context';
import Navbar from './UI/Navbar/Navbar';

const Layout = () => {
    const {isAuth} = useContext(AuthContex);

    return (
        <>
            {isAuth && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;