import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ value: 4 }, { value: 0 }, { value: 0 }, { value: 0 }]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter, id) => (
          <Counter
            key={id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
