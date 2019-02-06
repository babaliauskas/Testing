import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pizza from './Pizza';

configure({ adapter: new Adapter() });

describe('Pizza', () => {
  const props = { pizza: 'Sausage' };
  const pizza = shallow(<Pizza {...props} />);

  it('should render properly', () => {
    expect(pizza).toMatchSnapshot();
  });

  it('should pizza should be a String', () => {
    expect(typeof props.pizza).toEqual('string');
  });

  it('should display the pizza name', () => {
    expect(pizza.find('li').text()).toEqual('Sausage');
  });
});
