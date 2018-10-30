import React from "react";
import { Animated } from "react-animated-css";
import { Collapse } from "reactstrap";
import "./Contact.css";

import github from "../Images/Logos/github.png";
import linkedin from "../Images/Logos/linkedin.png";
import email from "../Images/Home/email.png";

class ContactButton {
  constructor(href, classN, img, aniDelay, title) {
    this.href = href;
    (this.classN = classN), (this.img = img);
    this.aniDelay = aniDelay;
    this.title = title;
  }
}

const emailButton = new ContactButton(
  "mailto:bhoang35@gmail.com",
  "email boxes",
  email,
  900,
  "Email"
);
const linkedInButton = new ContactButton(
  "https://www.linkedin.com/in/brian-hoang-519536b9/",
  "linkedIn boxes",
  linkedin,
  1200,
  "LinkedIn"
);
const gitHubButton = new ContactButton(
  "https://github.com/bhoang93",
  "gitHub boxes",
  github,
  1500,
  "Github"
);

const contactList = [emailButton, linkedInButton, gitHubButton];

const Contact = () => {
  return (
    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="contactInfo">
        <ul className="list">
          {contactList.map(contact => {
            return (
              <a className="contactLinks" href={contact.href}>
                <li className={contact.classN}>
                  <img className="contactLogos" src={contact.img} />

                  <Animated
                    animationIn="fadeIn"
                    animationInDelay={contact.aniDelay}
                    isVisible={true}
                  >
                    <h2>{contact.title}</h2>
                  </Animated>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </Animated>
  );
};

export default Contact;
