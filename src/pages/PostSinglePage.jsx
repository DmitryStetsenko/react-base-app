import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostSinglePage = () => {
    const {postID} = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching( async id => {
        const response = await PostService.getByID(id);
        setPost(response.data);
    });

    useEffect(() => fetchPostById(postID), []);

    return (
        <div>
            <h1>This is post#{ postID } page</h1>
            {
                isLoading
                    ? <Loader />
                    : <div>
                        <h1>{ post.id }. { post.title }</h1>
                    </div>
            }
        </div>
    );
};

export default PostSinglePage;