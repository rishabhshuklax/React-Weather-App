import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="center-container">
        <form onSubmit={this.props.getWeather}>
          <input
            type="city"
            class="form-control"
            id="city-input"
            placeholder="Enter City..."
          />
          <input
            type="country"
            class="form-control"
            id="exampleInputCountry1"
            placeholder="Enter Country..."
          />
          <button type="submit" class="btn btn-primary">
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}
