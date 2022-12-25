import React, { Component } from "react";
import Counter from "../Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, count: 0, steps: 2 },
      { id: 1, count: 0, steps: 3 },
      { id: 2, count: 0, steps: 5 },
    ],
    Total: 0,
  };

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };

  onDecrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id && item.count >= steps) {
            return { ...item, count: item.count - steps };
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            count={counter.count}
            onIncrement={() => {
              this.onIncrement(counter.id, counter.steps);
            }}
            onDecrement={() => {
              this.onDecrement(counter.id, counter.steps);
            }}
          />
        ))}
        <p>
          <strong>Total Counter :  </strong>
           {this.state.counters.reduce(
            (accumulator, currentValue) => accumulator + currentValue.count,0
          )}
        </p>
      </div>
    );
  }
}
export default Counters;
