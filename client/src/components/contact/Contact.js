import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="form-container">
        <p className="form-title text-start py-4">CONTACTÁNOS</p>
        <p>Por favor dejanos tus datos para que podamos contactarnos.</p>
        <form id="contactForm">
          <div class="mb-3">
            <label class="form-label" htmlFor="name"></label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Nombre y apellido"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="emailAddress"></label>
            <input
              class="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email"
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="message"></label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Mensaje"
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
