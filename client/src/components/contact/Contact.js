import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";

const Contact = ({ english, setSuccessCard }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      setSuccessCard(true);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(watch("name", "email", "textArea"));
  return (
    <div id="contact" className="contact-container">
      <div className="form-container">
        {english ? (
          <div>
            <p className="form-title text-start">Contact us</p>
            <p className="form-subtitle">
              Please, leave us your contact information
              <br /> so that we can communicate.
            </p>
          </div>
        ) : (
          <div>
            <p className="form-title text-start">CONTACTÁNOS</p>
            <p className="form-subtitle">
              Por favor dejanos tus datos de contacto
              <br /> para que podamos contactarnos.
            </p>
          </div>
        )}

        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label class="form-label" htmlFor="name"></label>
            <input
              className={`form-control ${errors.name && "error"}`}
              id="name"
              type="text"
              placeholder={`${
                english ? "Name and Surname" : "Nombre y apellido"
              }`}
              {...register("name", { required: true })}
            />
          </div>

          <div class="mb-3">
            <label className="form-label" htmlFor="emailAddress"></label>
            <input
              className={`form-control ${errors.email && "error"}`}
              id="emailAddress"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="message"></label>
            <textarea
              className={`form-control ${errors.textArea && "error"}`}
              id="message"
              type="text"
              {...register("textArea", { required: true })}
              placeholder={`${english ? "Message" : "Mensaje"}`}
              rows="5"
            ></textarea>
          </div>

          <div class="d-grid">
            {english ? (
              <button class="btn  btn-contact w-25" type="submit">
                <strong>Submit</strong>
              </button>
            ) : (
              <button class="btn  btn-contact w-25" type="submit">
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
