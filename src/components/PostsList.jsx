import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  // fetch('http://localhost:8080/posts')
  // .then( response => response.json())
  // .then( data =>  {
  //   setPosts(data.posts)
  // }) // this will cause infinite loop because it will refresh
  //and refetch again

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts(){
      const response = await fetch("http://localhost:8080/posts")
            .then((response) => response.json())
            .then((data) => {
              setPosts(data.posts);
            });
      const resData = await response.json();
      setPosts(resData.posts)
    }
    fetchPosts();

  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //setPosts([postData, ...posts]) //what different tho, later ask AI
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && <div> No data la bro </div>}
    </>
  );
}
export default PostsList;
