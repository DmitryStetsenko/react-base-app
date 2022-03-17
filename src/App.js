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
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id != post.id));
	}

	return (
		<div className="App">
			<PostForm create={ createPost }/>
			{ // условная отрисовка
				posts.length !== 0
					?<PostList remove={ removePost } posts={ posts } title="Список постов" />
					:<h2 style={ {textAlign: 'center'} }>Посты не найдены !!!</h2>

			}
			
		</div>
	);
}

export default App;



