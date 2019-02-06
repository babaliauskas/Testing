import React from 'react';

import PropTypes from 'prop-types';

const Pizza = ({ pizza }) => {
  return <li>{pizza}</li>;
};

Pizza.propTypes = {
  pizza: PropTypes.string.isRequired
};

export default Pizza;
