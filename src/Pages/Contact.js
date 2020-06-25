import React from "react";
import { Animated } from "react-animated-css";
import "./Contact.css";

import github from "../Images/Logos/github.png";
import linkedin from "../Images/Logos/linkedin.png";
import email from "../Images/Home/email.png";

class ContactButton {
  constructor(href, classN, img, title) {
    this.href = href;
    this.classN = classN;
    this.img = img;
    this.title = title;
  }
}

const emailButton = new ContactButton(
  "mailto:brian.hd.hoang@gmail.com",
  "email boxes",
  email,
  "Email"
);
const linkedInButton = new ContactButton(
  "https://www.linkedin.com/in/brian-hoang-519536b9/",
  "linkedIn boxes",
  linkedin,
  "LinkedIn"
);
const gitHubButton = new ContactButton(
  "https://github.com/bhoang93",
  "gitHub boxes",
  github,
  "Github"
);

const contactList = [emailButton, linkedInButton, gitHubButton];

const Contact = () => {
  return (
    <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="contactInfo">
        <ul className="list">
          {contactList.map((contact) => {
            return (
              <a className="contactLinks" href={contact.href} target="_blank">
                <li className={contact.classN}>
                  <img
                    className="contactLogos"
                    src={contact.img}
                    alt="contact logo"
                  />
                  <h2 className="contactTitle">{contact.title}</h2>
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
