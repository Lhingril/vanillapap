import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"
import HardcodedPosts from "../../posts/HardcodedPosts"
import SumBlog from "../../header/SumBlog"

export default function Home() {
  return (
    <div className="header">
        <Header/>
        <SumBlog/>
        <div className="home">
          <HardcodedPosts/>
          <Sidebar/>
        </div> 
    </div>
  )
}
