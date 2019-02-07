import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pizza from '../Pizza/Pizza';
import FilterInput from './FilterInput/FilterInput';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const filteredPizzas = [];
    const { filter } = this.state;
    const { pizzas, handleSortPizzas } = this.props;

    // Filtering pizzas and storing to a new variable
    if (pizzas) {
      pizzas.forEach((pizza) => {
        if (pizza.toLowerCase().includes(filter.toLowerCase())) {
          filteredPizzas.push(pizza);
        }
      });
    }

    return (
      <div>
        {pizzas.length > 0 ? (
          <FilterInput
            handleFilter={this.handleFilter}
            pizzas={pizzas}
            filter={filter}
            handleSortPizzas={handleSortPizzas}
          />
        ) : null}
        <ul>
          <Pizza filteredPizzas={filteredPizzas} />
        </ul>
      </div>
    );
  }
}

Filter.propTypes = {
  pizzas: PropTypes.instanceOf(Array).isRequired,
  handleSortPizzas: PropTypes.func.isRequired,
};

export default Filter;
