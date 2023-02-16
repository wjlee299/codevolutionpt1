import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      comments: "",
      colour: "none",
    };
  }

  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Email: ${this.state.email}\nColour: ${this.state.colour}\nYour Comment: ${this.state.comments}`
    );
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleColourChange = (event) => {
    this.setState({
      colour: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              class="form-control"
              id="email"
              type="text"
              value={this.email}
              placeholder="john.smith@gmail.com"
              onChange={this.changeEmailHandler}
            ></input>
          </div>
          <div class="mb-3">
            <label for="comments" class="form-label">
              Comments
            </label>
            <textarea
              class="form-control"
              id="comments"
              rows="3"
              value={this.state.comments}
              placeholder="Write your comment here..."
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Colour</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={this.state.colour}
              onChange={this.handleColourChange}
            >
              <option selected>Choose a colour</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
