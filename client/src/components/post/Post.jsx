import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2015/01/10/14/38/calla-595272_1280.jpg" alt="drei blühende Pflanzen"/>
      <div className="postInfo">
         <div className="postCats">
             <span className="postCat">Care</span>
             <span className="postCat">Soil</span>
         </div>
         <span className="postTitle"> Lorem Ipsum dolor sit amet</span>
         <hr />
         <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor nisi voluptatum sequi incidunt natus, maxime reprehenderit nemo provident quibusdam ullam molestiae saepe. Dicta mollitia voluptatem voluptate impedit commodi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor nisi voluptatum sequi incidunt natus, maxime reprehenderit nemo provident quibusdam ullam molestiae saepe. Dicta mollitia voluptatem voluptate impedit commodi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor nisi voluptatum sequi incidunt natus, maxime reprehenderit nemo provident quibusdam ullam molestiae saepe. Dicta mollitia voluptatem voluptate impedit commodi.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos dolor nisi voluptatum sequi incidunt natus, maxime reprehenderit nemo provident quibusdam ullam molestiae saepe. Dicta mollitia voluptatem voluptate impedit commodi.
      </p>
    </div>
  )
}
