import React from 'react';
import PostItem from './PostItem'

const PostList = ( {posts, title, remove} ) => {
    return (
        <div>
            <h1 style={ {textAlign: 'center', marginBottom: '20px'} }>{ title }</h1>
			{
				posts.map( (post, index) => 
					<PostItem remove={ remove } number={ index + 1 } post={ post } key={ post.id } />
				)
			}
			
        </div>
    );
};

export default PostList;