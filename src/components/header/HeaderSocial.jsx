import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import headerStyles from "./Header.module.css";

const HeaderSocial = () => {
  return (
    <>
      <div className={headerStyles.header_socials}>
        <a
          href="https://www.linkedin.com/in/mahmoud-farag-4346a4162/"
          className={`icon ${headerStyles.header_icon}`}
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mahmoud-farag"
          className={`icon  `}
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </>
  );
};

export default HeaderSocial;
