import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {

  render() {
    return (
      <div className='counter'>
        <p>{this.props.count}</p>
        <div>
        <button onClick={this.props.onDecrement} className='decrement' >-</button>
        <button onClick={this.props.onIncrement} className='increment' >+</button>
        </div>
        </div>
    )
  }
}
