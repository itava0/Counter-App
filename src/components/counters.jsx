import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ value: 4 }, { value: 0 }, { value: 0 }, { value: 0 }]
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter, id) => (
          <Counter key={id} value={counter.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Counters;
