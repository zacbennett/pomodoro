import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = { minutes: this.props.minutes, seconds: 0, timerOn: false};
    this.handleStart = this.handleStart.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.timerId = null;
  }

  handleTimer() {
    // prevents hitting the timer button multiple times
    if(!this.state.timerOn){
      let thisClass = this
      // setInterval returns the timer id which we need in order to clear the timer
      this.timerId = setInterval(function(){ 

          if(thisClass.state.seconds === 0){
            thisClass.setState((state) => {
              return {minutes: state.minutes - 1,seconds: 59};
            });
          }else{
            thisClass.setState((state) => {
              return {seconds: state.seconds - 1};
            });
          }
        }, 1000)
      

      this.setState((state) => {
        return {timerOn: true}
      }) 
    }
  }

  

  handleStart(){
    this.handleTimer()
    
  }

  handleReset(){
    this.setState((state) => {
      return {minutes: this.props.minutes,seconds:0}
    },this.handlePause())
  }
  handlePause(){
    clearInterval(this.timerId)
    this.setState((state) => {
      return {timerOn: false}
    })
  }

  componentDidUpdate(){
    if(this.state.minutes === 0 && this.state.seconds === 0){
      clearInterval(this.timerId)
    }
  }

  render() {
    return (
      <div className="timer">
      <h1>{this.props.title}</h1>
        <h2>
          {this.state.minutes}:{this.state.seconds}
        </h2>
        <button onClick={this.handleStart}>Start!</button>
        <button onClick={this.handlePause}>Pause!</button>
        <button onClick={this.handleReset}>Reset!</button>
      </div>
    );
  }
}

export default Timer;
