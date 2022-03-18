import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


import './styles/App.css';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description3'},
        {id: 3, title: 'JavaScript3', body: 'description2'}
    ]);
	
	const [selectedSort, setSelectedSort] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	const sortedPost = useMemo(() => {
		console.log('sorted')
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}

		return posts;
	}, [selectedSort, posts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortPost = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className="App">
			<PostForm create={ createPost }/>
			<hr style={ {margin: '20px 0'} } />
			<div>
				<MyInput 
					type="text"
					value={ searchQuery }
					onChange={ e =>  setSearchQuery(e.target.value)}
				/>
				<MySelect
					value={ selectedSort }
					onChange={ sortPost }
					defaultValue="Сортировка"
					options={[
						{value: 'title', name: 'по названию'},
						{value: 'body', name: 'по описанию'}
					]}
				/>
			</div>
			
			{ // условная отрисовка
				posts.length !== 0
					?<PostList remove={ removePost } posts={ sortedPost } title="Список постов" />
					:<h2 style={ {textAlign: 'center'} }>Посты не найдены !!!</h2>

			}
			
		</div>
	);
}

export default App;



