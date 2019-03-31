import React, { Component } from 'react';

class EditTagForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="editTagInput"
          value={this.props.editTagInput}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleEdit}>Save Changes</button>
      </form>
    );
  }
}
export default EditTagForm;
