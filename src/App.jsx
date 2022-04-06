import React, { useEffect, useState } from 'react';
import { usePost } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import PostService from './API/PostService';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';

import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loader/Loader';

import './styles/App.css';
import Pagination from './components/UI/pagination/Pagination';

const App = () => {
	const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'description1'},
        {id: 2, title: 'JavaScript2', body: 'description3'},
        {id: 3, title: 'JavaScript3', body: 'description2'}
    ]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchPost = usePost(posts, filter.sort, filter.query);
	
	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		const totalCount = response.headers['x-total-count'];

		setPosts(response.data);
		setTotalPages(getPageCount(totalCount, limit));
	});

	useEffect(() => {
		fetchPosts(limit, page);
	}, []);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const changePage = (page) => {
		setPage(page);
		fetchPosts(limit, page);
	}

	return (
		<div className="App">
			<MyButton onClick={ () => setModal(true) }>Создать пост...</MyButton>
			<hr style={{margin: '10px 0'}}/>
			<MyModal visible={ modal } setVisible={ setModal }>
				<PostForm create={ createPost }/>
			</MyModal>

			<PostFilter filter={ filter } setFilter={ setFilter } />
			<Pagination totalPages={totalPages} page={page} changePage={changePage}/>
			{ postError && <h1>Ошибка: { postError }</h1> }
			{
				isPostLoading
					? <Loader />
					: <PostList remove={ removePost } posts={ sortedAndSearchPost } title="Список постов" />
			}
			<Pagination totalPages={totalPages} page={page} changePage={changePage}/>
		</div>
	);
}

export default App;



