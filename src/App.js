import React, { useState } from "react";
// import Counter from "./Components/Counter";
import Post from "./Components/PostItem";
import Postlist from "./Components/PostList";
import "./Styles/style.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);

  return (
    <div className='App'>
      <Postlist posts={posts} />
    </div>
  );
}

export default App;
