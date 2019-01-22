import React, { Component } from 'react';

class Tag extends Component {
  constructor(props){
    super(props)

    this.state = {tagInput: ''}
    this.handleAddTag = this.handleAddTag.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }


  render() {

    

    return (
      <div className="tags">
        
      </div>
    );
  }
}

export default Tag;
