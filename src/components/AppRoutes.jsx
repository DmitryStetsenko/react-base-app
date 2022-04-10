import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { routes } from '../router';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Layout /> }>
                {
                    routes.map((route) => {
                        return route.index 
                                ? <Route key={ route.path } index element={ route.component } />
                                : <Route key={ route.path } path={ route.path } element={ route.component } />
                    })
                }
            </Route>
        </Routes>
    );
};

export default AppRoutes;