import "./write.css"

export default function Write() {
  return (
    <div className='write'>
     <img src="https://cdn.pixabay.com/photo/2022/06/18/09/08/succulents-7269461_1280.jpg" alt="new upload" className="writeImg" />
      <form className="writeForm">
         <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeAddIcon fa-regular fa-square-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
         </div>
         <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
         </div>
         <button className="writeSubmit" >Publish</button>
      </form>
    </div>
  )
}
