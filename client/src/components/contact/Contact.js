import React, { useEffect } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = ({ english, setSuccessCard }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const { name, email, message } = data;
    const msg = {
      name,
      email,
      message: `<html><h1>${message}</h1></html>`,
    };
    const form = document.querySelector("#contactForm");
    console.log(msg.message);

    try {
      emailjs
        .sendForm(
          "service_jlnxp0b",
          "template_eyawgje",
          form,
          "user_Nci45Ir3ZSNRSm9x9iPsY"
        )
        .then(
          (result) => {
            console.log("Mensaje enviado con exito: " + result.text);
          },
          (error) => {
            console.log("Error; " + error.text);
          }
        );
      setSuccessCard(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section id="contact" className="contact-container">
      <div className="form-container" data-aos="zoom-in">
        {english ? (
          <div>
            <p className="form-title">Contact us</p>
            <p className="form-subtitle">
              Please, leave us your contact information
              <br /> so that we can communicate.
            </p>
          </div>
        ) : (
          <div>
            <p className="form-title">Contáctanos</p>
            <p className="form-subtitle">
              Por favor déjanos tus datos de contacto
              <br /> para que podamos contactarnos.
            </p>
          </div>
        )}

        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              id="name"
              type="text"
              name="name"
              className={`form-control ${errors.name && "error"}`}
              placeholder=" "
              {...register("name", { required: true })}
            />{" "}
            <label className="form-label" htmlFor="name">
              {english ? "Name and Surname" : "Nombre y apellido"}
            </label>
          </div>

          <div className="mb-3">
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email && "error"}`}
              name="email"
              placeholder=" "
              {...register("email", { required: true })}
            />{" "}
            <label className="form-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="mb-3">
            <textarea
              id="message"
              className={`form-control textarea ${errors.message && "error"}`}
              name="message"
              type="text"
              {...register("message", { required: true })}
              placeholder=" "
              rows="5"
            ></textarea>{" "}
            <label className="form-label" htmlFor="message">
              {english ? "Message" : "Mensaje"}
            </label>
          </div>

          <div className="d-grid">
            {english ? (
              <input
                className="btn  btn-contact w-25"
                type="submit"
                value="Send"
              ></input>
            ) : (
              <input
                className="btn  btn-contact w-25"
                type="submit"
                value="Enviar"
              ></input>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
