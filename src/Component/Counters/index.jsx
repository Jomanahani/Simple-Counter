import React, { Component } from 'react'
import Counter from '../Counter'

class Counters extends Component {
    state ={
        counters:[ 
            {id:0,count:0,steps:2},
            {id:1,count:0,steps:3},
            {id:2,count:0,steps:5},
          ]   
    }

    onIncrement = (id, steps =1) => {
      // console.log(id)
       // this.setState(prevState => ({total: prevState.total + steps}))
      this.setState((prevState) => {
        return {
          counters: prevState.counters.map((item) => {
            if (item.id === id) {
              return { ...item, count: item.count + steps }
            }
            return item
          })
        }
      })
    }
  
    onDecrement = (id, steps =1) => {
      // let isDec=false
      this.setState((prevState) => {
        return {
          counters: prevState.counters.map((item) => {
            if (item.id === id && item.count >= steps ) {
              // isDec=true
              return { ...item, count: item.count - steps };
            }
            return item;
          }),
          
          // total:isDec?prevState.total - steps:prevState.total
        };
        
      });
    };

  render() {
    return (
      <div>
        {this.state.counters.map((counter)=> 
        <Counter key={counter.id} count={counter.count} onIncrement={()=>{this.onIncrement(counter.id,counter.steps)}} onDecrement={()=>{this.onDecrement(counter.id,counter.steps)}} />)}
        {/* <p><h2>Total Counter :</h2> </p> */}

        
      </div>
    )
  }
}
export default Counters;