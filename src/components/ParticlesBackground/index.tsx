import * as React from "react";
import Particles from "react-particles-js";

export class ParticlesBackground extends React.Component<{}, {}> {
  public render() {
    return (
      <Particles
        className="HomePageContainer"
        params={this.getParticlesConfig().params}
      />
    );
  }
  private getParticlesConfig = () => {
    return {
      params: {
        particles: {
          number: {
            value: 60
          },
          color: {
            value: "#202124"
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 1
            }
          },
          move: {
            speed: 2
          }
        }
      },
      style: {
        height: "100%",
        width: "100%"
      }
    };
  };
}
