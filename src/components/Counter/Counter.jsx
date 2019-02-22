import React, { Component } from "react";

export class Counter extends Component {
  state = {
    id: 1,
    value: 0
  };

  handleIncrement = () => {
    //increment the value
    //TODO: To check article on async update of counter
    const newValue = this.state.value + 1;
    this.setState({ value: newValue });
  };

  handleDecrement = () => {
    const newValue = this.state.value - 1;
    this.setState({ value: newValue });
  };

  evaluateClass = () => {
    return this.state.value > 0 ? "primary" : "warning";
  };

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className={`badge badge-${this.evaluateClass()}`}>
            {this.state.value}
          </span>
        </h2>
        <button onClick={this.handleIncrement} className="btn btn-primary m-2">
          +
        </button>
        <button onClick={this.handleDecrement} className="btn btn-primary m-2">
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
