import "./single.css"
import Sidebar from "../../sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
      {/* post*/}
      <SinglePost/>
     <Sidebar/>
    </div>
  )
}
