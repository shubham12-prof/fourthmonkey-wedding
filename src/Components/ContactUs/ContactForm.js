import React from 'react';
import './ContactForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>GET IN TOUCH</h2>
        <p>561, INDIRA NAAR Colony, Dehradun- 248001</p>
        <p>📞 +91 7247889013</p>
        <p>📧 weddings@fourthmunky.com</p>
        <div className="social-icon">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
        {/* <h3>FIND US</h3> */}
        {/* <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
          width="100%"
          height="150"
          frameBorder="0"
          allowFullScreen=""
        ></iframe> */}
      </div>
      <div className="contact-right">
        <h2>SEND US A MESSAGE</h2>
        <p>You can leave your queries here or just say Hello!</p>
        <form>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Subject" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your message (optional)" rows="4"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
