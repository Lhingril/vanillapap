import PostGoogle from "../post/HardcodedPost/PostGoogle"
import PostBluete from "../post/HardcodedPost/PostBluete"
import PostSteckling from "../post/HardcodedPost/PostSteckling"
import Post from "../post/Post"
import "./posts.css"

export default function HardcodedPosts() {
  return (
    <div className="posts"> 
      <PostGoogle/>
      <PostSteckling/>
      <PostBluete/>
    </div>
  )
}
