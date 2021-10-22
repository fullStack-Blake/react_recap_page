import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button>MINUS</button>
      </>
    );
  }
}

export default App;
