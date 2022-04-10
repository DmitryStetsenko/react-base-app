import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import PostSinglePage from "../pages/PostSinglePage";

export const routes = [
    {path: '', component: <Home />, index: true},
    {path: 'about', component: <About />, index: false},
    {path: 'posts', component: <Posts />, index: false},
    {path: 'posts/:postID', component: <PostSinglePage />, index: false},
    {path: '*', component: <Error />, index: false},
];