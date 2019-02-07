import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import Filter from './Filter';

configure({ adapter: new Adapter() });

describe('Filter', () => {
  const mockSortPizzas = jest.fn();
  const props = {
    pizzas: ['Sausage', 'Cheese'],
    loading: false,
    handleSortPizzas: mockSortPizzas,
  };
  const filter = shallow(<Filter {...props} />);

  it('should render properly', () => {
    expect(filter).toMatchSnapshot();
  });

  it('should contain Pizza component', () => {
    expect(filter.find('Pizza').exists()).toBe(true);
  });

  it('should contain input field', () => {
    expect(filter.find('input').exists()).toBe(true);
  });

  it('should contain button', () => {
    expect(filter.find('button').exists()).toBe(true);
  });

  describe('Checking proptypes', () => {
    it('Pizzas list should be array', () => {
      expect(Array.isArray(props.pizzas)).toBe(true);
    });

    it('Loading should be boolean', () => {
      expect(typeof props.loading).toBe('boolean');
    });

    it('handleSortPizzas should be function', () => {
      expect(typeof props.handleSortPizzas).toBe('function');
    });
  });

  describe('Checking button', () => {
    beforeEach(() => {
      filter.find('button').simulate('click');
    });

    it('should sort pizzas', () => {
      expect(mockSortPizzas).toHaveBeenCalled();
    });
  });

  describe('Checking input', () => {
    const filterInput = 'sa';
    beforeEach(() => {
      filter
        .find('input')
        .simulate('change', { target: { value: filterInput } });
    });

    it('should update the local filter in `state`', () => {
      expect(filter.state().filter).toEqual(filterInput);
    });
  });

  describe('Check loading', () => {
    it('should display loading if loading is true', () => {
      if (props.loading) {
        expect(filter.find('p').exists()).toBe(true);
      }
    });
  });
});
