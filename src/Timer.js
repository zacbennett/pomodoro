import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = { minutes: 0, seconds: 0, timerId: 0};
    this.handleStart = this.handleStart.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleTimer = this.handleTimer.bind(this)

    
  }

  handleTimer() {
    let thisClass = this;

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
    }) 


  }

  componentDidUpdate(){
    if(this.state.minutes === 0 && this.state.seconds === 0){
      clearInterval(this.state.timerId)
    }
  }

  handleStart(){
    this.setState((state) => {
      // return {minutes: state.minutes + 1};
      return {seconds: 10};
    },this.handleTimer());
  }
  handlePause(){
    // console.log(typeof this.state.minutes)
    console.log(':)')
    clearInterval(this.state.timerId)

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
