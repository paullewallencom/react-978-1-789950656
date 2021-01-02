import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class Single extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })	
    if (values["imageLink"] && values["description"]) {
    values.id = Number(new Date())
    this.props.addPicture(values.id,values.imageLink,values.description)
    this.props.history.push('/')
    }
    }
  render() {
    return (
      <div className="add-post">
<div className="form" onSubmit={this.handleSubmit}>
<form className="add-form">
  <input name="imageLink" placeholder="Link"/>
  <input name="description" placeholder="Description"/>
  <button>Post</button>
</form>
</div>
    </div>
    );
  }
}

export default Single;


