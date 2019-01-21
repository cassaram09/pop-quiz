import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Question } from 'questions/question'

class QuestionList extends Component {
  renderQuestions = () => this.props.list.map(q => <Question key={q.id} question={q} />)

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
