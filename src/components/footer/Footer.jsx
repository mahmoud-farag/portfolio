import React from "react";
import footerStyles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={` ${footerStyles.footer_container} flex_center`}>
      <a href="#" className={`${footerStyles.logo} `}>
        <img src={logoImg} />
      </a>
      <ul className={`flex_center ${footerStyles.links}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#education ">Education</a>
        </li>
        <li>
          <a href="#contact ">Contact</a>
        </li>
      </ul>
      <ul className={`flex_center ${footerStyles.social_icons}`}>
        <li className={`${footerStyles.social_icon}`}>
          <a
            href="https://www.facebook.com/mahmoud.farag.18294053"
            target="_blank"
            className={`icon ${footerStyles.facebook_icon} ${footerStyles.social_icon}`}
          >
            <BsFacebook />
          </a>
        </li>

        <li className={`${footerStyles.social_icon}`}>
          <a
            href="https://twitter.com/"
            target="_blank"
            className={`icon ${footerStyles.twitter_icon} ${footerStyles.social_icon}`}
          >
            <BsTwitter />
          </a>
        </li>

        <li className={`${footerStyles.social_icon}`}>
          <a
            href="https://www.linkedin.com/in/mahmoud-farag-4346a4162/"
            target="_blank"
            className={`icon ${footerStyles.linkedin} ${footerStyles.social_icon}`}
          >
            <BsLinkedin />
          </a>
        </li>

        <li className={`${footerStyles.social_icon}`}>
          <a
            href=" https://github.com/mahmoud-farag"
            target="_blank"
            className={`icon ${footerStyles.github} ${footerStyles.social_icon}`}
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
