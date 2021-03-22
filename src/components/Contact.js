import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phone: "",
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fullName, this.state.phone, this.state.email);
  }

  render() {
    return (
      <div>
        <form
          noValidate
          className="needs-validation"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Jane Doe"
            id="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
            className="form-control"
            required
          ></input>
          <div className="invalid-feedback">Name is required</div>
          <label htmlFor="phone" className="form-label">
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="555-555-5555"
            id="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            className="form-control"
          ></input>
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="text"
            placeholder="you@example.com"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="form-control"
          ></input>
          <button type="submit" className="w-100 btb btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
