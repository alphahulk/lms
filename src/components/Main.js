import Home from './Home';
import About from './About';
import Header from './Header';
import Useraccount from './Useraccount'
import Profile from './Profile';



import {Routes,Route} from 'react-router-dom';

import Login from './Login';
// import Adminhome from './Adminhome';
// import VideoApp from './Videoplayer';




function Main() {
  return (
    
    <div className="App">

      <div>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
      <div>
      
      <Routes>
{/*  renders some UI when a location matches the route’s path. */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/useraccount" element={<Useraccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/adminhome" element={<Adminhome />} /> */}

      </Routes>
      </div>
      

    </div>

  );
}



export default Main;
