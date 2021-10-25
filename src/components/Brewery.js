import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Main = styled.div`
  margin-left: 12em;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`
const Name = styled.h2``;
const Location = styled.h4``;
const Phone = styled.p``;
const Website = styled.a``;

const Brewery = ({ name, street, city, state, phone, website }) => {
  return (
    <Main>
    <Card>
      <Name>{name}</Name>
      <Location>
        {street}, {city}
      </Location>
      <Phone>{phone}</Phone>
      <Website>{website}</Website>
    </Card>
    </Main>
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
