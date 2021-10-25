import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    breweryList: []
  };

  constructor(props) {
    super(props);
    console.log("Constructed!");
  }
  getBrewery = async () => {
    const { data: breweryList } = await axios.get(
      "https://api.openbrewerydb.org/breweries"
    );
    this.setState({ breweryList, isLoading: false });
    console.log(breweryList);
  };
  componentDidMount() {
    this.getBrewery();
    this.setState({ isLoading: false });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { isLoading, breweryList } = this.state;
    return <>{isLoading ? <h3>Loading...</h3> : <p></p>}</>;
  }
}

export default App;
