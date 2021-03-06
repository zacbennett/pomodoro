import React, { Component } from 'react';
import Timer from './Timer';
import TagsSection from './TagsSection';
import './Pomodoro.css';

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfTags: [
        { title: 'werq', minutes: 5, seconds: 59 },
        { title: 'code', minutes: 1, seconds: 30 }
      ]
      // listOfTags: {
      //   'werq': { title: 'werq', minutes: 5, seconds: 59 },
      //   'code': { title: 'code', minutes: 1, seconds: 30 }
      // }
    };

    this.addTag = this.addTag.bind(this);
    this.editTag = this.editTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.incrementTagTimer = this.incrementTagTimer.bind(this);
  }

  addTag(newTag) {
    this.setState(state => {
      return {
        listOfTags: [
          ...state.listOfTags,
          { title: newTag, minutes: 0, seconds: 0 }
        ]
      };
    });
  }

  incrementTagTimer(tagName, newMinutes, newSeconds) {
    let copyOfState = [...this.state.listOfTags];

    for (let elem of copyOfState) {
      if (elem.title === tagName) {
        elem.minutes = newMinutes;
        elem.seconds = newSeconds;
      }
    }

    this.setState({ listOfTags: copyOfState });

    // this.setState({listOfTags})
  }

  editTag(newTagName, oldTagName) {
    let copyOfState = [...this.state.listOfTags];

    for (let elem of copyOfState) {
      if (elem.title === oldTagName) {
        elem.title = newTagName;
      }
    }

    this.setState({ listOfTags: copyOfState });
  }

  deleteTag(tagName) {
    let copyOfState = [...this.state.listOfTags];
    let indexToDelete;

    copyOfState.forEach(function(item, index) {
      if (item.title === tagName) {
        indexToDelete = index;
      }
    });

    copyOfState.splice(indexToDelete, 1);

    this.setState({ listOfTags: copyOfState });
  }

  render() {
    return (
      <div className="pomodoro">
        <div id="timer-container">
          <Timer
            title="Work!"
            listOfTags={this.state.listOfTags}
            incrementTagTimer={this.incrementTagTimer}
          />
          <Timer
            title="Break!"
            listOfTags={this.state.listOfTags}
          />
        </div>
        <div id="tags-container">
          <TagsSection
            listOfTags={this.state.listOfTags}
            addTag={this.addTag}
            editTag={this.editTag}
            deleteTag={this.deleteTag}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
