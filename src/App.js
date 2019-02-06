import React from 'react';

import Filter from './component/Filter';

const getPizzaUrl = './pizza.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pizzas: [],
      loading: false
    };
    this.fetchPizzaList = this.fetchPizzaList.bind(this);
    this.handleSortPizzas = this.handleSortPizzas.bind(this);
  }

  fetchPizzaList() {
    var self = this;
    self.setState({ loading: true });
    fetch(getPizzaUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        self.setState({
          pizzas: data.pizzas,
          loading: false
        });
      });
  }

  handleSortPizzas() {
    let pizzas;
    const { sort } = this.state;
    const pizzasCopy = [...this.state.pizzas];

    if (pizzasCopy && sort) {
      pizzas = pizzasCopy.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );
    } else if (pizzasCopy && !sort) {
      pizzas = pizzasCopy.sort((a, b) =>
        b.localeCompare(a, undefined, { sensitivity: 'base' })
      );
    }
    this.setState({
      pizzas,
      sort: !sort
    });
  }

  render() {
    const { pizzas, loading, title } = this.state;
    return (
      <div>
        <h3>{title}</h3>

        <button className="btn-fetch" onClick={this.fetchPizzaList}>
          Show Pizza Options
        </button>

        <Filter
          pizzas={pizzas}
          loading={loading}
          handleSortPizzas={this.handleSortPizzas}
        />
      </div>
    );
  }
}

export default App;
