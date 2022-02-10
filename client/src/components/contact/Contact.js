import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="bg-white p-5 w-50 h-75 ms-5 text-start">
        <p className="h1 py-4">CONTACTÁNOS</p>
        <p>Por favor dejanos tus datos para que podamos contactarnos.</p>
        <form id="contactForm">
          <div class="mb-3">
            <label class="form-label" htmlFor="name">
              Name
            </label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              class="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>

          <div class="d-grid">
            <button class="btn btn-danger w-25" type="submit">
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
