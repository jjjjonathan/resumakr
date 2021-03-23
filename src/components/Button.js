import React from "react";

export default class Button extends React.Component {
  render() {
    let button;

    if (this.props.editMode) {
      button = (
        <button type="submit" className="btn btn-outline-primary mt-2">
          Submit
        </button>
      );
    } else {
      button = (
        <button type="submit" className="btn btn-sm btn-outline-primary mt-3">
          Edit
        </button>
      );
    }

    return button;
  }
}
