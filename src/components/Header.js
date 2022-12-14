import { Link } from 'react-router-dom';

import '../index.css'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link to="/#"><img src="prodaptlogo.png" className="card-img-top" height={80} alt="..."></img></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/useraccount">User Account files</a>
            {/* <a className="nav-link " href="/home">Favourite </a> */}
            <a className="nav-link" href="/profile">Profile</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/">Logout​</a>

          </div>

        </div>
      </div>
    </nav>

  );
}



export default Header;
