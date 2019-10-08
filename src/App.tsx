import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {Education, Giving, Header, Interests, WorkExperiences, WorkshopMaterials} from "./components";

export default class App extends React.Component {
  public render() {
    return (
      <div className="center">
        <Router>
          <Switch>
            <Route path="/">{this.getHome()}</Route>
            <Route path="/giving">{this.getGift()}</Route>
          </Switch>
        </Router>
      </div>
    );
  }

  private getHome = () => {
    return (
      <div>
        <Header />
        <WorkExperiences />
        <WorkshopMaterials />
        <Education />
        <Interests />
      </div>
    );
  };

  private getGift = () => {
    return ( 
      <div>
        <Giving />
      </div> 
    )
  }
}
