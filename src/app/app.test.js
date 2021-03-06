import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'utils/enzyme';

import { App } from 'app';
import { QuestionList } from 'questions/questionList';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
  
    expect(app).toMatchSnapshot();
  });

  it('renders the Questions component', () => {
    const app = shallow(<App />);

    expect(app.find('QuestionList').length).toEqual(1);
  });
});
