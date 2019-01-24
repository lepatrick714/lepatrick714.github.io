import * as React from "react";
import { SocialMediaIcons } from "../SocialMediaIcons";
import resume from "../../assets/Patrick-Resume.pdf";
import "./styles.css";

export interface INavProps {
  name: string;
  path: string;
}

export interface INavbarState {
  navs: INavProps[];
}

export class Navbar extends React.Component<{}, INavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      navs: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Resume",
          path: resume
        }
      ]
    };
  }

  public getNavs = () => {
    return this.state.navs.map((item, i) => {
      return (
        <li
          className="nav-item"
          key={i}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <a className="nav-link" href={item.path}>
            {item.name}
          </a>
        </li>
      );
    });
  };

  public render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ margin: "10px" }}
      >
        <div className="container">
          <SocialMediaIcons />
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">{this.getNavs()}</ul>
          </div>

        </div>
      </nav>
    );
  }
}
