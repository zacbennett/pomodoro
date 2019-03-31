import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 25,
      defMins: 25,
      seconds: 0,
      timerOn: false,
      currTag: 'werq',
      showEdit: false
    };
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.handleTimerChange = this.handleTimerChange.bind(this);
    this.timerId = null;
  }

  incrementTagTimer() {
    let currTag = this.props.listOfTags.filter(
      item => item.title === this.state.currTag
    );
    let newMinutes;
    let newSeconds;

    if (currTag[0].seconds === 59) {
      newMinutes = currTag[0].minutes + 1;
      newSeconds = 0;
    } else {
      newMinutes = currTag[0].minutes;
      newSeconds = ++currTag[0].seconds;
    }

    this.props.incrementTagTimer(this.state.currTag, newMinutes, newSeconds);
  }

  closeEditForm() {
    this.setState({ showEdit: false });
  }

  handleTimer() {
    // prevents hitting the timer button multiple times
    if (!this.state.timerOn) {
      let thisClass = this;
      // setInterval returns the timer id which we need in order to clear the timer
      this.timerId = setInterval(function() {
        thisClass.incrementTagTimer();
        if (thisClass.state.seconds === 0) {
          thisClass.setState(state => {
            return { minutes: state.minutes - 1, seconds: 59 };
          });
        } else {
          thisClass.setState(state => {
            return { seconds: state.seconds - 1 };
          });
        }
      }, 1000);

      this.setState(state => {
        return { timerOn: true };
      });
    }
  }

  handleStart() {
    this.closeEditForm();
    this.handleTimer();
  }

  handleReset() {
    this.closeEditForm();

    this.setState(state => {
      return { minutes: this.state.defMins, seconds: 0 };
    }, this.handlePause());
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleTimerChange(evt) {
    this.setState({ defMins: evt.target.value, minutes: evt.target.value });
  }

  handlePause() {
    this.closeEditForm();
    clearInterval(this.timerId);
    this.setState(state => {
      return { timerOn: false };
    });
  }

  componentDidUpdate() {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      clearInterval(this.timerId);
    }
  }
  toggleEdit() {
    console.log(this);
    this.setState({ showEdit: !this.state.showEdit });
  }

  render() {
    let selectTags = this.props.listOfTags.map(item => (
      <option value={item.title} key={item.title} name={item.title}>
        {item.title}
      </option>
    ));

    return (
      <div className="timer">
        <h1>{this.props.title}</h1>
        <h2>
          {this.state.minutes}:{this.state.seconds}
        </h2>
        <button onClick={this.handleStart}>Start!</button>
        <button onClick={this.handlePause}>Pause!</button>
        <button onClick={this.handleReset}>Reset!</button>
        <button onClick={this.toggleEdit}>Edit!</button>
        {this.state.showEdit ? (
          <input
            type="number"
            value={this.state.minutes}
            name="minutes"
            onChange={this.handleTimerChange}
          />
        ) : null}

        <br />
        {this.props.title === 'Work!' ? (
          <h4>Watcha working on? :)</h4>
        ) : (
          <h4>Watcha breaking on? :)</h4>
        )}
        
        <select
          value={this.state.currTag}
          name="currTag"
          onChange={this.handleChange}
        >
          {selectTags}
        </select>
      </div>
    );
  }
}

export default Timer;
