import React, { useEffect, useState } from 'react';
import { usePost } from './hooks/usePosts';
import PostService from './API/PostService';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

import './styles/App.css';
import Loader from './components/UI/loader/Loader';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description3'},
        {id: 3, title: 'JavaScript3', body: 'description2'}
    ]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const sortedAndSearchPost = usePost(posts, filter.sort, filter.query);
	const [isPostLoading, setIsPostLoading] = useState(false);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		setIsPostLoading(true);
		setTimeout(async () => {
			const posts = await PostService.getAll();
			setPosts(posts);
			setIsPostLoading(false);
		}, 1000);
	}

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	

	return (
		<div className="App">
			<MyButton onClick={ fetchPosts }>Get posts</MyButton>
			<MyButton onClick={ () => setModal(true) }>Создать пост...</MyButton>
			<hr style={{margin: '10px 0'}}/>
			<MyModal visible={ modal } setVisible={ setModal }>
				<PostForm create={ createPost }/>
			</MyModal>

			<PostFilter filter={ filter } setFilter={ setFilter } />
			{
				isPostLoading
					? <Loader />
					: <PostList remove={ removePost } posts={ sortedAndSearchPost } title="Список постов" />
			}
		</div>
	);
}

export default App;



