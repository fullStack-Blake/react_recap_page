import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Main = styled.div`
  width: 25em;
  padding: 1em;
`
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
const Name = styled.h2`
  font-size: 1.5em;
  font-weight: 300;

`;
const Location = styled.h4``;
const Phone = styled.p``;
const Website = styled.a`
  text-decoration: none;
  :visited, :link{
    color: white;
  }
`;

const Brewery = ({ name, street, city, state, phone, website }) => {
  return (
    <>
  {website? 
    <Main className="brewery">
  <Website href={website} target="_blank" >
    <Card>
      <Name>{name}</Name>
      <Location>
        {street}, {city}
      </Location>
      <Phone>{phone}</Phone>
    </Card>
    </Website> 
    </Main>
    : 
    <Main className="brewery">
    <Card>
      <Name>{name}</Name>
      <Location>
        {street}, {city}
      </Location>
      <Phone>{phone}</Phone>
    </Card>
    </Main>}    
    </>
  );
};

Brewery.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  type: PropTypes.string
};

export default Brewery;
