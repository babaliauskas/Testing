import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
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
});
