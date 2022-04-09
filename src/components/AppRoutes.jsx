import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About'; 
import Posts from '../pages/Posts'; 
import Error from '../pages/Error'; 
import Home from '../pages/Home';
import PostSinglePage from '../pages/PostSinglePage';
import Layout from './Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route index element={ <Home /> } />
                <Route path="about" element={ <About /> }/>
                <Route path="posts" element={ <Posts /> }/>
                <Route path="posts/:postID" element={ <PostSinglePage /> }/>
                <Route path="*" element={ <Error />}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;