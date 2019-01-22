import React, { Component } from 'react';


class Tags extends Component {
  constructor(props){
    super(props)

    this.state = {tagInput: ''}
    this.handleSubmitTag = this.handleSubmitTag.bind(this)



  }

  handleChange(){

  }
  handleSubmitTag(){

  }

  render() {
    return (
      <div className="tags">
        <h2>Select your tags below!</h2>

        <h2>Create a new tag below</h2>
        <div>
          <form>
            <input type="text"/>
            <button onClick={this.handleSubmitTag(evt)}>Submit!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tags;
