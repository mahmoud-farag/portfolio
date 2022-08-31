import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../global.css";
import testimonialStyles from "./Testimonials.module.css";
// import required modules
import { Pagination } from "swiper";

import educationImg from "../../assets/eduction.jpg";
import udemyImg from "../../assets/udemy.png";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <section
        id="education"
        className={`container section_margin__top ${testimonialStyles.testimonial_container}`}
      >
        <h1>Education && Courses</h1>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                {" "}
                <img src={educationImg} />
              </div>
              <h2>Education</h2>.
              <p>
                Computer science Bachelor's degree from Menofia university,
                <br />
                Computers and information Faculty, 2020 with 71%{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                The Complete JavaScript Course 2022: From Zero to Expert! The
                modern JavaScript <br /> course for everyone! Master JavaScript
                with projects, <br />
                challenges and theory. Many courses in one!
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-a94bf161-0c26-4db5-9aef-874fe8897147/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                Build Responsive Real-World Websites with HTML and CSS Learn
                <br />
                modern HTML5, CSS3 and web design by building a stunning website
                for
                <br /> your portfolio! Includes flexbox and CSS Grid
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-af3a8def-3b9f-4613-a6ca-5b5830efd396/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                React - The Complete Guide (incl Hooks, React Router, Redux)
                Dive in and learn React.js <br />
                from scratch! Learn Reactjs, Hooks, Redux, React Routing,
                Animations, <br />
                Next.js and way more!
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-cab667c1-da7d-4695-b972-54f969c1dd78/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                The Complete Node.js Developer Course (3rd Edition) Learn
                Node.js
                <br /> by building real-world applications with Node JS,
                Express, MongoDB, Jest, and more!
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-cad850bc-ba60-4853-851d-bde2c4583488/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                JavaScript: The Advanced Concepts (2022 Update) Learn modern
                advanced <br />
                JavaScript practices and be in the top 10% of JavaScript
                developers
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-edb5e9b8-a8c8-4758-bc92-614bc169a817/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${testimonialStyles.slider}`}>
            <div
              className={`${testimonialStyles.education_wrapper} flex_center`}
            >
              <div className={`${testimonialStyles.img_wrapper}`}>
                <img src={udemyImg} />
              </div>
              <h2>Udemy Courses</h2>.
              <p>
                Node JS: Advanced Concepts Get advanced with Node.Js! Learn
                caching with Redis, <br />
                speed up through clustering, and add image upload with S3 and
                Node!
                <br />
                <a
                  href="https://www.udemy.com/certificate/UC-edb5e9b8-a8c8-4758-bc92-614bc169a817/"
                  target="_blank"
                >
                  Certificate
                </a>
              </p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
