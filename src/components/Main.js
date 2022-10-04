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
      <Header />
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/useraccount" element={<Useraccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/adminhome" element={<Adminhome />} /> */}

      </Routes>

    </div>

  );
}



export default Main;
