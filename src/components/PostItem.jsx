import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({remove, number, post}) => {
    const {title, body} = post;

    return (
        <div className="post">
            <div className="post__contents">
                <strong>{ number }. { title }</strong>
                <p>{ body }</p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;


