import React, { Component } from "react";

import ButtonExample from '../ButtonExample';
import InputExample from '../InputExample';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonExample />
        <InputExample />
      </div>
    );
  }
}

export default App;
