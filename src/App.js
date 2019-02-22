import React, { Component } from "react";
import { Counters } from "./components/Counters/Counters";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>State Update Lab</h1>
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
