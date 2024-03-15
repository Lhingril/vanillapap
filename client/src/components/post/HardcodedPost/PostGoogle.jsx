import "../post.css"
import "../../singlePost/hardcoded/GooglePost"

export default function PostGoogle() {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2020/09/02/03/26/iphone-5537230_1280.jpg" alt="Smartphone in einer Hand"/>
      <div className="postInfo">
         <div className="postCats">
             <span className="postCat">Care</span>
             <span className="postCat"></span>
         </div>
         <span className="postTitle"> Google Lens & Co: Wie Apps unseren Pflanzen helfen können.</span>
         <button className="postButton" onClick={handleClick}>Google Lens & Co: Wie Apps unseren Pflanzen helfen können</button>
         <hr />
         <span className="postDate"> 05.03.2024</span>
      </div>
      <p className="postDes"> In der Welt der Zimmerpflanzen spielt die Technologie eine immer größere Rolle, insbesondere wenn es darum geht, Pflanzen zu identifizieren und ihre Bedürfnisse zu verstehen. Eine der führenden Anwendungen, die dabei hilft, ist Google Lens. Diese App, die auf künstlicher Intelligenz basiert, ermöglicht es Nutzern, Pflanzen schnell und zuverlässig zu bestimmen.
      </p>
    </div>
  )
}

const handleClick = alert("I was clicked");