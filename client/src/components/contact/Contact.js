import React, { useState } from 'react'
import ContactBtn from './contactBtn/ContactBtn'
import './contact.css'
import ModalContainer from './modals/container/ModalContainer'

const Contact = ({ english, setSuccessCard }) => {
    const [purchaseModal, setPurchaseModal] = useState(false);
    const [salesModal, setSalesModal] = useState(false);
    const [consultModal, setConsultModal] = useState(false);

  return (
    <section id="contact" className="contact-container">
      <div className="form-container" data-aos="zoom-in">
          <div>
            <p className="form-title">{english ? "What can we help you with?" : "Hola, ¿Cómo podemos ayudarte?"}</p>
            <p className="form-subtitle">{ english ? "Let us know!" : "¡Háganoslo saber!" }</p>
          </div>
       
        <div className="contact-btn-container">
            <ContactBtn text={english ? 'I want to buy': 'Quiero Comprar'}  action={setPurchaseModal} />
            <ContactBtn text={english ? 'I want to sell': 'Quiero Vender'}  action={setSalesModal} />
            <ContactBtn text={english ? 'Other inquiries': 'Otra Consulta'} action={setConsultModal} />
        </div>

            { purchaseModal && <ModalContainer setPurchaseModal={setPurchaseModal} english={english} setSuccessCard={setSuccessCard} /> }
            { salesModal && <ModalContainer setSalesModal={setSalesModal} english={english} setSuccessCard={setSuccessCard} /> }
            { consultModal && <ModalContainer setConsultModal={setConsultModal} english={english} setSuccessCard={setSuccessCard} /> }
      </div>
     
    </section>
  )
}

export default Contact