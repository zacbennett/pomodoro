import React, { Component } from 'react';

class Tag extends Component {
  constructor(props){
    super(props)

    this.state = {editTagInput: '', showEdit: false}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({editTagInput: evt.target.value})
  }

  handleDelete(){
    this.props.deleteTag();
  }

  handleEdit(evt){
    evt.preventDefault()
    this.props.editTag(this.state.editTagInput, this.props.name);
  }

  showEdit(){
    this.setState((state) => {
      return {showEdit: !state.showEdit}
    })
  }

  render() {
    let editForm = (<form>
      <input type="text" name="editTagInput" value={this.state.editTagInput} onChange={this.handleChange}/>
      <button onClick={this.handleEdit}>Save Changes</button>
    </form>)
    

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
