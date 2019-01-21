import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Notification } from 'common/notification'

class Question extends Component {
  state = {
    answerVisible: false,
    confirmationVisible: false,
  }

  // called when user wants to reveal answer
  confirm = () => {
    this.setState({ confirmationVisible: true })
  }

  // renders notification if user wants to reveal answer
  renderNotification = () => {
    if (this.state.confirmationVisible) {
      return( 
        <Notification
          accept={{ 
            text: "Show Answer", 
            fn: () => this.setState({ confirmationVisible: false, answerVisible: true }) 
          }}
          cancel={{ 
            text: "I'm not ready", 
            fn: () => this.setState({ confirmationVisible: false })
          }}
          message={"Are you sure you want to reveal the answer?"}
        />
      )
    } 
  }

  // renders answer if answer is revealed
  renderAnswer = () => {
    if (this.state.answerVisible){
      return <p className="question__answer">{this.props.answer}</p>
    }
  }

  // renders the button to allow for revealing of answer
  renderRevealButton = () => {
    if (!this.state.answerVisible) {
      return (
        <button 
          onClick={this.confirm} 
          className="button is-info question__reveal-answer"
        >
          Reveal Answer
        </button>
      )
    }
  }

  renderQuestion = () => {
    return <p className="question__text">{this.props.question}</p>
  }

  render() {
    return (
      <section className="section question">
        {this.renderQuestion()}
        {this.renderRevealButton()}
        {this.renderAnswer()}
        {this.renderNotification()}
      </section>
    );
  }
}

Question.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
  type: PropTypes.string
};

Question.defaultProps = {
  answer: '',
  question: '',
  type: ''
};

export default Question;
