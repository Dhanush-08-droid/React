import React, { Component } from 'react'

export default class Myclass extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"hi"
        };
    }
    handleClick=()=>{
        this.setState({
            message:"Vannakam"
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onC lick={this.handleClick}>click</button>
      </div>
    )
  }
}