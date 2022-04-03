import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({remove, post}) => {
    const {title, body} = post;

    return (
        <div className="post">
            <div className="post__contents">
                <strong>{ post.id }. { title }</strong>
                <p>{ body }</p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;


