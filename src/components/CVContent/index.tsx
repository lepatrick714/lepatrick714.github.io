import * as React from "react";
import { List } from "semantic-ui-react";
import "./styles.css";

export interface IJobsProps {
  title: string;
  company: string;
  link: string;
  date: string;
  contents?: string[];
}

export interface ICVContentProps {
  currentPos: IJobsProps;
  pastPos: IJobsProps[];
  leadership: IJobsProps[];
}

export class CVContent extends React.Component<ICVContentProps, {}> {
  public render() {
    return (
      <div className="list">
        {this.getPositions("Current Position", "currentPos")}
        {this.getPositions("Past Position", "pastPos")}
        {this.getLeadership()}
      </div>
    );
  }

  private getPositions = (title: string, titleProps: string) => {
    const pos: IJobsProps | IJobsProps[] = this.props[titleProps];

    const headerChunk = Array.isArray(pos)
      ? this.getPastJobHeader(pos)
      : this.getCurrentJobHeader(pos);
    return (
      <List>
        <h3>{title}</h3>
        <List.Item>
          <List.Content>{headerChunk}</List.Content>
        </List.Item>
      </List>
    );
  };

  private getPastJobHeader = (pos: IJobsProps[]) => {
    return pos.map((job: IJobsProps, key: number) => {
      return (
        <List.Header key={key} className={"ListHeader"}>
          {job.title}
          {" @ "}
          <a href={job.link}>{job.company}</a>
          {" - "}
          {job.date}
        </List.Header>
      );
    });
  };

  private getCurrentJobHeader = (pos: IJobsProps) => {
    return (
      <List.Header className={"ListHeader"}>
        {pos.title}
        {" @ "}
        <a href={pos.link}>{pos.company}</a>
        {" - "}
        {pos.date}
      </List.Header>
    );
  };

  private getLeadership = () => {
    return (
      <List>
        <h3>{"Leadership Positions"}</h3>
        <List.Item>
          <List.Content>
            {this.props.leadership.map((pos, key) => {
              return (
                <List.Header key={key} className={"ListHeader"}>
                  {pos.title}
                  {" @ "}
                  <a href={pos.link}>{pos.company}</a>
                  {" - "}
                  {pos.date}
                </List.Header>
              );
            })}
          </List.Content>
        </List.Item>
      </List>
    );
  };
}
