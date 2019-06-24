import * as React from "react";
import "./App.css";
import Education from './components/Education';
import Header from "./components/Header";
import Interests from "./components/Interests";
import WorkExperiences from './components/WorkExperiences';
import WorkshopMaterials from './components/WorkshopMaterials/WorkshopMaterials';

export default class App extends React.Component {
  public render() {
    return (
      <div className="center">
        <Header />
        <WorkExperiences />
        <WorkshopMaterials/>
        <Education />
        <Interests />
      </div>
    );
  }
}
