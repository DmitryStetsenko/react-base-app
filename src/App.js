import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


import './styles/App.css';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description'},
        {id: 2, title: 'JavaScript2', body: 'description'},
        {id: 3, title: 'JavaScript3', body: 'description'}
    ]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	return (
		<div className="App">
			<PostForm create={ createPost }/>
			<PostList posts={ posts } title="Список постов" />
		</div>
	);
}

export default App;



