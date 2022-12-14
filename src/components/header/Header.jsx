import React from "react";
import CTA from "./CTA";
import me from "../../assets/me-v2.png";
import HeaderSocial from "./HeaderSocial";

import headerStyles from "./Header.module.css";
import Nav from "../nav/Nav";

const Header = () => {
  // const headerCss = `${headerStyles.header_container} container`;
  return (
    <>
      <section
        className={`container ${headerStyles.header_container} container`}
      >
        <header>
          <div className={`${headerStyles.title} flex_center`}>
            <div>
              <h5>Hi allπ</h5>
              <h1>I'm Mahmoud farag</h1>
              <p> MERN Fullstack Developer π</p>
            </div>
            <CTA />
          </div>

          <HeaderSocial />
          <Nav />
          {/* <div className={headerStyles.meImg}>
            <img src={me} />
          </div> */}

          <div className={headerStyles.scroll_down}>
            <a href="#contact" className={headerStyles.scroll_down__text}>
              Scroll Down
            </a>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
