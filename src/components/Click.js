import { Button } from 'bootstrap'
import React, { Component } from 'react'

 class Click extends Component {
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
    const{count}=this.state
    return (<Button onClick={this.increamentCount}>CLICK {count} TIMES</Button>)
      
    
  }
}

export default Click