import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'utils/enzyme';

import { QuestionList } from 'questions/questionList';
import { Question } from 'questions/question';

describe('QuestionList', () => {
  it('renders without crashing', () => {
    const questionList = shallow(<QuestionList />);
  
    expect(questionList).toMatchSnapshot();
  });

  it('can handle a null list prop', () => {
    const questionList = mount(<QuestionList />);

    expect(questionList.props().list).toEqual([]);
  });

  it('renders multiple Question components', () => {
    const questionList = shallow(<QuestionList list={[ {id: 1}, {id: 2} ]}/>);

    expect(questionList.find('Question').length).toEqual(2);
  });
});
