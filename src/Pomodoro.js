import React, { Component } from 'react';
import Timer from './Timer'


class Pomodoro extends Component {
  render() {
    return (
      <div className="pomodoro">
        <Timer/>
      </div>
    );
  }
}

export default Pomodoro;
