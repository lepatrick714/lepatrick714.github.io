import * as React from "react";
import { Table } from "semantic-ui-react";
import { NavParticlesContainer } from "../../Containers";
import "./styles.css";

export class Contact extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <NavParticlesContainer />
        <div className="CenterContentPage">
          <h1>Get in Touch!</h1>

          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>lepatrick714@gmail.com</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Linkedin</Table.HeaderCell>
                <Table.HeaderCell>https://www.linkedin.com/in/lepatrick714/</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        </div>
      </div>
    );
  }
}
