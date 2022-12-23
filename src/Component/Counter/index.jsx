import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {

    // state={
    //     counter : 0,
    //     value :this.props.value,
    // }

    // increment =() =>{
    //     this.setState(prevState=>({counter : prevState.counter + parseInt(this.state.value)}))
    //     this.props.updateTotal(this.state.value)
    // }

    // decrement = ()=>{
    //     if(this.state.counter > 0){
    //     this.setState(prevState=>({counter: prevState.counter - parseInt(this.state.value)}))
    //     this.props.updateTotal(-this.state.value)
    //     }
    // }
  render() {
    return (
      <div className='counter'>
        <p>{this.props.count}</p>
        <div>
        <button onClick={this.decrement} className='decrement' >-</button>
        <button onClick={this.increment} className='increment' >+</button>
        </div>
        </div>
    )
  }
}
