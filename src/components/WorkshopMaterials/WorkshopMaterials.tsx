// tslint:disable:object-literal-sort-keys
import * as React from "react";
import { listOfWorkshops } from "./workshopMaterialsJson";

export interface IWorkshops {
  Title: string;
  Date: string;
  Link: string;
}

export class WorkshopMaterials extends React.Component {
  public constructor(props: any) {
    super(props);
    this.state = {
      cvMode: false
    };
  }

  public render() {
    return (
      <section>
        <div>
          <h1>Workshop/Talks Materials</h1>
          <div id="line" />
          {this.getWorkshops()}
        </div>
      </section>
    );
  }

  private getWorkshops = () => {
    return (
      <ul>
        {listOfWorkshops.map((ele, index) => {
          return (
            <li key={index}>
              {ele.Title} - {ele.Date} - <a href={ele.Link}>Link</a>
            </li>
          );
        })}
      </ul>
    );
  };
}
