import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;

  constructor() {
    super();
    this.state = {
      theme: "light",
      category: "general",
      country: "in",
      progress: 0,
    };
  }

  toggleTheme = () => {
    if (this.state.theme === "light") {
      this.setState({
        theme: "dark",
      });
      document.body.style.backgroundColor = "#202124";
    } else {
      this.setState({
        theme: "light",
      });
      document.body.style.backgroundColor = "white";
    }
  };

  toggleCountry = (country) => {
    this.setState({
      country: country["code"].toLowerCase(),
    });
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  componentDidMount() {
    console.log(this.apiKey);
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar
            tCountry={this.toggleCountry}
            tTheme={this.toggleTheme}
            theme={this.state.theme}
          />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={`general-${this.state.country}`}
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"general"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"entertainment"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"business"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"health"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"science"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"sports"}
                  theme={this.state.theme}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  apiKey={this.apiKey}
                  pageSize={20}
                  country={this.state.country}
                  category={"technology"}
                  theme={this.state.theme}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
