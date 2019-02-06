import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pizza from './Pizza';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      sort: true
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    let displayPizzas;
    let filteredPizzas = [];
    let filterSortBtn = null;
    const { filter } = this.state;
    const { loading, pizzas, handleSortPizzas } = this.props;

    // Checking if pizzas loaded

    if (pizzas.length > 0) {
      filterSortBtn = (
        <div>
          <input
            type="text"
            onChange={event => this.handleFilter(event)}
            value={filter}
          />

          <button onClick={handleSortPizzas}>Sort Pizzas</button>
        </div>
      );
    }

    // Filtering pizzas and storing to a new variable
    if (pizzas) {
      pizzas.forEach(pizza => {
        if (pizza.toLowerCase().includes(filter.toLowerCase())) {
          return filteredPizzas.push(pizza);
        }
      });
    }

    // Displaying List of pizzas if it is already loaded
    if (loading) {
      displayPizzas = <p>Loading...</p>;
    } else {
      displayPizzas = filteredPizzas.map((pizza, index) => (
        <Pizza key={index} pizza={pizza} />
      ));
    }

    return (
      <div>
        {filterSortBtn}
        <ul>{displayPizzas}</ul>
      </div>
    );
  }
}

Filter.propTypes = {
  loading: PropTypes.bool.isRequired,
  pizzas: PropTypes.array.isRequired,
  handleSortPizzas: PropTypes.func.isRequired
};

export default Filter;
