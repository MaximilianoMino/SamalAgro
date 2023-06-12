import React from 'react'
import Purchase from '../purchase/Purchase'
import Sales from '../sales/Sales'
import Consult from '../consult/Consult'
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai';

const ModalContainer = ({ setConsultModal, setSalesModal, setPurchaseModal, english, setSuccessCard  }) => {
   
    const closeToggle = () => {
        if (setConsultModal) {
          setConsultModal(false);
        } else if (setSalesModal) {
          setSalesModal(false);
        } else if (setPurchaseModal) {
          setPurchaseModal(false);
        }
      };

  return (

    <div className='modal-wrapp'>
        <div className='modal-container'>
            <div className='modal-header'>
                <p className='modal-title'>{english ? "Let's talk" : "¡Conversemos" }!</p> 
                <AiOutlineClose className="modal-close-btn" onClick={() => closeToggle()}/>
            </div>
            <div className='modal-input-group'>
                { setPurchaseModal && <Purchase english={english} setSuccessCard={setSuccessCard}  /> }
                { setSalesModal && <Sales english={english} setSuccessCard={setSuccessCard} /> }
                { setConsultModal && <Consult english={english} setSuccessCard={setSuccessCard} /> }
            </div>
        
        </div>
    </div>
  )
}

export default ModalContainer