import React from "react";
import Line from "../components/Line";
import Button from "../components/Button";

export default class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      degree: "",
      date: "",
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
        <h3 className="display-6">Education</h3>
        <form noValidate onSubmit={this.handleSubmit}>
          <Line
            editMode={this.state.editMode}
            id="school"
            title="School"
            value={this.state.school}
            onChange={this.handleChange}
            className="display-4"
          />
          <Line
            editMode={this.state.editMode}
            id="degree"
            title="Degree Program"
            value={this.state.degree}
            onChange={this.handleChange}
            className="h5"
          />
          <Line
            editMode={this.state.editMode}
            id="date"
            title="Dates Attended"
            value={this.state.date}
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
