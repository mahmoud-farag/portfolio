import React from "react";

import portfolioStyles from "./Portfolio.module.css";
import img1 from "../../assets/img1.PNG";
import img2 from "../../assets/img2.PNG";
import img3 from "../../assets/img3.PNG";
import img4 from "../../assets/img4.PNG";
import img5 from "../../assets/img5.PNG";
import img6 from "../../assets/img6.PNG";
import img7 from "../../assets/img7.PNG";
import img8 from "../../assets/img8.PNG";
import img9 from "../../assets/img9.PNG";
import img10 from "../../assets/img10.PNG";
import img11 from "../../assets/img11.PNG";
import apiImg from "../../assets/api.png";

const projects = [
  {
    img: img1,
    title: "Bankist",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/12-Numbers-Dates-Intl-and-Timers",
    live: "https://bankitfy.netlify.app/",
    description:
      "Bank app for withdraw/deposit, dummy users(user:js, pin:1234),(user:ss, pin:4444)",
  },
  {
    img: img2,
    title: "bankify",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/13-Advanced-DOM-and-Events",
    live: "https://banktify2.netlify.app/",
    description: "html/css/js website ",
  },
  {
    img: img3,
    title: "Forkify",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/18-forkify",
    live: "https://forkifymeta.netlify.app/",
    description:
      "Full Food API for display any kind of ready-food full ingredients description",
  },
  {
    img: img4,
    title: "Number gussying",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/07-JavaScript-in-the-Browser-DOM-and-Events-Fundamentals/guessing",
    live: "https://guessing-page.netlify.app/",
    description: "simple Game for number gussying  ",
  },
  {
    img: img5,
    title: "Mapper",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/15-Mapty",
    live: "https://maptify.netlify.app/",
    description: "Her you can schedule your activities based on map locations",
  },
  {
    img: img6,
    title: "Rolling Game",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/02.The-Complete-javaScript-Course-2022-From-Zero-to-Expert!/07-JavaScript-in-the-Browser-DOM-and-Events-Fundamentals/pig-game",
    live: "https://pig-game-page.netlify.app/",
    description: "Funny game based on rolling the nard",
  },
  {
    img: img7,
    title: "Green-planet",
    github: "https://github.com/mahmoud-farag/green-planet",
    live: "https://serene-lichterman-911638.netlify.app/",
    description:
      "We need to collect mony for increase the green area based on the contributor suggestion ",
  },
  {
    img: img8,
    title: "OmeniFood",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/01.Build-Responsive-Real-World-Websites-with-HTML-and-CSS/09-Omnifood-Optimizations",
    live: "https://omnifood-mfarag.netlify.app/",
    description:
      "Responsive website using up  to date html/css and web design skills ",
  },
  {
    img: apiImg,
    title: "Weather API",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/04.The-Complete-Nodejs-Developer-Course-3rd-Edition/09.Application-Deployment-Weather--App",
    live: "https://farag-weather-api.herokuapp.com/",
    description: "Nodejs API to know the weather based on your location",
  },
  {
    img: apiImg,
    title: "CRUD API",
    github: "https://github.com/mahmoud-farag/jobAPI",
    live: "https://job1api.herokuapp.com/api-docs/",
    description: "Testing CRUD functionalities with full authentication",
  },
  {
    img: apiImg,
    title: "Task Manager API",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/04.The-Complete-Nodejs-Developer-Course-3rd-Edition/16.Testing-Nodejs-Task--App",
    live: "https://task-api-32.herokuapp.com/",
    description: "Ready Task api to tracking your daily tasks",
  },
  {
    img: img9,
    title: "Online Chat",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/04.The-Complete-Nodejs-Developer-Course-3rd-Edition/17.Real-Time-Web-Application-with-Socketio-Cha--App",
    live: "https://task-api-32.herokuapp.com/",
    description: "CHat wih your friends using my chat app on yur custom room",
  },
  {
    img: img10,
    title: "Food order",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/03.React-The-Complete-Guide(inclHooks%2CReactRouter%2CRedux)/17.Practice-Project-Adding-Http-and-Forms-To-The-Food-Order-App",
    live: "https://react-course-section17.netlify.app/",
    description: "Just choose your preferred meal with us ",
  },
  {
    img: img11,
    title: "SHopping card",
    github:
      "https://github.com/mahmoud-farag/kalbonyan_elmarsos/tree/main/Udemy/03.React-The-Complete-Guide(inclHooks%2CReactRouter%2CRedux)/19.Advanced-Redux",
    live: "https://react-course-section19.netlify.app/",
    description: "tracking your online shopping",
  },
];

const jsx = projects.map((project, index) => (
  <div key={index} className={`${portfolioStyles.project}`}>
    <div className={`${portfolioStyles.project_img}`}>
      <img src={project.img} alt="project_image" />
    </div>
    <div className={`${portfolioStyles.project_body}`}>
      <h4 className={`${portfolioStyles.project_name}`}>{project.title}</h4>
      <p className={`${portfolioStyles.project_description}`}>
        {project.description}
      </p>
      <div className={`${portfolioStyles.project_links}`}>
        <a
          href={project.github}
          className={`btn ${portfolioStyles.project_btn}`}
          target="_blank"
        >
          Github
        </a>
        <a
          href={project.live}
          className={`btn btn-primary ${portfolioStyles.project_btn__main}`}
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
));

const Portfolio = () => {
  return (
    <>
      <section
        id="work"
        className={`container section_margin__top ${portfolioStyles.portfolio_container}`}
      >
        <h2 className={`${portfolioStyles.Portfolio_title}`}>My projects</h2>

        <div className={`${portfolioStyles.projects}`}>{jsx}</div>
      </section>
    </>
  );
};

export default Portfolio;
