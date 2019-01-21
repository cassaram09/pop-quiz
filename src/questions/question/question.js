import React, { Component } from 'react';

import { Notification } from 'common/notification'

class Question extends Component {
  state = {
    answerVisible: false,
    confirmationVisible: false,
  }

  confirm = () => {
    this.setState({ confirmationVisible: true })
  }

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

  formatAnswer = () => {
    const question = this.props.question

    if (question.type === "multiChoice") {
      return <p>{question.multiChoice[question.answer]}</p>
    }
    
    return <p>{question.answer}</p>
  }

  renderAnswer = () => {
    if (this.state.answerVisible){
      return this.formatAnswer()
    }
  }

  renderRevealButton = () => {
    if (!this.state.answerVisible) {
      return <button onClick={this.confirm} className="button is-info">Reveal Answer</button>
    }
  }

  renderQuestion = () => {
    const question = this.props.question
    const questionTitle = <p className="question__title">{question.question}</p>

    if (question.type === "multiChoice") {
      return (
        <div>
          {questionTitle}
          <ol type="A">{question.multiChoice.map(q => <li>{q}</li>)}</ol>
        </div>
      )
    }
    
    return questionTitle;
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

export default Question;