import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal"

function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData){
    //setPosts([postData, ...posts]) try this
    setPosts((existingPosts) => [[postData, ...existingPosts]])
  }
  return (
    <>
    {isPosting ? <Modal onClose={onStopPosting}>
      <NewPost 
        onCancel={onStopPosting}
        onAddPost={addPostHandler}/>
    </Modal> : null}
    
      <ul className={classes.posts}>
          <Post />
      </ul>
    </>
  );
}
export default PostsList;
