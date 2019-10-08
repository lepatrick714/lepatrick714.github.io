import * as React from "react";
import {Jobs} from "./";

export interface IWorkExperienceState {
  cvMode: boolean;
}

export class WorkExperiences extends React.Component<{},IWorkExperienceState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      cvMode: false
    };
  }

  public toggleCvMode = () => {
    this.setState({
      cvMode: !this.state.cvMode
    });
  };

  public getCv = (company: string) => {
    return <h1>Hello World</h1>;
  };

  public render() {
    return (
      <section>
        <div>
          <h1>
            Work Experience <button onClick={this.toggleCvMode}>CVMode?</button>
          </h1>
          <div id="line" />
          <Jobs cvMode={this.state.cvMode} typeOfJob={"Current"} />
          <Jobs cvMode={this.state.cvMode} typeOfJob={"Past"} />
          <Jobs cvMode={this.state.cvMode} typeOfJob={"Leadership"} />
        </div>
      </section>
    );
  }
}
