import React from "react";
import experienceStyles from "./Experience.module.css";
import { FaCheckDouble } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const skills = [
  { name: "NodeJs", level: "Experienced" },
  { name: "NestJs", level: "Basics" },
  { name: "ReactJs", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "MongoDB", level: "Experienced" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Redis", level: "Intermediate" },
  { name: "CSS3", level: "Experienced" },
  { name: "Tailwind", level: "Basics" },
  { name: "HTML", level: "Experienced" },
  { name: "Postman", level: "Experienced" },
  { name: "SwaggerIU", level: "Intermediate" },
  { name: "Docker", level: "Basics" },
  { name: "TypeScript", level: "Basics" },
  { name: "Python", level: "Basics" },
  { name: "Git/Github", level: "Experienced" },
];
const jsx = skills.map((skill, index) => (
  <div key={index} className={`${experienceStyles.tool}`}>
    <span>
      <BsPatchCheckFill />
    </span>
    <h3>{skill.name}</h3>
    <p>{skill.level}</p>
  </div>
));

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className={`container section_margin__top ${experienceStyles.gird} `}
      >
        <div className={`${experienceStyles.left} `}>
          <div className={`${experienceStyles.left_top}`}>
            <h1>Work Experience</h1>
            <div className={`${experienceStyles.experiences}`}>
              <div className={`${experienceStyles.item}`}>
                <p>
                  <FaCheckDouble />
                </p>
                <h4>as a freelancer (completed to offers)</h4>
              </div>
              <div className={`${experienceStyles.item}`}>
                <p>
                  <FaCheckDouble />
                </p>

                <h4>Kalbonyan Elmarsos 5 months Internship</h4>
              </div>
              <div className={`${experienceStyles.item}`}>
                <p>
                  <FaCheckDouble />
                </p>

                <h4>completed few projects</h4>
              </div>
            </div>
          </div>

          <div className={`${experienceStyles.left_down}`}>
            <h1>Tools & Skills</h1>

            <div className={`${experienceStyles.tools}`}>{jsx}</div>
          </div>
        </div>
        <div className={`${experienceStyles.right}  flex_center`}>
          <div className={`outer_card`}>
            <div className={`inner_card flex_center`}>
              <h2>Experience& Skills</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
