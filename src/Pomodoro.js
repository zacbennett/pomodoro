import React, { Component } from 'react';
import Timer from './Timer'
import Tags from './Tags'


class Pomodoro extends Component {
  render() {
    return (
      <div className="pomodoro">
        <Timer minutes={25} title='Work!'/>
        <Timer minutes={5} title='Break!'/>
        <Tags />
      </div>
    );
  }
}

export default Pomodoro;
