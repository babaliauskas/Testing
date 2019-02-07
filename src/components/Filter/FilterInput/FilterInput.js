import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = ({ handleFilter, filter, handleSortPizzas }) => (
  <div className="FilterInput">
    <input type="text" onChange={event => handleFilter(event)} value={filter} />
    <button className="btn-sort" type="button" onClick={handleSortPizzas}>Sort Pizzas</button>
  </div>
);
FilterInput.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleSortPizzas: PropTypes.func.isRequired,
};

export default FilterInput;
