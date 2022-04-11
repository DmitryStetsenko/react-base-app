import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContex } from '../context';
import Loader from './UI/loader/Loader';

const AppRoutes = () => {
    let {isAuth, isLoading} = useContext(AuthContex);
    
    if (isLoading) {
        return <Loader />
    }

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