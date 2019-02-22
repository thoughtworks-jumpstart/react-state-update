import React, { Component } from "react";
import Counter from "../Counter/Counter";

export class Counters extends Component {
  state = {
    data: [
      { id: 1, value: 0},
      { id: 2, value: 0 }
    ]
  };

  settingState = (counterId, operator) => {
    const copy = [...this.state.data]
    copy.find(element => element.id === counterId).value += operator;
    this.setState({ data: copy });
  }
  handleIncrement = (counterId) => {
    //TODO: To check article on async update of counter
    this.settingState(counterId, 1)
  };
  
  handleReset = () => {
    const copy = [...this.state.data]
    const updated = copy.map( counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({data: updated});
  }
  render() {
    const { data } = this.state;
    
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-secondary m-2">Reset</button>
        { data.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
