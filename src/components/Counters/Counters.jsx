import React, { Component } from "react";
import Counter from "../Counter/Counter";
import {cloneDeep} from "lodash"

export class Counters extends Component {
  state = {
    data: [
      { id: 1, value: 0},
      { id: 2, value: 0 }
    ]
  };

  
  handleIncrement = (counterId) => {
    // const copy = [...this.state.data]
    const copy = cloneDeep(this.state.data)
    console.log("Before", JSON.stringify(this.state.data));

    copy.find(element => element.id === counterId).value += 1;

    console.log("After: state", JSON.stringify(this.state.data));
    console.log("After: copy ", JSON.stringify(copy));

    this.setState({ data: copy });
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
