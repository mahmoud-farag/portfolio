import React from "react";
import cv from "../../assets/cv.pdf";
import headerStyles from "./Header.module.css";

const CTA = () => {
  return (
    <>
      <div className="cta">
        <a
          href={cv}
          download
          className={`btn margin_right ${headerStyles.download}`}
        >
          Download My CV
        </a>
        <a
          href="#contact"
          className={`btn margin_right btn-primary ${headerStyles.contact}`}
        >
          Contact Me
        </a>
      </div>
    </>
  );
};

export default CTA;
