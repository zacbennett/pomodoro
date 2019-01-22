import React, { Component } from 'react';

class Tag extends Component {
  constructor(props){
    super(props)

    this.state = {editTagInput: '', showEdit: false}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.showEdit = this.showEdit.bind(this)
  }

  handleDelete(){
    this.props.deleteTag();
  }

  handleEdit(){
    this.props.editTag();
  }

  showEdit(){
    this.setState((state) => {
      return {showEdit: !state.showEdit}
    })
  }

  render() {
    let editForm = ':)'
    

    return (
      <li className="tags" >
        {this.props.name}
        <button onClick={this.showEdit}>Edit</button>
        <button onClick={this.handleDelete}>X</button>
        <br/>
        {(this.state.showEdit ? editForm : null)}
      </li>
    );
  }
}

export default Tag;
