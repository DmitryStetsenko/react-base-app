import React, { useState } from 'react';

import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description'},
        {id: 2, title: 'JavaScript2', body: 'description'},
        {id: 3, title: 'JavaScript3', body: 'description'}
    ]);

	return (
		<div className="App">
			<form>
				<MyInput type="text" placeholder="Название поста" />
				<MyInput type="text" placeholder="Описание поста" />
				<MyButton>Создать пост</MyButton>
			</form>
			<PostList posts={ posts } title="Список постов" />
		</div>
	);
}

export default App;



