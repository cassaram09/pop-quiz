import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'utils/enzyme';

import App from './app';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
  
    expect(app).toMatchSnapshot();
  });

  it('has the correct text', () => {
    const app = render(<App />);
    const p = app.find('p'); 
    
    expect(p.text()).toBe('Edit src/App.js and save to reload.'); // fails,
  });
});
