import {  REACT_APP_EMAILJS_SERVICEID_TEST, REACT_APP_EMAILJS_TEMPLATEID_TEST, REACT_APP_EMAILJS_USER_ID } from '../config/globals'

import emailjs from "@emailjs/browser";

export const sendEmail = async ( formData, setSuccessCard, setLoading) => {
    const titleReg = formData.province
        ? "Ventas"
        : formData.destinity_country
            ? "Compra"
      : "Consulta";
  
      const imagesHTML = formData.file
        ? formData.file
              .map(
                  (img) =>
                      `<a href="${img}" target="_blank"><img src="${img}" style="width: 150px; height: 100px; border-radius: 5px; margin: 5px;"/></a>`
              )
              .join("")
        : "";

     const emailParams = {
        title: titleReg,
        date: new Date().toLocaleDateString(),
        email: formData.email,
        fullname: formData.fullname,
        company: formData.company,
        product: formData.product?.label,
        company_origen: formData.company_origen?.label,
        destinity_country: formData.destinity_country?.label,
        phone: formData.phone,
        description: formData.description,
        imagesHTML: imagesHTML && imagesHTML, 
    };


    try {
        const emailSent = await emailjs.send(
            REACT_APP_EMAILJS_SERVICEID_TEST,
            REACT_APP_EMAILJS_TEMPLATEID_TEST,
            { ...emailParams },
            REACT_APP_EMAILJS_USER_ID
        );

        if (emailSent) {
            setSuccessCard(true);
            setLoading(false);
        }

        return emailSent;
    } catch (error) {
        console.error(error);
    }
};