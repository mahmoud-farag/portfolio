import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import contactStyles from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3i6ij62",
        "template_c641fyh",
        form.current,
        "q7X_E9rcyPxw5Pc0j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section
        id="contact"
        className={`container section_margin__top ${contactStyles.contact_container}`}
      >
        <div className={`${contactStyles.contact_options} flex_center`}>
          <article className={`${contactStyles.contact_option} flex_center`}>
            <HiOutlineMail
              className={`${contactStyles.icon} ${contactStyles.mail_icon}`}
            />
            <h4>Email</h4>
            <h5>mahmoud32salamn@gmail.com</h5>
            <a href="mailto:mahmoud32salamn@gmail.com" target="_blank">
              Send Email
            </a>
          </article>

          <article className={`${contactStyles.contact_option} flex_center`}>
            <RiMessengerLine
              className={`${contactStyles.icon} ${contactStyles.messenger_icon}`}
            />
            <h4>Messenger</h4>
            <h5>Chat me</h5>
            <a href="https://m.me/mahmoud.farag.18294053" target="_blank">
              Send a Message
            </a>
          </article>

          <article className={`${contactStyles.contact_option} flex_center`}>
            <BsWhatsapp
              className={`${contactStyles.icon} ${contactStyles.whatsUp_icon}`}
            />
            <h4>WhatsApp</h4>
            <h5>+201024279414</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01024279414"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className={`  flex_center`}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <div className={`${contactStyles.btn_wrapper} `}>
            <button
              type="submit"
              className={`btn btn-primary ${contactStyles.form_btn}`}
            >
              Send Email
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
