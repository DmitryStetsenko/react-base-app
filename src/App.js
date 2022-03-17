import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';


import './styles/App.css';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description3'},
        {id: 3, title: 'JavaScript3', body: 'description2'}
    ]);

	const [selectedSort, setSelectedSort] = useState('');

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortPost = (sort) => {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
	}

	return (
		<div className="App">
			<PostForm create={ createPost }/>
			<hr style={ {margin: '20px 0'} } />
			<MySelect 
				onChange={ sortPost }
				defaultValue="Сортировка"
				options={[
					{value: 'title', name: 'по названию'},
					{value: 'body', name: 'по описанию'}
				]}
			/>
			{ // условная отрисовка
				posts.length !== 0
					?<PostList remove={ removePost } posts={ posts } title="Список постов" />
					:<h2 style={ {textAlign: 'center'} }>Посты не найдены !!!</h2>

			}
			
		</div>
	);
}

export default App;



