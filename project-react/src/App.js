import React, { Component } from 'react';
import Tooltip from './Tooltip';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tooltip overlay="prompt text" pos="tl"/>
        <Tooltip overlay="prompt text" pos="tr"/>
        <Tooltip overlay="prompt text" pos="t"/>
        <Tooltip overlay="prompt text" pos="r"/>
        <Tooltip overlay="prompt text" pos="b"/>
        <Tooltip overlay="prompt text" pos="l"/>
      </div>
    );
  }
}

export default App;
