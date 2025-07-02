// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../styles/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all the fields.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send("service_uhczwkr", "template_02wul1o", templateParams, "RCz6_rVPS8yn6M2xP")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsEmailSent(true);
        setErrorMessage("");
      }, (error) => {
        console.log('FAILED...', error);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out with any questions or opportunities!</p>
      <form onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          className="form-field"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          className="form-field"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
          className="form-field"
        ></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {errMessage && <p className="error-text">{errMessage}</p>}
      {isEmailSent && <p className="success-text">Your message has been sent successfully!</p>}
    </section>
  );
}

export default Contact;
