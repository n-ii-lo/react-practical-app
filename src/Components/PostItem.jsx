import React from 'react';

const Post = (props) => {

	return (
		<div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <button>Delete</button>
      </div>
	)
}

export default Post;