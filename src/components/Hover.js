import React, { Component } from 'react'

class Hover extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      increamentCount = () => {
          this.setState(prevState => {
              return{count: prevState.count + 1}
  
          })
      }
  render() {
    const{count }= this.state
    return (
        
      <h2 onMouseOver={this.increamentCount}>hovered {count} times</h2>
    )
  }
}

export default Hover