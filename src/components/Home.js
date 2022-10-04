import {Link} from 'react-router-dom';

import'../index.css'

function Home() {
  return (
    <><div className='a'>
      
      <h3 className="border-bottom pb-1 mb-2">FAVOURITE DOCUMENTS </h3>
    </div><div className="container mt-4">

        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <Link to="/about"><img src="logo192.png" className="card-img-top" alt="..."></img></Link>
              <div className="card-body">
                <h5 className="card-title"><a href="/#">Document 1</a></h5>
                <a href="/#" className="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mr- ">
            <div className="card">
              <a href="/#"><img src="logo192.png" className="card-img-top" alt="..."></img></a>
              <div className="card-body">
                <h5 className="card-title"><a href="/#">Document 2</a></h5>
                <a href="/#" className="btn btn-primary">Details</a>
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="/#"><img src="logo192.png" className="card-img-top" alt="..."></img></a>
              <div className="card-body">
                <h5 className="card-title"><a href="/#">Document 3</a></h5>
                <a href="/#" className="btn btn-primary">Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="/#"><img src="logo192.png" className="card-img-top" alt="..."></img></a>
              <div className="card-body">
                <h5 className="card-title"><a href="/#">Document 4</a></h5>
                <a href="/#" className="btn btn-primary">Details</a>


              </div>
            </div>
          </div>
          
        </div>
      </div></>
  );
}



export default Home;
