import * as React from "react";
import { SocialIcon } from "react-social-icons";

export interface ISocialMediaProps {
  name: string;
  link: string;
}

export interface ISocialMediaIcons {
  links: ISocialMediaProps[];
}

export class SocialMediaIcons extends React.Component<{}, ISocialMediaIcons> {
  constructor(props: any) {
    super(props);
    this.state = {
      links: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/lepatrick714/"
        },
        {
          name: "github",
          link: "https://github.com/lepatrick714/"
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/lepatrick714/"
        }
      ]
    };
  }

  public render() {
    return <div>{this.getSocialMediaLinks()}</div>;
  }

  private getSocialMediaLinks = () => {
    return this.state.links.map((media, index) => {
      return (
        <SocialIcon
          key={index}
          network={media.name}
          url={media.link}
          color="#fff"
          style={{ height: 30, width: 30, margin: 10 }}
        />
      );
    });
  };
}
