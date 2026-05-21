import {useState} from 'react'
import PostsList from "./components/PostsList";
import MainHeader from './components/MainHeader'
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function showModalHandler(){
    setModalIsVisible(true)
  }
  function hideModalHandler(){
    setModalIsVisible(false)
  }
  
  return (

    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
    </>
  );
}

export default App;
