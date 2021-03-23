import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <label htmlFor={this.props.id} className="form-label">
          {this.props.title}:
        </label>
        <input
          type="text"
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
          className="form-control"
        ></input>
      </div>
    );
  }
}
