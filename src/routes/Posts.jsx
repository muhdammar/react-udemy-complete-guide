import { useState } from 'react'
import PostsList from "../components/PostsList";
function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function showModalHandler(){
    setModalIsVisible(true)
  }
  function hideModalHandler(){
    setModalIsVisible(false)
  }
  
  return (
    <>
    <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </>
  );
}

export default Posts;
