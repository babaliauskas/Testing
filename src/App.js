import React from 'react';

import pizzaData from './pizza.json';
import Filter from './components/Filter/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pizzas: [],
      sort: false,
    };
    this.fetchPizzaList = this.fetchPizzaList.bind(this);
    this.handleSortPizzas = this.handleSortPizzas.bind(this);
  }

  fetchPizzaList() {
    this.setState({ pizzas: pizzaData.pizzas });
  }

  handleSortPizzas() {
    let newPizzas;
    const { sort, pizzas } = this.state;
    const pizzasCopy = [...pizzas];

    if (pizzasCopy && sort) {
      newPizzas = pizzasCopy.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    } else if (pizzasCopy && !sort) {
      newPizzas = pizzasCopy.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));
    }

    this.setState({
      pizzas: newPizzas,
      sort: !sort,
    });
  }

  render() {
    const { pizzas } = this.state;
    return (
      <div className="App">
        <button
          type="button"
          className="btn-fetch"
          onClick={this.fetchPizzaList}
        >
          Show Pizza Options
        </button>

        <Filter pizzas={pizzas} handleSortPizzas={this.handleSortPizzas} />
      </div>
    );
  }
}

export default App;
