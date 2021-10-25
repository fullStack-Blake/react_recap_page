import React from "react";
import PropTypes from "prop-types";

const Brewery = ({ name, street, city, state, phone, website }) => {};

Brewery.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string
};
