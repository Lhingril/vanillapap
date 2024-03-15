import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";
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
          <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
          <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
      </Router>

  );

}


export default App;