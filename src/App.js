import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';
import PostFilter from './components/PostFilter';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description3'},
        {id: 3, title: 'JavaScript3', body: 'description2'}
    ]);
	
	const [filter, setFilter] = useState({sort: '', query: ''});

	const sortedPost = useMemo(() => {
		console.log('sorted')
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchPost = useMemo(() => {
		return sortedPost.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPost]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<div className="App">
			<PostForm create={ createPost }/>
			<hr style={ {margin: '20px 0'} } />
			<PostFilter filter={ filter } setFilter={ setFilter } />
			
			{ // условная отрисовка
				sortedAndSearchPost.length !== 0
					?<PostList remove={ removePost } posts={ sortedAndSearchPost } title="Список постов" />
					:<h2 style={ {textAlign: 'center'} }>Посты не найдены !!!</h2>

			}
			
		</div>
	);
}

export default App;



