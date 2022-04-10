import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostSinglePage = () => {
    const {postID} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async id => {
        const response = await PostService.getByID(id);
        setPost(response.data);
    });
    const [fetchCommentsByPostId, commentsIsLoading, commentsError] = useFetching( async id => {
        const response = await PostService.getCommentsByPostID(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(postID);
        fetchCommentsByPostId(postID);
    }, []);

    return (
        <div>
            <h1>This is post#{ postID } page</h1>
            {
                isLoading
                    ? <Loader />
                    : <div className="singlePost">
                        <h1>{ post.id }. { post.title }</h1>
                    </div>
            }

            <h1>This a comment for post</h1>
            {
                commentsIsLoading
                    ? <Loader />
                    : <div className="comments">
                        <ul className="comments__list">
                        {
                            comments.map((item) => {
                                return <li className="comment">
                                    <h5 className="comment__email">{ item.email }</h5>
                                    <p className="comment__body">{ item.body }</p>
                                </li>
                            })
                        }
                        </ul>
                    </div>
            }
        </div>
    );
};

export default PostSinglePage;