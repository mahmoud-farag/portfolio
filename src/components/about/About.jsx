import React from "react";
import aboutStyles from "./About.module.css";
import { FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiAppsFill } from "react-icons/ri";
import { BiCertification } from "react-icons/bi";

const About = () => {
  return (
    <>
      <section id="about" className={`container section_margin__top`}>
        <div className={`${aboutStyles.grid_2_columns} `}>
          <div className={`${aboutStyles.left_side} flex_center`}>
            <div className={`outer_card`}>
              <div className={`inner_card flex_center`}>
                <h2>Know Me More</h2>
              </div>
            </div>
          </div>
          <div className={`${aboutStyles.right_side}`}>
            <div className={`${aboutStyles.right_side__top} flex_center`}>
              <div className={`${aboutStyles.item} flex_center`}>
                <h1>
                  <FaAward />
                </h1>
                <h3>Education</h3>
                <h4>CS degree</h4>
              </div>
              <div className={`${aboutStyles.item} flex_center`}>
                <h1 className={`${aboutStyles.icon}`}>
                  <MdWork />
                </h1>
                <h3>Experience</h3>
                <h4>+6 months(remotely)</h4>
              </div>
              <div className={`${aboutStyles.item} flex_center`}>
                <h1 className={`${aboutStyles.icon}`}>
                  <RiAppsFill />
                </h1>
                <h3>Projects</h3>
                <h4>+8 Vary Projects</h4>
              </div>

              <div className={`${aboutStyles.item} flex_center`}>
                <h1 className={`${aboutStyles.icon}`}>
                  <BiCertification />
                </h1>
                <h3>Certifications</h3>
                <h4>+5 Udemy & Others</h4>
              </div>
            </div>
            <div className={`${aboutStyles.right_side__down}`}>
              <p>
                A passionate Junior MERN full-stack developer aiming to develop,
                create elegant,clear, standard and up to date software products
              </p>
              <a
                href="#contact"
                className={`btn btn-primary ${aboutStyles.btn_custom}`}
              >
                Talk To Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
