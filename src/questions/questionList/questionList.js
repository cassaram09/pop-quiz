import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Question } from 'questions/question'

class QuestionList extends Component {
  renderQuestions = () => this.props.list.map(q => (
    <Question 
      key={q.id}
      answer={q.answer}
      question={q.question}
      type={q.type}
    />
  ))

  render() {
    return (
      <div className="question-list">
        {this.renderQuestions()}
      </div>
    );
  }
}

QuestionList.propTypes = {
  list: PropTypes.array
};

QuestionList.defaultProps = {
  list: [],
};


export default QuestionList;
