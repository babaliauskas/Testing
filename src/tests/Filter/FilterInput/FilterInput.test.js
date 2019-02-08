/* global it, describe, expect, jest, beforeEach */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterInput from '../../../components/Filter/FilterInput/FilterInput';

configure({ adapter: new Adapter() });

describe('FilterInput', () => {
  const mockFilter = jest.fn();
  const mockSortPizzas = jest.fn();
  const props = {
    handleFilter: mockFilter,
    filter: '',
    handleSortPizzas: mockSortPizzas,
  };
  const filterinput = shallow(<FilterInput {...props} />);

  it('should render properly', () => {
    expect(filterinput).toMatchSnapshot();
  });

  it('should contain input field', () => {
    expect(filterinput.find('input').exists()).toBe(true);
  });

  it('should contain button ', () => {
    expect(filterinput.find('button').exists()).toBe(true);
  });

  describe('Input field', () => {
    const inputChange = 'sa';
    beforeEach(() => {
      filterinput.find('input').simulate('change', inputChange);
    });

    it('should contain the right input value ', () => {
      expect(mockFilter).toHaveBeenCalledWith(inputChange);
    });
  });
});
