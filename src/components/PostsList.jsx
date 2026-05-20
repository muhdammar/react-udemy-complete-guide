import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal"
function PostsList() {
  const [ modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  
  function hideModalHandler(){
    setModalIsVisible(false)
  }
  
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
    {modalIsVisible ? <Modal onClose={hideModalHandler}>
      <NewPost 
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler} />
    </Modal> : null}
    
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}
export default PostsList;
