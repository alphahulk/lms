import React, { Component } from 'react'
import axios from 'axios'

 class Univer2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
            console.log(response)
            this.setState({
                post: response.data})
           })
           .catch(error => {
            console.log(error)
           })
    
    
    }
  render() {
    const{post} = this.state
    return (
      <div>Univer2
      {
        post.length?
        post.map(post => <div key ={post.id}>{post.title}</div>):
      null
      }
      </div>
    )
  }
}

export default Univer2