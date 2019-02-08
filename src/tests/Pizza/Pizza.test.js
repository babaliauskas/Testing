/* global describe, it, expect */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pizza from '../../components/Pizza/Pizza';

configure({ adapter: new Adapter() });

describe('Pizza', () => {
  const props = { filteredPizzas: ['Cheese'] };
  const pizza = shallow(<Pizza {...props} />);

  it('should render properly', () => {
    expect(pizza).toMatchSnapshot();
  });

  it('should pizza should be a String', () => {
    expect(typeof props.filteredPizzas).toEqual('object');
  });

  it('should contain `li` element', () => {
    expect(pizza.find('li').exists()).toBe(true);
  });

  it('should display the pizza name', () => {
    expect(pizza.find('li').text()).toEqual('Cheese');
  });
});
