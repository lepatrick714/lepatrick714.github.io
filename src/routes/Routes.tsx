import * as React from "react";
import { HomePage } from "src/components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/Resume/Patrick_Resume.pdf" exact={true} />
          {/* <Route path="/Contact" exact={true} component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
