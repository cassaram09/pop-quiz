import React, { Component } from 'react';

import './app.scss';

import DATA from 'utils/mockData'

import { QuestionList } from 'questions'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <QuestionList list={DATA} />
        </div>
      </div>
    );
  }
}

export default App;