import React from 'react';

const PostItem = ({number, post}) => {
    const {title, body} = post;

    return (
        <div className="post">
            <div className="post__contents">
                <strong>{ number }. { title }</strong>
                <p>{ body }</p>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
}

export default PostItem;


