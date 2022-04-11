import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { privateRoutes, publicRoutes } from '../router';

const AppRoutes = () => {
    let isAuth = true;
    
    return (
        <Routes>
            {isAuth
                ? 
                <Route path="/" element={ <Layout /> }>
                    {
                        privateRoutes.map((route) => {
                            return route.index 
                                ? <Route key={ route.path } index element={ route.component } />
                                : <Route key={ route.path } path={ route.path } element={ route.component } />
                        })
                    }
                </Route>
                :
                <Route path="/" element={ <Layout /> }>
                    {
                        publicRoutes.map((route) => {
                            return route.index 
                                ? <Route key={ route.path } index element={ route.component } />
                                : <Route key={ route.path } path={ route.path } element={ route.component } />
                        })
                    }
                </Route>
            }
        </Routes>
    );
};

export default AppRoutes;