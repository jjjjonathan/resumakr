import React from "react";
import Input from "../components/Input";
import Static from "../components/Static";

export default class Line extends React.Component {
  render() {
    let line;

    if (this.props.editMode) {
      line = (
        <Input
          id={this.props.id}
          title={this.props.title}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      );
    } else {
      line = (
        <Static
          id={this.props.id}
          className={this.props.className}
          value={this.props.value}
          displayTitle={this.props.displayTitle}
          title={this.props.title}
        />
      );
    }

    return line;
  }
}
