import * as React from "react";
import { allJobs } from "./allJobs";

export interface IJobsProps {
  cvMode: boolean;
  typeOfJob: "Future" | "Current" | "Past" | "Leadership";
}

export interface IJobProps {
  CompanyName: string;
  Title: string;
  Link: string;
  Date: string;
  Description: string[];
}

export class Jobs extends React.Component<IJobsProps, {}> {
  public render() {
    return this.getJobComponent();
  }

  private decodeDescription = (ele: string, index: number) => {
    if (ele[0] === "-") {
      ele = ele.substring(2);
      return (
        <ul key={index}>
          <ul>
            <li>{ele}</li>
          </ul>
        </ul>
      );
    }
    return (
      <ul key={index}>
        <li>{ele}</li>
      </ul>
    );
  };

  private getDescription = (Description: string[]) => {
    return Description.map((ele: string, index: number) => {
      return this.decodeDescription(ele, index);
    });
  };

  private getJobComponent = () => {
    return (
      <div>
        <h3>{this.props.typeOfJob}</h3>
        <ul>
          {allJobs[this.props.typeOfJob].map(
            (ele: IJobProps, index: number) => {
              return (
                <li key={index}>
                  {ele.Title} @{" "}
                  <a href={ele.Link} target="_blank">
                    {ele.CompanyName}
                  </a>{" "}
                  - {ele.Date}
                  {this.props.cvMode
                    ? this.getDescription(ele.Description)
                    : null}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  };
}
