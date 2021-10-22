import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructed!");
  }
  componentDidMount() {
    console.log("1");
  }
  componentDidUpdate() {
    console.log("2");
  }
  componentWillUnmount() {
    console.log("Bye");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    console.log("Rendering!");
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </>
    );
  }
}

export default App;
