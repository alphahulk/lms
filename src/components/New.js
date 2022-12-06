// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/photos";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.url}</p>
//     </div>
//   );
// }

import React, { useState } from 'react'
import axios from 'axios'

function New() {

  const [uni, setUni] = useState([])
  const fetchUni = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        setUni(response.data)
      })

  }
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchUni}>fetchUni</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            uni.map((value, index) => {
              return (
                <>
                <h3> {value.title}</h3>
                <a href="" target="_main" > {value.thumbnailUrl}</a>
                <h3>{value.name}</h3>
                </>
              
                
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default New;