import React, { Component } from "react";

export class Counter extends Component {
  evaluateClass = () => {
    return this.props.value > 0 ? "primary" : "warning";
  };

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className={`badge badge-${this.evaluateClass()}`}>
            {this.props.value}
          </span>
        </h2>
        <button
          onClick={() => this.props.handleIncrement(this.props.id)}
          className="btn btn-primary m-2"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
