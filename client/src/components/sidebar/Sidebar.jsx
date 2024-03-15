import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_1280.jpg" alt="author" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur, cupiditate sunt, consequatur</p>
      </div>
      <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
            <li className="sidebarListItem">CARE</li>
            <li className="sidebarListItem">DIY</li>
            <li className="sidebarListItem">PET SAFE</li>
            <li className="sidebarListItem">SOIL</li>
         </ul>
      </div>
      <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
             <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
            <i className=" sidebarIcons fa-brands fa-square-instagram"></i>
         </div>
        
      </div>
    </div>
  )
}

