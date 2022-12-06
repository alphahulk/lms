import React, { Component } from 'react'
import axios from 'axios'

class Postex extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userid: '',
        title: '',
        body:''
      
      }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e=> {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        })

    }
  render() {
    const{userid,title,body}= this.state
    return (
      <div>
        <form onSubmit={this.submitHandler }>
          <div>
            <input type="text" name="userID" value={userid} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="name" value={title} onChange={this.changeHandler} />
          </div>
          <div>
            <input type="text" name="name" value={body} onChange={this.changeHandler} />
          </div>
          <button >submit</button>
        </form>
      </div>
    );
  }
}

export default Postex