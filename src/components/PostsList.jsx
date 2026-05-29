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
  const [ isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts(){
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      if(!response.ok) {
        throw new Error(resData.message || "Something went wrong");
      }
      setPosts(resData.posts)
      setIsLoading(true);
    }
    fetchPosts();
    setIsLoading(false);
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
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && <div> No data la bro </div>}
      {isLoading && <div> Loading... </div>}
    </>
  );
}
export default PostsList;
