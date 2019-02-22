import React, { Component } from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Counter Lab</h1>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
