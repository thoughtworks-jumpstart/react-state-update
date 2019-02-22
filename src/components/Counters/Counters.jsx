import React, { Component } from "react";
import Counter from "../Counter/Counter";
import produce, {setAutoFreeze} from "immer"

export class Counters extends Component {
  state = {
    data: [
      { id: 1, value: 0},
      { id: 2, value: 0 }
    ]
  };

  constructor(props){
    super(props);
    setAutoFreeze(false);
  }

  handleIncrement = (counterId) => {
    //to be triggered by setState() to evaluate the value to set to this.state
    const updater = (state) => {
      //updating and copying the object
      return produce(state, draft => {
        draft.data.find(element => element.id === counterId).value += 1;
      });

    };
    
    this.setState(updater);
  };
  
  handleReset = () => {
    const copy = [...this.state.data]
    // console.log(JSON.stringify(copy))
    const updated = copy.map( counter => {
      console.log(counter)
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
