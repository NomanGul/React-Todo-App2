import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      content: ""
    };
  }

  changeHandler(e) {
    this.setState({
      content: e.target.value
    });
  }

  submitHandler(e) {
    // console.log(e.target.value)
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  }

  render() {
    const { content } = this.state;
    return (
      <form
        onSubmit={this.submitHandler}
        className="input-field"
        style={{ marginTop: "5vh", bottom: 0 }}
      >
        <input
          id="todo"
          type="text"
          value={content}
          onChange={this.changeHandler}
        />
        <label htmlFor="todo">Add new Todo:</label>
      </form>
    );
  }
}

export default AddTodo;
