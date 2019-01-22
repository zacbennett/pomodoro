import React, { Component } from 'react';


class Tags extends Component {
  constructor(props){
    super(props)

    this.state = {tagInput: ''}
    this.handleAddTag = this.handleAddTag.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value})
  }

  handleAddTag(evt){
    evt.preventDefault()

    this.props.addTag(this.state.tagInput)

    this.setState((state) => {
      return {tagInput:''}
    })
  }

  render() {

    let listOfTags = this.props.listOfTags.map(function(item){
      return <li key={item}>{item}</li>
    })

    return (
      <div className="tags">
        <h2>Select your tags below!</h2>
        <ul>
          {listOfTags}
        </ul>
        <div>
          <form action="" onSubmit={this.handleAddTag}>
          <label htmlFor="addtag-form">Add Tag</label>
          <input
            id="tagInput-text"
            type="text"
            name="tagInput"
            onChange={this.handleChange}
            value={this.state.tagInput}
          />
          <button>Submit Comment!</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Tags;
