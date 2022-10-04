import React, { useState } from 'react'
import axios from 'axios'

function Univer() {

  const [uni, setUni] = useState([])
  const fetchUni = () => {
    axios.get("http://universities.hipolabs.com/search?country=United+States")
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
                <h3> {value.web_pages}</h3>
              <h3> {value.country}</h3>
                </>
              
                
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Univer;