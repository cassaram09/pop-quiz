import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'utils/enzyme';

import { Question } from 'questions/question';
import { Notification } from 'common/notification'

describe('Question', () => {
  it('renders without crashing', () => {
    const question = shallow(<Question />);
  
    expect(question).toMatchSnapshot();
  });

  it('can handle null props', () => {
    const question = mount(<Question/>);

    expect(question.props().question).toEqual('');
    expect(question.props().answer).toEqual('');
    expect(question.props().type).toEqual('');
  });

  it('renders the question text', () => {
    const question = render(<Question question={"How are you?"}/>);

    expect(question.find('.question__text').length).toEqual(1)
    expect(question.find('.question__text').text()).toBe("How are you?");
  });

  it('renders the reveal button when answer is not revealed', () => {
    const question = render(<Question />);

    expect(question.find('.question__reveal-answer').length).toEqual(1)
  });

  it('does not render the reveal button when answer is revealed', () => {
    const question = mount(<Question />);

    question.setState({ answerVisible: true})

    expect(question.find('.question__reveal-answer').length).toEqual(0)
  });

  it('renders a notification when "Reveal Answer" is clicked', () => {
    const question = mount(<Question />);

    question.find('.question__reveal-answer').simulate('click')

    expect(question.find('Notification').length).toEqual(1)
  });
});
