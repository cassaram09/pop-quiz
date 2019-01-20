import React, { Component } from 'react';

// import './questions.scss';

import { Question } from './'

class Questions extends Component {
  renderQuestions = data => data.map(d => <Question question={d} />)

  render() {
    return (
      <div className="questions">
        {this.renderQuestions(this.props.questionList)}
      </div>
    );
  }
}

export default Questions;