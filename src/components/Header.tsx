import * as React from "react";
import Resume from "../assets/Patrick_Resume.pdf";

export default class Header extends React.Component {
  public render() {
    return (
      <section>
        <div id="title">
          <h1>Patrick Le</h1>
          <h5>Updated on June 23rd, 2019</h5>
          <p>Software Engineer, Swimmer, Musician</p>
          <ul className="centerUl">
            <li>
              <a
                href="https://github.com/lepatrick714"
                target="_blank"
                className="a_icon"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lepatrick714"
                target="_blank"
                className="a_icon"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="mailto:lepatrick714@gmail.com"
                target="_blank"
                className="a_icon"
              >
                <i className="far fa-envelope" />
              </a>
            </li>
            <li>
              <a href={Resume} target="_blank" className="a_icon">
                <i className="far fa-file-alt" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
