import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactCountryDropdown as CountryPicker } from "react-country-dropdown";
import "react-country-dropdown/dist/index.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { tCountry, tTheme, theme } = this.props;
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${
            theme === "light" ? "light" : "dark"
          } bg-${theme === "light" ? "light" : "dark"}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li>
                  <div style={{ width: "150px", zIndex: 10 }}>
                    <CountryPicker onSelect={tCountry} />
                  </div>
                </li>
                <li>
                  <div
                    className="form-check form-switch my-2"
                    style={{ width: "190px" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={tTheme}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                      style={{
                        color: `${theme === "light" ? "black" : "white"}`,
                      }}
                    >
                      Toggle {theme === "light" ? "Dark" : "Light"} Mode
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
