import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import About from "./components/about/About"
import PostGoogle from "./components/post/HardcodedPost/PostGoogle";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
const user = false;
  return (

    <Router>
    <TopBar />
   
   
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
          <Route path="/write" element={user ? <Write /> : <Write />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Settings/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
          <Route path="/about" element={<About />} ></Route>
        </Routes>
      </Router>

  );

}


export default App;