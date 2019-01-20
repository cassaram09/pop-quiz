import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './app';

describe('App', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});