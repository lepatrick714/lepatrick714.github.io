import * as React from "react";
import UCR from "../assets/UCR_Riverside_Bourns.png";

export default class Education extends React.Component {
  public render() {
    return (
      <div>
        <h1>Education</h1>
        <div id="line" />
        <img src={UCR} alt="UC Riverside Bourns College of Engineering" />
        <h2>Bachelor of Science - Computer Science 2019</h2>
      </div>
    );
  }
}
