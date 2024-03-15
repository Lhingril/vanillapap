import "../post.css"

export default function PostGoogle() {
  return (
    <div className="post">
      <img className="postImg" src="https://cdn.pixabay.com/photo/2020/05/09/02/00/leaves-5147889_960_720.jpg" alt="Neu austreibende Sukkulentenblätter"/>
      <div className="postInfo">
         <div className="postCats">
             <span className="postCat">Care</span>
             <span className="postCat">DIY</span>
         </div>
         <span className="postTitle">Aus Eins mach ganz viele: Erfolgreich neue Zimmerpflanzen schaffen</span>
         <hr />
         <span className="postDate">28.02.2024</span>
      </div>
      <p className="postDes"> Willkommen zu einem spannenden Abenteuer im Reich der Pflanzenzucht! In diesem Blogbeitrag werden wir uns eingehend mit verschiedenen Methoden der Vermehrung von Zimmerpflanzen befassen, die es jedem:r Pflanzenliebhaber:in ermöglichen, aus bestehenden grünen Schätzen neue Pflanzen zu erschaffen. Welche Methode am besten geeignet ist hängt ganz von der Pflanze ab. Lass uns gemeinsam in die Welt der Stängelstecklinge, Blattstecklinge, Teilung und Luftschichtungen eintauchen.
      </p>
    </div>
  )
}
