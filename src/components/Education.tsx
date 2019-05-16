import * as React from "react";
import UCR from "../assets/UCR_Riverside_Bourns.png";

export default class Education extends React.Component {
  public render() {
    return (
      <div>
        <h1>Education</h1>
        <div id="line" />
        <a href="https://www.engr.ucr.edu/" target="_blank">
          <img src={UCR} alt="UC Riverside Bourns College of Engineering" />
        </a>
        <h2>Bachelor of Science - Computer Science 2019</h2>
      </div>
    );
  }
}
