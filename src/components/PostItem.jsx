import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({remove, post}) => {
    const {title, body} = post;
    const router = useNavigate();

    return (
        <div className="post">
            <div className="post__contents">
                <strong>{ post.id }. { title }</strong>
                <p>{ body }</p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;


