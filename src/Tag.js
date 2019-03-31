import React, { Component } from 'react';
import EditTagForm from './EditTagForm';

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = { editTagInput: '', showEdit: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ editTagInput: evt.target.value });
  }

  handleDelete(evt) {
    evt.preventDefault();

    if (window.confirm('Are you sure you want to delete this tag?')) {
      this.props.deleteTag(this.props.name);
    }
  }

  handleEdit(evt) {
    evt.preventDefault();
    this.props.editTag(this.state.editTagInput, this.props.name);
  }

  showEdit() {
    this.setState(state => {
      return { showEdit: !state.showEdit };
    });
  }

  render() {

    return (
      <li className="tags">
        {this.props.name}
        <br />
        Minutes: {this.props.minutes}. Seconds: {this.props.seconds}.
        <br />
        <button onClick={this.showEdit}>Edit</button>
        <button onClick={this.handleDelete}>X</button>
        <br />
        {this.state.showEdit ? (
          <EditTagForm 
            editTagInput={this.state.editTagInput} 
            handleChange={this.handleChange}
            handleEdit={this.handleEdit}
          />
        ) : null}
      </li>
    );
  }
}

export default Tag;
