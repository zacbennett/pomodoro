import React, { Component } from 'react';
import Tag from './Tag';

class TagsSection extends Component {
  constructor(props) {
    super(props);

    this.state = { tagInput: '' };
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editTag = this.editTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  editTag(newTagName, oldTagName) {
    this.props.editTag(newTagName, oldTagName);
  }

  deleteTag(tagName) {
    console.log('tag section component', tagName);

    this.props.deleteTag(tagName);
  }

  handleAddTag(evt) {
    evt.preventDefault();

    this.props.addTag(this.state.tagInput);

    this.setState(state => {
      return { tagInput: '' };
    });
  }

  render() {
    let listOfTags = this.props.listOfTags.map(item => (
      <Tag
        name={item.title}
        key={item.title}
        editTag={this.editTag}
        deleteTag={this.deleteTag}
        minutes={item.minutes}
        seconds={item.seconds}
      />
    ));

    return (
      <div className="tags">
        <h2>Tags</h2>
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

        <div>

        <ul>{listOfTags}</ul>
        </div>
        
      </div>
    );
  }
}

export default TagsSection;
