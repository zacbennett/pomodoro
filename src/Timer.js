import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = { minutes: 5, seconds: 0, timerId: 0, timerOn: false};
    this.handleStart = this.handleStart.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleTimer = this.handleTimer.bind(this)

    
  }

  handleTimer() {
    // prevents hitting the timer button multiple times
    if(!this.state.timerOn){
      let thisClass = this;
  
      // setInterval returns the timer id which we need in order to clear the timer
      this.setState((state) => {
        return {timerId: setInterval(function(){ 
          if(thisClass.state.seconds === 0){
            thisClass.setState((state) => {
              return {minutes: state.minutes - 1,seconds: 59};
            });
          }else{
            thisClass.setState((state) => {
              return {seconds: state.seconds - 1};
            });
          }
        }, 1000, thisClass)}
      },this.setState((state) => {
        return {timerOn: true}
      })) 
    }
  }

  

  handleStart(){
    this.handleTimer()
    // this.setState((state) => {
    //   // return {minutes: state.minutes + 1};
    //   return {seconds: 10};
    // },this.handleTimer());
  }

  handlePause(){
    clearInterval(this.state.timerId)
    this.setState((state) => {
      return {timerOn: false}
    })
  }

  componentDidUpdate(){
    if(this.state.minutes === 0 && this.state.seconds === 0){
      clearInterval(this.state.timerId)
    }
  }

  render() {
    return (
      <div className="timer">
        <h1>
          {this.state.minutes}:{this.state.seconds}
        </h1>
        <button onClick={this.handleStart}>Start!</button>
        <button onClick={this.handlePause}>Pause!</button>
      </div>
    );
  }
}

export default Timer;
