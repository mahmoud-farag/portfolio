import React, { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaAward } from "react-icons/fa";
import navStyles from "./Nav.module.css";

const Nav = () => {
  const [isActive,setIsActive]=useState('#');
   
  return (
    <>
      <nav>
        <div onClick={()=>setIsActive('#')} className={`${navStyles.wrapper} ${isActive==='#'? navStyles.active:''} `}>
          <span>Home</span>
          <a href="#" className={`icon ${navStyles.nav_icon}`}>
            <AiTwotoneHome />
          </a>
        </div>
        <div onClick={()=>setIsActive('about')} className={`${navStyles.wrapper}  ${isActive==='about'? navStyles.active:''}` }>
          <span>About</span>
          <a href="#about" className={`icon ${navStyles.nav_icon}`}>
            <FaUserAlt />
          </a>
        </div>
        <div onClick={()=>setIsActive('experience')} className={`${navStyles.wrapper} ${isActive==='experience'? navStyles.active:''}`}>
          <span>Experience</span>
          <a href="#experience" className={`icon ${navStyles.nav_icon}`}>
            <FaBookOpen />
          </a>
        </div>
        <div onClick={()=>setIsActive('work')} className={`${navStyles.wrapper}  ${isActive==='work'? navStyles.active:''}` }>
          <span>MY works</span>
          <a href="#work" className={`icon ${navStyles.nav_icon}`}>
            <SiUpwork />
          </a>
        </div>
        <div onClick={()=>setIsActive('education')} className={`${navStyles.wrapper}  ${isActive==='education'? navStyles.active:''}` }>
          <span>Education</span>
          <a href="#education" className={`icon ${navStyles.nav_icon}`}>
            <FaAward />
          </a>
        </div>
        <div onClick={()=>setIsActive('contact')} className={`${navStyles.wrapper}  ${isActive==='contact'? navStyles.active:''}` }>
          <span>Talk Me</span>
          <a href="#contact" className={`icon ${navStyles.nav_icon}`}>
            <AiFillMessage />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
