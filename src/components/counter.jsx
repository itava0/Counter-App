import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
    // tags: ['tag1', 'tag2', 'tag3']
  };
  // styles = { We could Pass classes dynamically in to our element
  //   fontSize:10,
  //   fontWeight: "Bold"
  // };
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(product) {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {/* We could loop through a list of itmes and render them dynamically on the page 
          {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul> */}
      </div>
    );
  }
  // WE could extract in separate method with ctrl + shift + r
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
