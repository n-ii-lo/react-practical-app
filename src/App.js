import React, { useState } from "react";
import AddPosForm from "./Components/addPostForm";
// import Counter from "./Components/Counter";
import Postlist from "./Components/PostList";
import "./Styles/style.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className='App'>
      <AddPosForm create={createPost} />
      <Postlist posts={posts} title='Список постов' />
    </div>
  );
}

export default App;
