import React, { Component } from 'react';

// import './questions.scss';

import { Question } from './'

class QuestionList extends Component {
  renderQuestions = data => data.map(d => <Question question={d} />)

  render() {
    return (
      <div className="questions">
        {this.renderQuestions(this.props.list)}
      </div>
    );
  }
}

export default QuestionList;