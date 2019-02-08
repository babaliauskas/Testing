/* global it, describe, expect, beforeEach, jest */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../App';
import FilterInput from '../../components/Filter/FilterInput/FilterInput';
import PizzasList from '../../pizza.json';

configure({ adapter: new Adapter() });

describe('App', () => {
  const mockhandleSortPizzas = jest.fn();
  const mockHandleFilter = jest.fn();
  const props = { handleSortPizzas: mockhandleSortPizzas, handleFilter: mockHandleFilter, filter: '' };
  const app = shallow(<App />);

  it('should render properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain Filter component', () => {
    expect(app.find('Filter').exists()).toBe(true);
  });

  it('should contain button', () => {
    expect(app.find('button').exists()).toBe(true);
  });

  it('button should contain the right text ', () => {
    expect(app.find('button').text()).toBe('Show Pizza Options');
  });

  describe('Display pizza button', () => {
    beforeEach(() => {
      app.find('.btn-fetch').simulate('click');
    });

    it('should set pizzas to a newPizzas', () => {
      expect(app.state().pizzas).toEqual(PizzasList.pizzas);
    });
  });

  describe('`Sort Pizzas` button', () => {
    const filter = shallow(<FilterInput {...props} />);
    const pizzas = ['Sausage', 'Cheese'];
    const sort = true;
    const ascPizzas = ['Sausage', 'Cheese'];
    const decPizzas = ['Cheese', 'Sausage'];
    beforeEach(() => {
      app.setState({ pizzas });
      filter.find('button').simulate('click');
    });

    it('`handleSortPizzas` should have been called', () => {
      expect(mockhandleSortPizzas).toHaveBeenCalled();
    });

    it('should sort dec pizzas if sort is true ', () => {
      if (sort) {
        expect(app.state().pizzas).toEqual(ascPizzas);
      }
    });

    it('should sort asc pizzas if sort is false ', () => {
      if (!sort) {
        expect(app.state().pizzas).toEqual(decPizzas);
      }
    });
  });
});
