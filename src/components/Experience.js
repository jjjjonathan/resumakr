import React from "react";
import Line from "../components/Line";
import Button from "../components/Button";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      position: "",
      date: "",
      responsibilities: "",
      editMode: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => {
      if (state.editMode === true) {
        return { editMode: false };
      } else {
        return { editMode: true };
      }
    });
  }

  render() {
    return (
      <div className="mt-5">
        <form noValidate onSubmit={this.handleSubmit}>
          <Line
            editMode={this.state.editMode}
            id="company"
            title="Company"
            value={this.state.company}
            onChange={this.handleChange}
            className="display-4"
          />
          <Line
            editMode={this.state.editMode}
            id="position"
            title="Position"
            value={this.state.position}
            onChange={this.handleChange}
            className="h5"
          />
          <Line
            editMode={this.state.editMode}
            id="date"
            title="Dates Employed"
            value={this.state.date}
            onChange={this.handleChange}
            className="lead"
          />
          <Line
            editMode={this.state.editMode}
            id="responsibilities"
            title="Responsibilities"
            value={this.state.responsibilities}
            onChange={this.handleChange}
            className="lead"
          />
          <Button editMode={this.state.editMode} />
        </form>
        <hr />
      </div>
    );
  }
}
