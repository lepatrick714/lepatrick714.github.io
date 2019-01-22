import * as React from "react";
import * as data from "./jobs.json";
import { CVContent } from "../CVContent";
import { NavParticlesContainer } from "../../Containers";
import "./styles.css";

export class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <NavParticlesContainer />
        <div className="CenterContentPage">
          <h1>Patrick Le</h1>
          <h5>Software Engineer</h5>
        </div>
        <div className="container HomePageCV">
          <CVContent {...data} />
        </div>
      </div>
    );
  }
}
