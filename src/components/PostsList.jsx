import Post from "./Post";
import classes from './PostsList.module.css'
function PostsList(){
    return <ul className={classes.posts} >
      <Post author="Ammar" body="Course Financial"/>
    </ul>
}
export default PostsList