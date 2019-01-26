import React, { Component } from 'react';
import Timer from './Timer';
import TagsSection from './TagsSection';

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfTags: [
        { title: 'werq', minutes: 0, seconds: 0 },
        { title: 'code', minutes: 0, seconds: 0 }
      ]
    };

    this.addTag = this.addTag.bind(this);
    this.editTag = this.editTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  addTag(newTag) {
    this.setState(state => {
      return { listOfTags: [...state.listOfTags, { title: newTag, minutes: 0, seconds: 0 }] };
    });
  }

  editTag(newTagName,oldTagName){

    let copyOfState = [...this.state.listOfTags]

    for(let elem of copyOfState){
      if(elem.title === oldTagName){
        elem.title = newTagName;
      }
    }

    this.setState({listOfTags: copyOfState})
  }

  deleteTag(tagName){

    let copyOfState = [...this.state.listOfTags]
    let indexToDelete;

    copyOfState.forEach(function(item,index){
      if(item.title === tagName){
        indexToDelete = index;
      }
    })

    copyOfState.splice(indexToDelete, 1)

    this.setState({listOfTags: copyOfState})
  }

  render() {
    return (
      <div className="pomodoro">
        <Timer minutes={1} title="Work!" listOfTags={this.state.listOfTags}/>
        <Timer minutes={5} title="Break!" listOfTags={this.state.listOfTags} />
        <TagsSection listOfTags={this.state.listOfTags} addTag={this.addTag} editTag={this.editTag} deleteTag={this.deleteTag}/>
      </div>
    );
  }
}

export default Pomodoro;
