import React, { useState } from 'react'
import ContactBtn from './contactBtn/ContactBtn'
import ModalContainer from './modals/container/ModalContainer'
import { handleClickGA } from 'services/analytics'
import './contact.css'

const Contact = ({ english, setSuccessCard }) => {
    const [purchaseModal, setPurchaseModal] = useState(false);
    const [salesModal, setSalesModal] = useState(false);
    const [consultModal, setConsultModal] = useState(false);

    const openConsultModal = () => {
      console.log("asd");
      
      handleClickGA("formulario", "Click", "Consulta")

      setConsultModal(true)
    }

    const openSalesModal = () => {
      handleClickGA("formulario", "Click", "Ventas")

      setSalesModal(true)
    }

    const openPurchaseModal = () => {
      handleClickGA("formulario", "Click", "Compra")

      setPurchaseModal(true)
    }

  return (
    <section id="contact" className="contact-container">
      <div className="form-container" data-aos="zoom-in">
          <div>
            <p className="form-title">{english ? "What can we help you with?" : "Hola, ¿Cómo podemos ayudarte?"}</p>
            <p className="form-subtitle">{ english ? "Let us know!" : "¡Háganoslo saber!" }</p>
          </div>
       
        <div className="contact-btn-container">
            <ContactBtn text={english ? 'I want to buy': 'Quiero Comprar'}  action={openPurchaseModal} />
            <ContactBtn text={english ? 'I want to sell': 'Quiero Vender'}  action={openSalesModal} />
            <ContactBtn text={english ? 'Other inquiries': 'Otra Consulta'} action={openConsultModal} />
        </div>

            { purchaseModal && <ModalContainer setPurchaseModal={setPurchaseModal} english={english} setSuccessCard={setSuccessCard} /> }
            { salesModal && <ModalContainer setSalesModal={setSalesModal} english={english} setSuccessCard={setSuccessCard} /> }
            { consultModal && <ModalContainer setConsultModal={setConsultModal} english={english} setSuccessCard={setSuccessCard} /> }
      </div>
     
    </section>
  )
}

export default Contact