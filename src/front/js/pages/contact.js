import React, { useContext } from "react";
import Button from "../component/tags/button";
import "../../styles/contact.css";
import { Context } from "../store/appContext";

const Contact = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="contact_section">
      {store.windowsWidth >= "800" ? (
        <div className="contact_imgSection"></div>
      ) : (
        ""
      )}
      <div className="contact_div">
        <form
          className="contact_form flex-center"
          action="https://formsubmit.co/nicolettastruggia@hotmail.com"
          method="POST"
        >
          <h2 className="w-100 contact_title">Contact Us</h2>
          <div className="contact_container d-flex justify-content-center">
            <div className="input_container flex-center">
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                className="contact-text"
                type="text"
                name="name"
                placeholder="Message"
                required
              ></textarea>
              <input
                type="hidden"
                name="_next"
                value="https://sample-service-name-2g1r.onrender.com/thanks"
              ></input>
              <Button classname="contact_button" name="Send"></Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
