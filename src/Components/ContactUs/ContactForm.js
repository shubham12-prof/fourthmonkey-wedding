import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  const form = useRef();
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozftsvo",
        "template_kklyk8w",
        form.current,
        "J3C_U_TwQhB1fJyfn"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setFeedback({
            message: "Message sent successfully!",
            type: "success",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          setFeedback({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>GET IN TOUCH</h2>
        <p>Address :- 36, Phase 2. Engineers Enclave, GMS Road, Dehradun</p>
        <p>📞 +91 7247889013</p>
        <p>📧 weddings@fourthmunky.com</p>
        <div className="social-icon">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="contact-right">
        <h2>SEND US A MESSAGE</h2>
        <p>You can leave your queries here or just say Hello!</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          <input type="text" name="subject" placeholder="Subject" />
          <input type="tel" name="user_phone" placeholder="Phone Number" />
          <textarea
            name="message"
            placeholder="Your message (optional)"
            rows="4"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
        {feedback.message && (
          <div className={`feedback ${feedback.type}`}>{feedback.message}</div>
        )}
      </div>
    </div>
  );
}

export default Contact;
