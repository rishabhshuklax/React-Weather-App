import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Form from "./components/Form";
import Result from "./components/Result";
export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    req: false
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements[0].value;
    const country = e.target.elements[1].value;
    if (city && country) {
      const dataJSON = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=ad21870045862f95aa7a65818ea7edc7`
      );
      const data = await dataJSON.json();
      console.log(data);
      data.cod === 200
        ? this.setState({
            temperature: Math.floor(data.main.temp - 273.15),
            city: data.name,
            country: data.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            req: true
          })
        : alert("City Not Found");
    }
  };
  render() {
    return (
      <>
        <nav
          class="navbar navbar-expand-md bg-dark navbar-dark"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 10
          }}
        >
          <h1 className="navbar-brand" style={{ fontSize: "2.5rem" }}>
            Weather App
          </h1>
        </nav>
        <div className="container">
          <div
            className=" form-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            <Form data={this.state} getWeather={this.getWeather} />
            <Result data={this.state} />
          </div>
        </div>
      </>
    );
  }
}
