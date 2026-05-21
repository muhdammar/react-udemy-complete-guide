import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal"
function PostsList({isPosting, onStopPosting}) {

  return (
    <>
    {isPosting ? <Modal onClose={onStopPosting}>
      <NewPost 
        onCancel={onStopPosting}/>
    </Modal> : null}
    
      <ul className={classes.posts}>

      </ul>
    </>
  );
}
export default PostsList;
