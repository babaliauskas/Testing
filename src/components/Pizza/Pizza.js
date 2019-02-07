import React from 'react';

import PropTypes from 'prop-types';

const Pizza = ({ filteredPizzas }) => filteredPizzas.map(pizza => (
  <li className="Pizza" key={pizza}>{pizza}</li>
));

Pizza.propTypes = {
  filteredPizzas: PropTypes.instanceOf(Array).isRequired,
};

export default Pizza;
