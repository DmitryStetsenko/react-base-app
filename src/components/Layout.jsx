import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;