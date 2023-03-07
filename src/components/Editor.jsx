import React, { Component } from "react";
import "./editor.css";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="input">
            <h1>Input</h1>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </div>
          <div className="output">
            <h1>Pro Note</h1>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </div>
    );
  }
}
