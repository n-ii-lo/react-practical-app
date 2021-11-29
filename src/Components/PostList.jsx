import React from 'react';
import Post from "./PostItem";


const Postlist = ({posts}) => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Список постов</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
		</div>
	);
}

export default Postlist;
