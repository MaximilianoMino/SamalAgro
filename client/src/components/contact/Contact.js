import React from "react";
import "./contact.css";

const Contact = ({ english }) => {
  return (
    <div id="contact" className="contact-container">
      <div className="form-container">
        {english ? (
          <div>
            <p className="form-title text-start py-4">Contact us</p>
            <p>
              Please, leave us your contact information so that we can
              communicate.
            </p>
          </div>
        ) : (
          <div>
            <p className="form-title text-start py-4">CONTACTÁNOS</p>
            <p>Por favor dejanos tus datos para que podamos contactarnos.</p>
          </div>
        )}

        <form id="contactForm">
          <div class="mb-3">
            <label class="form-label" htmlFor="name"></label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder={`${
                english ? "Name and Surname" : "Nombre y apellido"
              }`}
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="emailAddress"></label>
            <input
              class="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="message"></label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              required
              placeholder={`${english ? "Message" : "Mensaje"}`}
            ></textarea>
          </div>

          <div class="d-grid">
            {english ? (
              <button class="btn btn-danger w-25" type="submit">
                <strong>Submit</strong>
              </button>
            ) : (
              <button class="btn btn-danger w-25" type="submit">
                <strong>Enviar</strong>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
