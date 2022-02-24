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
    <section id="contact" className="contact-container" data-aos="zoom-in">
      <div className="form-container">
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
          <div class="mb-3">
            <label class="form-label" htmlFor="name"></label>
            <input
              id="name"
              type="text"
              name="name"
              className={`form-control ${errors.name && "error"}`}
              placeholder={`${
                english ? "Name and Surname" : "Nombre y apellido"
              }`}
              {...register("name", { required: true })}
            />
          </div>

          <div class="mb-3">
            <label className="form-label" htmlFor="emailAddress"></label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email && "error"}`}
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div class="mb-3">
            <label class="form-label" htmlFor="message"></label>
            <textarea
              id="message"
              className={`form-control ${errors.message && "error"}`}
              name="message"
              type="text"
              {...register("message", { required: true })}
              placeholder={`${english ? "Message" : "Mensaje"}`}
              rows="5"
            ></textarea>
          </div>

          <div class="d-grid">
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
