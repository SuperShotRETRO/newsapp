import React, { Component } from "react";
import LoadingAsset from "../assets/Loading_icon.gif";

export class Loading extends Component {
  render() {
    return (
      <div>
        <img src={LoadingAsset} alt="loading" />
      </div>
    );
  }
}

export default Loading;
