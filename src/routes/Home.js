import React, { Component } from "react";
import axios from "axios";
import Brewery from "../components/Brewery";
import styled from "styled-components";

const Breweries = styled.div`
  padding-top: 5vh;
  margin-left: 10vw;
  width: 90vw;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  
  .brewery:nth-child(odd){
    background-color: blue;
  }
  .brewery:nth-child(even){
    background-color: black;
  }
`

class Home extends Component {
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
  };
  componentDidMount() {
    this.getBrewery();
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading, breweryList } = this.state;
    return (
      <>

          {isLoading
            ? <div className="loading">Loading...</div>
            : <Breweries>
             { breweryList.map(brewery => (
                <Brewery
                  key={brewery.id}
                  name={brewery.name}
                  street={brewery.street}
                  city={brewery.city}
                  state={brewery.state}
                  phone={brewery.phone}
                  website={brewery.website_url}
                  type={brewery.brewery_type}
                />
              ))}
             </Breweries> } 

      </>
    );
  }
}

export default Home;
