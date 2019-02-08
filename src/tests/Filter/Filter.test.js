/* global it, describe, expect, jest, beforeEach */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filter from '../../components/Filter/Filter';

configure({ adapter: new Adapter() });

describe('Filter', () => {
  let filteredPizzas;
  const mockSortPizzas = jest.fn();
  const props = {
    pizzas: ['Sausage', 'Cheese'],
    handleSortPizzas: mockSortPizzas,
  };
  const filter = shallow(<Filter {...props} />);

  beforeEach(() => {
    filteredPizzas = props.pizzas;
  });

  it('should `filteredPizzas` equal to props.pizzas ', () => {
    expect(filteredPizzas).toBe(props.pizzas);
  });

  it('should render properly', () => {
    expect(filter).toMatchSnapshot();
  });

  it('should contain `Pizza` component', () => {
    expect(filter.find('Pizza').exists()).toBe(true);
  });

  it('should contain `FilterInput` component', () => {
    expect(filter.find('FilterInput').exists()).toBe(true);
  });

  describe('Checking proptypes', () => {
    it('Pizzas list should be array', () => {
      expect(Array.isArray(props.pizzas)).toBe(true);
    });

    it('handleSortPizzas should be function', () => {
      expect(typeof props.handleSortPizzas).toBe('function');
    });
  });
});
