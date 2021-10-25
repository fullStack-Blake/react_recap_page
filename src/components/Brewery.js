import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Name = styled.h2``;
const Location = styled.h4``;
const Phone = styled.p``;
const Website = styled.a``;

const Brewery = ({ name, street, city, state, phone, website }) => {
  return (
    <>
      <Name>{name}</Name>
      <Location>
        {street}, {city}
      </Location>
      <Phone>{phone}</Phone>
      <Website>{website}</Website>
    </>
  );
};

Brewery.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string
};

export default Brewery;
