import React, { Component } from 'react';

import './app.scss';

import DATA from 'utils/mockData'

import { Questions } from 'questions'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
        
          <Questions questionList={DATA} />
        </div>
      </div>
    );
  }
}

export default App;