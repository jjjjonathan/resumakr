import React from "react";

export default class Button extends React.Component {
  render() {
    let button;

    if (this.props.editMode) {
      button = (
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      );
    } else {
      button = (
        <button type="submit" className="btn btn-outline-primary">
          Edit
        </button>
      );
    }

    return button;
  }
}
