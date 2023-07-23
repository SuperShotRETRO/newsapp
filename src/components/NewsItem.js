import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      read: false,
    };
  }

  handleRead = () => {
    console.log("read");
    this.setState({
      read: true,
    });
  };

  render() {
    let { title, description, image, url, theme } = this.props;
    return (
      <div
        className="card"
        style={{
          backgroundColor: `${theme === "light" ? "white" : "#202124"}`,
          color: `${theme === "light" ? "black" : "white"}`,
          borderColor: `${theme === "light" ? "black" : "white"}`,
        }}
      >
        <span
          key={this.state.read}
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "95%", zIndex: 1 }}
        >
          {this.state.read ? "Read" : "New"}
        </span>
        <img
          src={image}
          className="card-img-top"
          style={{ maxHeight: "150px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </h5>
          <p className="card-text">
            {description
              ? description.length > 50
                ? description.slice(0, 50) + "..."
                : description
              : ""}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            onClick={this.handleRead}
          >
            Go to News
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
