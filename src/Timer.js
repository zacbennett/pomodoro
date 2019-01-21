import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = { minutes: 0, seconds: 0 };
    this.handleClick = this.handleClick.bind(this)
    this.handleTimer = this.handleTimer.bind(this)
  }

  handleTimer(){
    let thisClass = this;

    setInterval(function(){ 
      if(thisClass.state.seconds === 0){
        thisClass.setState((state) => {
          return {minutes: state.minutes - 1,seconds: 59};
        });
      }else{
        thisClass.setState((state) => {
          return {seconds: state.seconds - 1};
        });
      }
    }, 1000, thisClass);

    // timer();

    // if(this.state.minutes === 0 && this.state.seconds === 0){
    //     clearInterval(timer)
    // }
  }

  handleClick(){
    // console.log(typeof this.state.minutes)
    this.setState((state) => {
      return {minutes: state.minutes + 5};
    },this.handleTimer());
  }

  

  render() {
    return (
      <div className="timer">
        <h1>
          {this.state.minutes}:{this.state.seconds}
        </h1>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
}

export default Timer;
