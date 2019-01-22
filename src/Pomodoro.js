import React, { Component } from 'react';
import Timer from './Timer'
import TagsSection from './TagsSection'


class Pomodoro extends Component {
  constructor(props){
    super(props)

    this.state = {listOfTags: ['werq']}

    this.addTag = this.addTag.bind(this);
  }

  addTag(newTag){
    
    this.setState((state) => {
      return {listOfTags: [...state.listOfTags, newTag]}
    })
  }
  render() {
    return (
      <div className="pomodoro">
        <Timer minutes={25} title='Work!'/>
        <Timer minutes={5} title='Break!'/>
        <TagsSection listOfTags={this.state.listOfTags} addTag={this.addTag}/>
      </div>
    );
  }
}

export default Pomodoro;
